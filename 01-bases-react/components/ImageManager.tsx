import { useState, useEffect } from "react"

export function ImageManager() {
  const [images, setImages] = useState<string[] | undefined>(undefined); // tipado obligatorio

  async function fetchImagesList() {
    try {
      const response = await fetch(
        "https://electiva5-api.apolobyte.top/list-images"
      );
      const data = await response.json();
      console.log("Data:", data.images);
      setImages(data.images); // mantiene el tipado correcto
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchImagesList();
  }, []);

  return (
    <ul>
      {images ? (
        images.map((image, index) => (
          <li key={index}>
            <h3>value</h3> {/* No existe el value, solo regresa el nombre de la imagen pero no al URL, nombre, ETC*/}
            <img src={image} alt={"image" + (index + 1)} />
          </li>
        ))
      ) : (
        <p>Cargando imágenes...</p>
      )}
    </ul>
  );
}
