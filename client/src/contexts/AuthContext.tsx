import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

type AuthContextType = {
  isAuth: boolean;
  accessToken: string | null;
  role: string | null;
  login: (token: string, role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Какая-то ошибка");

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const login = (token: string, userRole: string) => {
    setAccessToken(token);
    setRole(userRole);
    setIsAuth(true);

    localStorage.setItem("accessToken", token);
    localStorage.setItem("role", userRole);
  };

  const logout = () => {
    setAccessToken(null);
    setRole(null);
    setIsAuth(false);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRole = localStorage.getItem("role");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      setRole(storedRole);
      setIsAuth(true);
    } else {
      const tryRefresh = async () => {
        try {
          const response = await axios.get("http://localhost:9999/refresh", {
            withCredentials: true,
          });

          if (response.data.accessToken) {
            login(response.data.accessToken, response.data.role);
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("role", response.data.role);
          } else {
            logout();
          }
        } catch (error) {
          console.error(error);
          logout();
          localStorage.removeItem("accessToken");
          localStorage.removeItem("role");
        }
      };

      tryRefresh();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, accessToken, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
