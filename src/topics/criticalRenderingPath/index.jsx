// src/topics/criticalRenderingPath/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiActivity,
    FiLayers,
    FiCpu,
    FiZap,
    FiFileText,
    FiGrid,
    FiCheckCircle,
    FiAlertTriangle,
    FiArrowRight,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const CriticalRenderingPath = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Critical rendering path",
            sub: "Critical rendering path (CRP) is the sequence of steps the browser follows to turn HTML, CSS, and JavaScript into pixels on the screen. If you understand CRP, you can predict why a page feels slow and how to fix it.",
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
        <Styled.Wrapper id="critical-rendering-path">
            <div className="top">
                <h2 className="title">Critical rendering path</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiFileText /> HTML to DOM
                    </span>
                    <span className="pill">
                        <FiLayers /> CSS to CSSOM
                    </span>
                    <span className="pill">
                        <FiGrid /> Render tree
                    </span>
                    <span className="pill">
                        <FiZap /> Paint pixels
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="crp-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiActivity />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                step-by-step pipeline and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="crp-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <strong>Critical rendering path</strong>{" "}
                                    means the minimum work required to show
                                    something useful on screen.
                                    <br />
                                    In simple words: how fast the browser can
                                    build structure, apply styles, and paint.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why it matters
                                        </div>
                                        <p className="miniText">
                                            Slow CRP means slow first paint,
                                            slow content display, and a page
                                            that feels stuck.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What it controls
                                        </div>
                                        <p className="miniText">
                                            When the browser can render, and
                                            what blocks rendering (CSS, JS,
                                            fonts).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">The pipeline steps</h3>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTop">
                                            <span className="flowIcon">
                                                <FiFileText />
                                            </span>
                                            <div className="flowTitle">
                                                Parse HTML
                                            </div>
                                        </div>
                                        <p className="flowText">
                                            Browser parses HTML and builds the{" "}
                                            <span className="mono">DOM</span>{" "}
                                            (Document Object Model).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTop">
                                            <span className="flowIcon">
                                                <FiLayers />
                                            </span>
                                            <div className="flowTitle">
                                                Parse CSS
                                            </div>
                                        </div>
                                        <p className="flowText">
                                            Browser parses CSS and builds the{" "}
                                            <span className="mono">CSSOM</span>{" "}
                                            (CSS Object Model).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTop">
                                            <span className="flowIcon">
                                                <FiGrid />
                                            </span>
                                            <div className="flowTitle">
                                                Build render tree
                                            </div>
                                        </div>
                                        <p className="flowText">
                                            DOM + CSSOM combine to form the{" "}
                                            <span className="mono">
                                                render tree
                                            </span>{" "}
                                            (only visible nodes).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTop">
                                            <span className="flowIcon">
                                                <FiCpu />
                                            </span>
                                            <div className="flowTitle">
                                                Layout
                                            </div>
                                        </div>
                                        <p className="flowText">
                                            Compute sizes and positions of
                                            elements. This is also called{" "}
                                            <span className="mono">reflow</span>
                                            .
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTop">
                                            <span className="flowIcon">
                                                <FiZap />
                                            </span>
                                            <div className="flowTitle">
                                                Paint
                                            </div>
                                        </div>
                                        <p className="flowText">
                                            Fill pixels (text, colors, borders,
                                            shadows) on the screen.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        CRP in one line
                                    </div>
                                    <pre className="code">{`HTML -> DOM
CSS -> CSSOM
DOM + CSSOM -> Render Tree
Render Tree -> Layout (Reflow)
Layout -> Paint (Pixels)`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">What blocks rendering</h3>
                                <p className="p">
                                    In CRP, some resources can stop the browser
                                    from painting quickly. These are called{" "}
                                    <strong>render blocking</strong> resources.
                                </p>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertTriangle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Important rule
                                        </div>
                                        <div className="wSub">
                                            CSS is render blocking by default.
                                            JavaScript can be parser blocking
                                            and can delay rendering if it
                                            touches DOM before styles are ready.
                                        </div>
                                    </div>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">CSS</span>
                                        <span className="value">
                                            Render blocking - browser often
                                            waits for CSS before first paint.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">JS</span>
                                        <span className="value">
                                            Parser blocking - normal scripts
                                            pause HTML parsing while they run.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Fonts</span>
                                        <span className="value">
                                            Can delay text rendering depending
                                            on font loading policy.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Images</span>
                                        <span className="value">
                                            Usually not render blocking for
                                            first paint, but can affect layout
                                            if sizes are unknown.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Scripts - normal vs defer vs async
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Examples</div>
                                    <pre className="code">{`<!-- Normal: blocks HTML parsing -->
<script src="app.js"></script>

<!-- Defer: downloads in parallel, runs after HTML is parsed -->
<script src="app.js" defer></script>

<!-- Async: downloads in parallel, runs as soon as ready (can interrupt parsing) -->
<script src="analytics.js" async></script>`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">defer</div>
                                        <p className="miniText">
                                            Best default for app scripts. Keeps
                                            parsing fast and runs scripts after
                                            DOM is ready.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">async</div>
                                        <p className="miniText">
                                            Best for independent scripts
                                            (analytics). Order is not
                                            guaranteed.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to optimize the critical path
                                </h3>

                                <div className="checkGrid">
                                    <div className="check">
                                        <FiCheckCircle />
                                        Minimize render blocking CSS
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle />
                                        Use defer for app scripts
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle />
                                        Inline critical CSS for above-the-fold
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle />
                                        Preload key fonts and CSS
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle />
                                        Set image width and height to avoid
                                        layout jumps
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle />
                                        Reduce DOM size and CSS complexity
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Preload example
                                    </div>
                                    <pre className="code">{`<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/styles.css" as="style" />
<link rel="stylesheet" href="/styles.css" />`}</pre>
                                </div>

                                <div className="finalNote">
                                    Optimization is about making the first
                                    useful paint happen faster. After that, you
                                    optimize interactivity and ongoing updates.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Tiny mental model</h3>
                                <div className="mental">
                                    <div className="mRow">
                                        <span className="mLeft">
                                            HTML
                                            <FiArrowRight />
                                            DOM
                                        </span>
                                        <span className="mRight">
                                            Structure tree
                                        </span>
                                    </div>
                                    <div className="mRow">
                                        <span className="mLeft">
                                            CSS
                                            <FiArrowRight />
                                            CSSOM
                                        </span>
                                        <span className="mRight">
                                            Style rules tree
                                        </span>
                                    </div>
                                    <div className="mRow">
                                        <span className="mLeft">
                                            DOM + CSSOM
                                            <FiArrowRight />
                                            Render tree
                                        </span>
                                        <span className="mRight">
                                            Visible nodes with styles
                                        </span>
                                    </div>
                                    <div className="mRow">
                                        <span className="mLeft">
                                            Render tree
                                            <FiArrowRight />
                                            Layout
                                        </span>
                                        <span className="mRight">
                                            Sizes and positions
                                        </span>
                                    </div>
                                    <div className="mRow">
                                        <span className="mLeft">
                                            Layout
                                            <FiArrowRight />
                                            Paint
                                        </span>
                                        <span className="mRight">
                                            Pixels on screen
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">CRP</span> -
                                        Critical Rendering Path
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">HTML</span> -
                                        HyperText Markup Language
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CSSOM</span> -
                                        CSS Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CSS</span> -
                                        Cascading Style Sheets
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default CriticalRenderingPath;
