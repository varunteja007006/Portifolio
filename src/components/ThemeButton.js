import React from "react";

import { Button } from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useThemeContext();
  const setlocal = () => {
    localStorage.setItem("theme", theme === "-light" ? "-dark" : "-light");
  };

  return (
    <div>
      {" "}
      <Button
        className={
          `shadow-sm theme-btn ` +
          (theme === "-dark" ? "theme-btn-dark" : "theme-btn")
        }
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Click to change the theme"
        onClick={() => {
          setTheme(theme === "-light" ? "-dark" : "-light");
          setlocal();
        }}
      >
        {theme === "-light" ? (
          <>
            <span>
              <i className="fa-regular fa-moon" alt=""></i>
            </span>{" "}
            Dark Mode
          </>
        ) : (
          <>
            <span>
              <i className="fa-regular fa-sun"></i>
            </span>{" "}
            Light Mode
          </>
        )}
      </Button>
    </div>
  );
}

export default ThemeButton;
