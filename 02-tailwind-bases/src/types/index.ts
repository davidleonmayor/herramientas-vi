export interface NavLinkType {
  name: string;
  path: string;
}

export interface Itask {
  id: number;
  title: string;
  content: string;
  end: boolean;
}

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// }

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" }
  | { type: "CLEAR_ERROR" }
  | { type: "SET_LOADING"; payload: boolean };

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}
