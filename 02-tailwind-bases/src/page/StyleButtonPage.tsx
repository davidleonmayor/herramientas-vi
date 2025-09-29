import { StyledButton } from "@/components/StyledButton";

export function StyledButtonPage() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] px-6 flex items-center justify-center">
      <StyledButton
        label="Desable button"
        color="bg-blue-400"
        handleClick={() => {}}
      />
    </div>
  );
}
