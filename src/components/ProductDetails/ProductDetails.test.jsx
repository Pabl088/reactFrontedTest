import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import ProductDetails from "./ProductDetails";

vi.mock("../../services/api", () => ({
  addToCart: vi.fn(),
}));

import { addToCart } from "../../services/api";

describe("Componente ProductDetails", () => {
  const mockProduct = {
    id: "1",
    imgUrl: "https://via.placeholder.com/150",
    name: "Producto de prueba",
    brand: "Marca Test",
    model: "Modelo Test",
    price: "100",
    cpu: "Intel i7",
    ram: "16GB",
    os: "Windows 11",
    displaySize: "15.6 pulgadas",
    battery: "5000mAh",
    primaryCamera: ["12MP", "8MP"],
    secondaryCmera: "5MP",
    dimentions: "35x25x2 cm",
    weight: 1200,
    options: {
      colors: [
        { code: "red", name: "Rojo" },
        { code: "blue", name: "Azul" },
      ],
      storages: [
        { code: "128GB", name: "128GB" },
        { code: "256GB", name: "256GB" },
      ],
    },
  };

  const mockSetCartCount = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Renderizado de detalles del producto", () => {
    render(<ProductDetails product={mockProduct} setCartCount={mockSetCartCount} />);

    expect(screen.getByText("Detalles del Producto")).toBeInTheDocument();
    expect(screen.getByText(/Marca:/i)).toBeInTheDocument();
    expect(screen.getByText(/Modelo:/i)).toBeInTheDocument();
    expect(screen.getByText(/\$ 100/i)).toBeInTheDocument();
  });

  test("Renderizado de opciones de color y almacenamiento", () => {
    render(<ProductDetails product={mockProduct} setCartCount={mockSetCartCount} />);

    const colorSelect = screen.getByLabelText(/Color:/i);
    expect(colorSelect).toBeInTheDocument();
    expect(colorSelect.options.length).toBe(2);

    const storageSelect = screen.getByLabelText(/Almacenamiento:/i);
    expect(storageSelect).toBeInTheDocument();
    expect(storageSelect.options.length).toBe(2);
  });

  test("Renderizado de botón de añadir al carrito", async () => {
    addToCart.mockResolvedValueOnce({ count: 5 });

    render(<ProductDetails product={mockProduct} setCartCount={mockSetCartCount} />);

    const colorSelect = screen.getByLabelText(/Color:/i);
    fireEvent.change(colorSelect, { target: { value: "blue" } });

    const storageSelect = screen.getByLabelText(/Almacenamiento:/i);
    fireEvent.change(storageSelect, { target: { value: "256GB" } });

    const addButton = screen.getByText(/Añadir al carrito/i);
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(addToCart).toHaveBeenCalledWith({
        id: mockProduct.id,
        colorCode: "blue",
        storageCode: "256GB",
      });
    });

    expect(mockSetCartCount).toHaveBeenCalledWith(5);
  });

  test("Mostrar alert si no se puede añadir al carrito", async () => {
    window.alert = vi.fn();

    render(<ProductDetails product={mockProduct} setCartCount={mockSetCartCount} />);

    const addButton = screen.getByText(/Añadir al carrito/i);
    fireEvent.click(addButton);

    expect(window.alert).not.toHaveBeenCalledWith("Debe seleccionar las opciones de color y almacenamiento.");
  });
});
