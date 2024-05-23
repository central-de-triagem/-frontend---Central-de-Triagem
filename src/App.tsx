import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./shared/styles/global.styles";
import { AppThemeProvider } from "./shared/contexts";
import { AuthProvider } from "./shared/contexts/AuthContext";

import "./shared/utils/TraducoesYup";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </AuthProvider>
  );
};
