import React from "react";
import { ThemeContext } from "./themeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMoon, faSun);

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 w-20 h-0 text-gray-500 dark:text-yellow-500  shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faMoon}
            className="w-12 h-12"
            style={{ width: "2rem" }}
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 w-20 h-0 text-gray-600 dark:text-gray-400  focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faSun}
            className="w-12 h-12"
            style={{ width: "2rem" }}
          />
        </button>
      )}
    </div>
  );
};

export default Toggle;
