import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const UserForm = () => {
    const { theme } = useContext(ThemeContext);
    const themeStyles = theme === 'dark' ? { background: 'black', color: 'white' } : { background: 'white', color: 'black' };
  
    return (
        <div style={themeStyles}>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };