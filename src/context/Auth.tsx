import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

interface Usuario{ 
  id?: string,
  email?: string,
  senha?: string
}

interface AuthContextType {
  usuario: Usuario | null;
  signed: boolean;
  singout: any;
  signin: ({ email, senha }: { email: string; senha: string }) => Promise<void>;
};


export const AuthContext = createContext<AuthContextType | null>(null);

type AutenticacaoProviderProps = {
  children: ReactNode;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export const AutenticacaoProvider = ({ children }: AutenticacaoProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const carregarDados = async () => {
      const usuarioLocal = localStorage.getItem("@Auth:usuario");
      const tokenLocal = localStorage.getItem("@Auth:token");

      if (usuarioLocal && tokenLocal) {
        setUsuario(JSON.parse(usuarioLocal)); 
      }
    };
    carregarDados();
  }, []);

  const signin = async ({ email, senha }: { email: string; senha: string }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth", { email, senha });

      if (response.data.error) {
        alert(response.data.error);
      } else {
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        setUsuario(response.data.usuario);
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:usuario", JSON.stringify(response.data.usuario)); // Armazena como string JSON
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const singout = ()=>{ 
    localStorage.clear();
    setUsuario(null);

    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ usuario, signed: !!usuario, signin, singout }}>
      {children}
    </AuthContext.Provider>
  );
};
