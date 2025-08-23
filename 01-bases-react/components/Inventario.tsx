import { useState } from "react";

interface CategoryI {
  name: string;
  description: string;
}

interface ProductoI {
  name: string;
  description: string;
  image_url: string;
  category: CategoryI;
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}

export function Inventario() {
  // Lista de productos inicial (mock)
  const initialProducts: ProductoI[] = [
    {
      name: "Jabón de tocador",
      description: "Jabón de tocador con aroma a lavanda",
      image_url:
        "https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg",
      category: {
        name: "Higiene Personal",
        description: "Productos para el cuidado personal",
      },
      quantity: 100,
      price: 20000,
      height: 3,
      width: 5,
      length: 15,
      isEnabled: true,
    },
    {
      name: "Comida para perros",
      description: "Comida balanceada para perros adultos",
      image_url: "https://electiva5-api.apolobyte.top/uploads/dog-food.jpg",
      category: {
        name: "Mascotas",
        description: "Productos para el cuidado de mascotas",
      },
      quantity: 50,
      price: 30000,
      height: 10,
      width: 20,
      length: 30,
      isEnabled: false,
    },
  ];

  const [productsState, setProductsState] =
    useState<ProductoI[]>(initialProducts);

  async function getData() {
    const response = await fetch(
      "https://electiva5-api.apolobyte.top/products"
    );
    const data: ProductoI[] = await response.json();
    console.log("products: ", data);
    setProductsState(data);
  }

  return (
    <>
      <h1>Inventario</h1>

      <ul>
        {productsState.length > 0 ? (
          productsState.map((product, index) => (
            <li key={index}>
              <img src={product.image_url} alt={product.name} width="100" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                <b>Categoría:</b> {product.category.name}
              </p>
              <p>
                <b>Precio:</b> ${product.price}
              </p>
              <p>
                <b>Cantidad:</b> {product.quantity}
              </p>
              <p>
                <b>Dimensiones:</b> {product.height} x {product.width} x{" "}
                {product.length} cm
              </p>
              <p>
                <b>Estado:</b>{" "}
                {product.isEnabled ? "Disponible" : "No disponible"}
              </p>
              <hr />
            </li>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </ul>

      <button onClick={getData}>Actualizar</button>
    </>
  );
}
