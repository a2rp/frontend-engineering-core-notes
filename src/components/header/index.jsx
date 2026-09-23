import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import { FiMoon, FiSun, FiLayout, FiGlobe, FiLayers } from "react-icons/fi";

const THEME_LS_KEY = "frontend-engineering-core-notes-theme";

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem(THEME_LS_KEY);
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="frontend-engineering-core-notes"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                frontend-engineering-core-notes
                            </div>
                            <div className="subTitle">
                                HTML, CSS, rendering, React internals,
                                performance
                            </div>
                        </div>
                    </div>

                    <div
                        className="miniStats"
                        aria-label="Frontend focus areas"
                    >
                        <span className="stat">
                            <span className="sIcon">
                                <FiGlobe />
                            </span>
                            <span className="sText">Browser</span>
                        </span>

                        <span className="stat">
                            <span className="sIcon">
                                <FiLayout />
                            </span>
                            <span className="sText">Layout</span>
                        </span>

                        <span className="stat">
                            <span className="sIcon">
                                <FiLayers />
                            </span>
                            <span className="sText">React</span>
                        </span>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
