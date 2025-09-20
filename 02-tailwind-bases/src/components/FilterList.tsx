import React, { useState, useEffect } from "react";

const BASE = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

export default function FilterList() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<string[]>(BASE);

  useEffect(() => {
    const list = BASE.filter((n) =>
      n.toLowerCase().includes(query.toLowerCase())
    );
    setItems(list);
  }, [query]);

  return (
    <div className="mt-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Buscar fruta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      <ul className="divide-y divide-gray-200">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-50">
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No hay coincidencias</li>
        )}
      </ul>
    </div>
  );
}
