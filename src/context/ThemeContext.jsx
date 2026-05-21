import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggle: () => {
        mode => (mode === "light" ? "dark" : "light")

    }

});
export default ThemeContext;
