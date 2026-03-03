import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiShare2,
    FiRefreshCw,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const ContextTopic = () => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "React Context",
            sub: "Context allows data to be shared across the component tree without manually passing props at every level.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    useEffect(() => {
        let id;
        if (open) {
            setMounted(true);
            requestAnimationFrame(() => setVisible(true));
        } else {
            setVisible(false);
            id = setTimeout(() => setMounted(false), TRANSITION_MS);
        }
        return () => clearTimeout(id);
    }, [open]);

    return (
        <Styled.Wrapper>
            <div className="top">
                <h2 className="title">Context</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiLayers /> Global state
                    </span>
                    <span className="pill">
                        <FiShare2 /> Avoid prop drilling
                    </span>
                    <span className="pill">
                        <FiRefreshCw /> Rerender behavior
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiZap />
                        </span>
                        <div>
                            <div className="accTitle">
                                React Context deep explanation
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} full
                                explanation with examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {mounted && (
                    <div className={`panel ${visible ? "open" : ""}`}>
                        <div className="panelInner">
                            {/* SECTION 1 */}
                            <section className="sec">
                                <h3>1) Why Context exists</h3>
                                <p>
                                    In React, data flows from parent to child
                                    via props. But when many nested components
                                    need the same data, passing props at every
                                    level becomes painful. This is called
                                    <strong> prop drilling</strong>.
                                </p>

                                <div className="codeBlock">
                                    <pre>{`App
 └── Layout
     └── Sidebar
         └── Menu
             └── MenuItem (needs theme)`}</pre>
                                </div>

                                <p>
                                    Without Context, you must pass theme through
                                    all intermediate components.
                                </p>
                            </section>

                            {/* SECTION 2 */}
                            <section className="sec">
                                <h3>2) What Context actually is</h3>
                                <p>
                                    Context is a mechanism that lets you share
                                    data across the component tree without
                                    passing props manually.
                                </p>

                                <div className="miniList">
                                    <div>createContext - creates context</div>
                                    <div>Provider - provides value</div>
                                    <div>useContext - consumes value</div>
                                </div>
                            </section>

                            {/* SECTION 3 */}
                            <section className="sec">
                                <h3>3) Basic Example</h3>

                                <div className="codeBlock">
                                    <pre>{`// create context
import { createContext } from "react";

export const ThemeContext = createContext();

// provide value
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// consume value
import { useContext } from "react";

const theme = useContext(ThemeContext);`}</pre>
                                </div>
                            </section>

                            {/* SECTION 4 */}
                            <section className="sec">
                                <h3>4) How React handles updates</h3>
                                <p>
                                    When the Provider value changes, all
                                    components consuming that context re-render.
                                </p>

                                <div className="miniList">
                                    <div>
                                        Context update bypasses React.memo
                                    </div>
                                    <div>
                                        All consumers re-render when value
                                        reference changes
                                    </div>
                                    <div>
                                        Use useMemo to optimize object values
                                    </div>
                                </div>

                                <div className="codeBlock">
                                    <pre>{`// bad
<ThemeContext.Provider value={{ theme }}>

// better
const value = useMemo(() => ({ theme }), [theme]);

<ThemeContext.Provider value={value}>`}</pre>
                                </div>
                            </section>

                            {/* SECTION 5 */}
                            <section className="sec">
                                <h3>5) When NOT to use Context</h3>
                                <div className="miniList">
                                    <div>
                                        Do not use for rapidly changing data
                                    </div>
                                    <div>Avoid for large state trees</div>
                                    <div>Use local state when possible</div>
                                </div>
                            </section>

                            {/* SECTION 6 */}
                            <section className="sec">
                                <h3>6) Full Forms</h3>
                                <div className="miniList">
                                    <div>DOM - Document Object Model</div>
                                    <div>
                                        API - Application Programming Interface
                                    </div>
                                    <div>JSX - JavaScript XML</div>
                                </div>
                            </section>

                            <div className="finalNote">
                                Context is powerful but not a global state
                                manager. Use it thoughtfully.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default ContextTopic;
