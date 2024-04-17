import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Header } from "./Header";
import { UserForm } from "./UserForm";
import { ThemeSwitcher } from "./ThemeSwitcher";

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <UserForm />
      <ThemeSwitcher />
    </ThemeContext.Provider>
  );
};

export default App;