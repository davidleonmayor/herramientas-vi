import FilterList from "../components/FilterList";

export function FilterPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">
        Ejercicio 2: Lista con filtrado
      </h2>
      <div className="flex items-center justify-center">
        <FilterList />
      </div>
    </div>
  );
}
