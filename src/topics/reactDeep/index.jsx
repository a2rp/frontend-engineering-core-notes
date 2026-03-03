// src/topics/reactDeep/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiRefreshCcw,
    FiCpu,
    FiBox,
    FiZap,
    FiGitMerge,
    FiCode,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const ReactDeep = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "React deep",
            sub: "React is not just components. It is reconciliation, rendering phases, hooks lifecycle, context propagation, and performance engineering.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    useEffect(() => {
        let tId = null;

        if (open) {
            setIsMounted(true);
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            tId = window.setTimeout(() => setIsMounted(false), TRANSITION_MS);
        }

        return () => {
            if (tId) window.clearTimeout(tId);
        };
    }, [open]);

    return (
        <Styled.Wrapper id="react-deep">
            <div className="top">
                <h2 className="title">React deep</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiLayers /> Virtual DOM
                    </span>
                    <span className="pill">
                        <FiGitMerge /> Reconciliation
                    </span>
                    <span className="pill">
                        <FiZap /> Hooks
                    </span>
                    <span className="pill">
                        <FiCpu /> Performance
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
                            <FiCode />
                        </span>
                        <div>
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} deep
                                internals
                            </div>
                        </div>
                    </div>
                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div className={`panel ${isVisible ? "open" : ""}`}>
                        <div className="panelInner">
                            {/* 1 Virtual DOM */}
                            <section className="sec">
                                <h3>1) Virtual DOM</h3>
                                <p>
                                    The <strong>Virtual DOM</strong> is a
                                    lightweight JavaScript representation of the
                                    real DOM. React compares previous and new
                                    virtual trees before touching the browser.
                                </p>

                                <pre>{`function App() {
  return <h1>Hello</h1>;
}`}</pre>

                                <p>
                                    When state changes, React creates a new
                                    virtual tree, compares it with the old one,
                                    and updates only what changed.
                                </p>
                            </section>

                            {/* 2 Reconciliation */}
                            <section className="sec">
                                <h3>2) Reconciliation</h3>
                                <p>
                                    <strong>Reconciliation</strong> is the
                                    process React uses to determine what changed
                                    between renders.
                                </p>

                                <ul>
                                    <li>
                                        Different element type → full re-render
                                    </li>
                                    <li>Same type → update props only</li>
                                    <li>Keys help React track list items</li>
                                </ul>

                                <pre>{`{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`}</pre>
                            </section>

                            {/* 3 Hooks */}
                            <section className="sec">
                                <h3>3) Hooks internals</h3>
                                <p>
                                    Hooks rely on call order. React internally
                                    stores hooks in an array-like structure per
                                    component.
                                </p>

                                <pre>{`useState()
useEffect()
useMemo()`}</pre>

                                <p>
                                    Changing hook order breaks internal mapping.
                                </p>
                            </section>

                            {/* 4 Render Phases */}
                            <section className="sec">
                                <h3>4) Render vs Commit phase</h3>
                                <p>React has two main phases:</p>

                                <ul>
                                    <li>
                                        <strong>Render phase</strong> -
                                        Calculates changes
                                    </li>
                                    <li>
                                        <strong>Commit phase</strong> - Applies
                                        changes to DOM
                                    </li>
                                </ul>
                            </section>

                            {/* 5 Context */}
                            <section className="sec">
                                <h3>5) Context propagation</h3>
                                <p>
                                    Context allows passing data without prop
                                    drilling. However, all consumers re-render
                                    when value changes.
                                </p>

                                <pre>{`const ThemeContext = createContext("dark");`}</pre>
                            </section>

                            {/* 6 Performance */}
                            <section className="sec">
                                <h3>6) Performance optimization</h3>
                                <ul>
                                    <li>React.memo</li>
                                    <li>useMemo</li>
                                    <li>useCallback</li>
                                    <li>Code splitting</li>
                                </ul>

                                <pre>{`const Expensive = React.memo(Component);`}</pre>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default ReactDeep;
