// src/topics/codeSplitting/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiScissors,
    FiPackage,
    FiZap,
    FiLayers,
    FiClock,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const CodeSplitting = () => {
    const [open, setOpen] = useState(false);

    // load on click (mount only when opened)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Code splitting",
            sub: "Code splitting means breaking your JavaScript bundle into smaller chunks so the user downloads only what is needed right now. This improves initial load time and makes the app feel faster.",
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
        <Styled.Wrapper id="code-splitting">
            <div className="top">
                <h2 className="title">Code splitting</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiScissors /> Split JS chunks
                    </span>
                    <span className="pill">
                        <FiClock /> Faster first load
                    </span>
                    <span className="pill">
                        <FiPackage /> Smaller bundles
                    </span>
                    <span className="pill">
                        <FiZap /> Better UX
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="code-splitting-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiScissors />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                simple mental model, React examples, and do and
                                do not rules
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="code-splitting-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    When you build a frontend app, the bundler
                                    (Vite, Webpack, etc.) produces one or more{" "}
                                    <strong>bundles</strong> (JavaScript files).
                                    If everything is in one big bundle, the
                                    initial download becomes heavy.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Bundle</div>
                                        <p className="miniText">
                                            A compiled JavaScript output file
                                            that the browser downloads to run
                                            your app.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Chunk</div>
                                        <p className="miniText">
                                            A smaller piece of a bundle loaded
                                            separately, often on demand.
                                        </p>
                                    </div>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">Core idea</div>
                                        <div className="cSub">
                                            Load critical code first. Load the
                                            rest only when user needs it.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Why code splitting helps</h3>
                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Without splitting
                                        </div>
                                        <p className="flowText">
                                            - One big JS file
                                            <br />- Slow initial download
                                            <br />- Slow parse and execute
                                            <br />- First paint delays
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            With splitting
                                        </div>
                                        <p className="flowText">
                                            - Smaller initial JS
                                            <br />- Faster first render
                                            <br />- Extra features load later
                                            <br />- Better perceived speed
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Best for
                                        </div>
                                        <p className="flowText">
                                            - Multi-page apps
                                            <br />- Heavy dashboards
                                            <br />- Feature-rich products
                                            <br />- Admin panels
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    React approach - route based splitting
                                </h3>
                                <p className="p">
                                    The most common and safest approach is:
                                    split by routes. Example: Home loads first,
                                    heavy pages load only when visited.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        React lazy + Suspense example
                                    </div>
                                    <pre className="code">{`import React, { lazy, Suspense } from "react";

const Reports = lazy(() => import("./pages/reports"));
const Settings = lazy(() => import("./pages/settings"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      {/* Your routes here */}
      {/* /reports -> loads Reports chunk */}
      {/* /settings -> loads Settings chunk */}
    </Suspense>
  );
}`}</pre>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            React.lazy
                                        </span>
                                        <span className="value">
                                            Loads a component using dynamic
                                            import and creates a separate chunk.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Suspense</span>
                                        <span className="value">
                                            Shows a fallback UI while chunk is
                                            downloading.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Route split
                                        </span>
                                        <span className="value">
                                            Best default. Small initial bundle.
                                            Easy mental model.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Component level splitting
                                </h3>
                                <p className="p">
                                    Use this when a feature is heavy and not
                                    always needed. Example: a chart library,
                                    rich text editor, or a complex modal.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Split a heavy modal feature
                                    </div>
                                    <pre className="code">{`import React, { lazy, Suspense, useState } from "react";

const HeavyModal = lazy(() => import("./components/heavyModal"));

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open heavy modal</button>

      {open && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <HeavyModal onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiLayers />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Good candidates
                                        </div>
                                        <div className="cSub">
                                            Charts, editors, map SDKs, large
                                            tables, PDF viewers, code editors.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">SPA</span> -
                                        Single Page Application
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">SSR</span> -
                                        Server Side Rendering
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CSR</span> -
                                        Client Side Rendering
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">TTI</span> - Time
                                        To Interactive
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">LCP</span> -
                                        Largest Contentful Paint
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Code splitting improves the first load by
                                    reducing initial JS size. But keep it
                                    practical. Split by routes first, then split
                                    heavy features.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Do and do not rules</h3>
                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Do - split by routes
                                        </div>
                                        <div className="a">
                                            Easy win and low complexity.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Do - split heavy features
                                        </div>
                                        <div className="a">
                                            Charts, editors, map, PDF, code
                                            editor.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Do not - over split tiny components
                                        </div>
                                        <div className="a">
                                            Too many requests can hurt.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Do not - hide loading states
                                        </div>
                                        <div className="a">
                                            Always show a clear fallback UI.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Bad pattern example
                                    </div>
                                    <pre className="code">{`// Bad idea: splitting tiny UI pieces
// Causes too many chunks and requests

const Button = lazy(() => import("./Button"));
const Card = lazy(() => import("./Card"));
const Badge = lazy(() => import("./Badge"));`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Split your "Reports" page and
                                            "Settings" page using React lazy.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Goal</span>
                                        <span className="value">
                                            Home loads fast, Reports loads only
                                            when opened.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">At a glance checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiScissors /> Route splitting first
                                    </div>
                                    <div className="check">
                                        <FiPackage /> Heavy feature splitting
                                    </div>
                                    <div className="check">
                                        <FiClock /> Fallback UI always
                                    </div>
                                    <div className="check">
                                        <FiZap /> Measure load, not guess
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

export default CodeSplitting;
