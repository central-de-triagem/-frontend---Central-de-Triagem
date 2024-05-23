import { ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuth } from "../../shared/hooks";

export const Dashboard = () => {
  const {logout} = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">Ir para Landing page</Link>
      <br/>
      <Link to="/certidao">Gerar certidão</Link>
      <br />
      <label onClick={logout} style={{cursor: "pointer"}}>
        <ExitToApp />
        Sair
      </label>
    </div>
  );
};
