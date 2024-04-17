import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const themeStyles = theme === 'dark' ? { background: 'black', color: 'white' } : { background: 'white', color: 'black' };
  
    return (
      <header style={themeStyles}>
      <h1>Welcome to the Theme Switcher App</h1>
      </header>
    );
  };