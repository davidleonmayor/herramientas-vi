import { useState } from "react";
import { Practica1 } from "./practica-1-JESUS-DAVID-LEON-CHITO.tsx"

// type userObjectT = {
//   name: string;
//   email: string;
//   age: number;
// };
interface userObjectT {
  name: string;
  email: string;
  age: number;
  address?: string;
}

export function BasicTypes() {
  // variables
  const name: string = "David";
  const age: number = 28;
  const isActive: boolean = true;

  // listas
  const names: string[] = ["Julian", "Victor", "Dhayana", "San"];
  let userObj: userObjectT = {
    name: "Hugo",
    age: 30,
    email: "hugo@email.com&quot",
  };

  function showUserData() {
    console.log(`Nombre: ${userObj.name}, age: ${userObj.age}, email: ${userObj.email}`)
    
  }

  const [active, setActive] = useState(isActive);

async function getUserFromAPI() {
  try {
    const response = await fetch("https://electiva5-api.apolobyte.top/user")
    const data = await response.json()
    console.log(data)
    userObj = data
  } catch (e) {

  }
}

  return (
    <div className="">
      <h2>Variables</h2>
      <ol>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        {/* Operador ternario. */}
        <li>is acetive: {active ? "yes" : "no"}</li>
      </ol>
      <hr />
      {/* ul>li{"nombre $"}*4 */}
      <h2> Lista de nombres</h2>
      <ul>
        <>
          {/* Mapping */}
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </>
      </ul>
      <button
        onClick={() => {
          console.log(active);
          setActive(!active);
        }}
      >
        Change
      </button>
      <hr />
      <h2>Using join</h2>
      {names.join(",")}

      {/* 6.6. Objetos Literales en TypeScrip */}
      <ul>
        <li>name: {userObj["name"]}</li>
        <li>email: {userObj["email"]}</li>
        <li>age: {userObj["age"]}</li>
      </ul>

      <p>
        first item: { userObj.name}
      </p> 
      <button onClick={showUserData}>show name in console</button>

      <h4>Imprimir los datos de un usuario con un boton y una funcion flecha</h4>
      <button
        onClick={() => console.log(
          `Nombre: ${userObj.name}, age: ${userObj.age}, email: ${userObj.email}`
        )}
      >
      Mostrar los datos del usuario por la consola del navegador
      </button>

      <h4>Obtener datos utilizando una función asíncrona</h4>
      <button
        onClick={() => getUserFromAPI()}
      >
        Obtener datos de una API
      </button>
      <ul>
        <li> {userObj.name} </li>
        <li> {userObj.age} </li>
        <li> {userObj.email} </li>
      </ul>

      <hr />
      <h2>Solución de los retos planteados</h2>
      <Practica1 />
    </div>
  );
}


