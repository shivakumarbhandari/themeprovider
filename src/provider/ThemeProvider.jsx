import { useMemo, useState } from "react";
import ThemeContext from "../context/ThemeContext.jsx"; 



export const ThemeProvider = ({ children }) => {
     const [mode, setMode] = useState("light");

  const value = useMemo(
    () => ({
      mode,
      toggle: () =>
        setMode(current => (current === "light" ? "dark" : "light")),
    }),
    [mode]
  );
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}   