import type { ReactNode } from "react";
import type { AuthContextType, AuthState, User } from "@/types";
import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "@/reducers/authReducer";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type TAuthProvider = {
  children: ReactNode;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true, // true inicialmente para verificar sesión guardada
  error: null,
};

function AuthProvider({ children }: TAuthProvider) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkStoredSession();
  }, []);

  const checkStoredSession = () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    } catch (error) {
      console.error("Error al recuperar sesión:", error);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    dispatch({ type: "LOGIN_START" });

    try {
      // Simular llamada a API con delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validación básica (en producción esto sería una llamada real a tu backend)
      if (email === "admin@ejemplo.com" && password === "admin123") {
        const user: User = {
          id: "1",
          email: email,
          name: "Administrador",
          role: "admin",
        };

        // Guardar usuario en localStorage
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } else if (email === "usuario@ejemplo.com" && password === "user123") {
        const user: User = {
          id: "2",
          email: email,
          name: "Usuario Demo",
          role: "user",
        };

        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      dispatch({ type: "LOGIN_FAILURE", payload: errorMessage });
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  // Limpiar errores
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
