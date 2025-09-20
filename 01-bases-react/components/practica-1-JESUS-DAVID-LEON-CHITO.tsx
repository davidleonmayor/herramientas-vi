import {useState} from "react"

interface AnimalI {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}


export function Practica1() {
  const initialAnimals: AnimalI[] = [
     { name: "Leon", age: 7, color: "white", isPet: false, height: 1.5 },
    { name: "Perro", age: 3, color: "brown", isPet: true, height: 0.6 },
    { name: "Gato", age: 2, color: "black", isPet: true, height: 0.4 },
    { name: "Elefante", age: 12, color: "gray", isPet: false, height: 3.2 },
    { name: "Loro", age: 1, color: "green", isPet: true, height: 0.3 }
  ];

  const [animalsFromAPI, setAnimalsFromAPI] = useState<AnimalI[]>(initialAnimals)

  // fetch data from the API and set it in the state
  async function getFromAPI() {
    try {
      const response = await fetch("https://electiva5-api.apolobyte.top/animals")
      const data = await response.json()
      console.log(data)
      setAnimalsFromAPI(data)
    }
    catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2>2 mensaje de bienvenida</h2>
      <p>VIENVENIDO</p>

      <h2>5 Recorrer la lista de animales</h2>
      <ul style={{listStyleType: "none"}}>
        {animalsFromAPI.map((animal, index) => (
          <li key={index}>
            <h3>Animal {index + 1}</h3> 
            <p>Nombre: {animal.name}</p>
            <p>Edad: {animal.age} </p>
            <p>Color: {animal.color} </p>
            <p>Es mascota: {animal.isPet? "Si" : "No"} </p>
          </li>
        ))}
      </ul>

      <button
        onClick={getFromAPI}
      >Actualizar datos</button>
    </>
  )
}
