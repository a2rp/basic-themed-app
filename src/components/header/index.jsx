import { useEffect, useState } from "react";
import { TbMoon, TbSun } from "react-icons/tb";
import { Styled } from "./styled";

const THEME_KEY = "basic-themed-app-theme";

const getInitialTheme = () => {
    try {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }
    } catch {
        // Continue with the system preference when storage is unavailable.
    }

    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const Header = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            // The theme still works for the current session without storage access.
        }
    }, [theme]);

    const nextTheme = theme === "light" ? "dark" : "light";

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Brand>
                    <Styled.Logo
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Basic Themed App logo"
                    />
                    <Styled.Name>Basic Themed App</Styled.Name>
                </Styled.Brand>
                <Styled.Theme
                    type="button"
                    aria-label={`Switch to ${nextTheme} theme`}
                    aria-pressed={theme === "light"}
                    onClick={() => setTheme(nextTheme)}
                >
                    {theme === "light" ? <TbMoon aria-hidden="true" size={20} /> : <TbSun aria-hidden="true" size={20} />}
                </Styled.Theme>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
