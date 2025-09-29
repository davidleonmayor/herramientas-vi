import ButtonSwitch from "../components/ButtonSwitch";

export function ButonPage() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] px-6 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold text-center mb-6">
          Ejercicio 1: ButtonSwitch
        </h2>
        <div className="flex items-center justify-center">
          <ButtonSwitch />
        </div>
    </div>
  );
}
