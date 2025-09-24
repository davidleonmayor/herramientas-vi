import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ButtonSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Button
        disabled={isChecked}
        className={
          isChecked ? "opacity-25  cursor-not-allowed" : "cursor-pointer"
        }
        onClick={() => {
          if (!isChecked) {
            toast.success("Botón habilitado");
          }
        }}
      >
        {isChecked ? "No puedes hacer click 😭" : "Puedes hacer click 😊"}
      </Button>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-4 h-4"
        />
        <label>{isChecked ? "Habilitar boton" : "Desabilitar boton"}</label>
      </div>
    </div>
  );
}
