import { Button } from "@/components/ui";
import { useRandomNumber } from "@/hooks/useRandomNum";

export function RandomNumPage() {
  const { num, genNum } = useRandomNumber({ min: 3, max: 1000 });

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center flex-col p-6 space-y-4">
      <Button variant="super" onClick={genNum}>
        Generar número aleatorio
      </Button>
      <p>Número generado: {num}</p>
    </div>
  );
}
