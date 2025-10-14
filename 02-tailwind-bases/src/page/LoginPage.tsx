import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export function LoginPage() {
  //   const { login, isLoading, error, clearError } = useAuth();
  const { login, state } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await login(email, password);
    login(email, password);
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Iniciar Sesión
      </h2>

      {/* {error && (
        <div
          style={{
            padding: "10px",
            marginBottom: "15px",
            backgroundColor: "#fee",
            border: "1px solid #fcc",
            borderRadius: "4px",
            color: "#c33",
          }}
        >
          {error}
          <button
            onClick={clearError}
            style={{
              float: "right",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )} */}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            // disabled={isLoading}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            placeholder="admin@ejemplo.com"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Contraseña:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            // disabled={isLoading}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            placeholder="admin123"
          />
        </div>

        <button
          type="submit"
          //   disabled={isLoading}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
            // backgroundColor: isLoading ? "#999" : "#007bff",
            border: "none",
            borderRadius: "4px",
            // cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {/* {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"} */}
        </button>
      </form>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          fontSize: "12px",
        }}
      >
        <strong>Credenciales de prueba:</strong>
        <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
          <li>Admin: admin@ejemplo.com / admin123</li>
          <li>Usuario: usuario@ejemplo.com / user123</li>
        </ul>
      </div>
    </div>
  );
}
