import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

export function useAuth() {
  // usarlo
  const context = useContext(AuthContext);
  // si no está o tiene un error, lo lanzamos
  if (context === undefined) {
    throw new Error("authContext needs to be used inside an AuthProvider");
  }
  // si está lo regresamos
  return context;
}
