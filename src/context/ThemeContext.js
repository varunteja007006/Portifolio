import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("-light");

  useEffect(() => {
    //we get json format from local storage so we parse it into objects for JavaScript
    const theme = localStorage.getItem("theme");
    //check if we got theme from local storage, if yes then set the theme
    if (theme) {
      setTheme(theme);
    }
  }, []);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
