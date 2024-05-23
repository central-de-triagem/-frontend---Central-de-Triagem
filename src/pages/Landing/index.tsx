import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppTheme } from "../../shared/hooks";

export const Landing = () => {
  const {toggleTheme} = useAppTheme();
  
  return (
    <div>
      <h1>Landing page</h1>
      <Link to="/login">Login</Link>

      <Button variant="contained" onClick={toggleTheme}>Trocar tema</Button>
    </div>
  );
};