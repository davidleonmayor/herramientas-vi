import { useState } from "react";

export function BasicTypes() {
  // variables
  const name: string = "David";
  const age: number = 28;
  const isActive: boolean = true;

  // listas
  const names: string[] = ["Julian", "Victor", "Dhayana", "San"];

  const [active, setActive] = useState(isActive);

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
      
    </div>
  );
}
