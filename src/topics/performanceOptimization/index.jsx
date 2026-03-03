import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiCpu,
    FiClock,
    FiLayers,
    FiTrendingUp,
    FiPackage,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const PerformanceOptimization = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Performance optimization",
            sub: "Performance optimization means reducing load time, blocking work, unnecessary re-renders, layout shifts, and wasted computation. Fast UI is architecture plus discipline.",
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
        <Styled.Wrapper id="performance-optimization">
            <div className="top">
                <h2 className="title">Performance optimization</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiZap /> Speed
                    </span>
                    <span className="pill">
                        <FiCpu /> CPU efficiency
                    </span>
                    <span className="pill">
                        <FiClock /> Load time
                    </span>
                    <span className="pill">
                        <FiLayers /> Rendering
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiTrendingUp />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} detailed
                                explanation and examples
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
                            {/* Section 1 */}
                            <section className="sec">
                                <h3 className="h3">
                                    1) Critical Rendering Path
                                </h3>
                                <p className="p">
                                    The <strong>Critical Rendering Path</strong>{" "}
                                    is the sequence of steps the browser takes
                                    to convert HTML, CSS, and JavaScript into
                                    pixels on the screen.
                                </p>

                                <div className="flow">
                                    HTML → DOM → CSSOM → Render Tree → Layout →
                                    Paint → Composite
                                </div>

                                <div className="exampleBlock">
                                    <pre className="code">{`<!-- Bad: blocking script -->
<script src="large-library.js"></script>

<!-- Better -->
<script src="large-library.js" defer></script>`}</pre>
                                </div>

                                <div className="note">
                                    Use <span className="mono">defer</span> to
                                    prevent blocking HTML parsing.
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section className="sec">
                                <h3 className="h3">2) Reflow vs Repaint</h3>
                                <p className="p">
                                    <strong>Reflow</strong> means layout
                                    recalculation.
                                    <br />
                                    <strong>Repaint</strong> means only visual
                                    change.
                                </p>

                                <div className="exampleBlock">
                                    <pre className="code">{`// Causes reflow
element.style.width = "200px";

// Only repaint
element.style.color = "red";`}</pre>
                                </div>

                                <div className="note">
                                    Layout changes are expensive. Avoid frequent
                                    DOM measurement and mutation.
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section className="sec">
                                <h3 className="h3">3) Code splitting</h3>
                                <p className="p">
                                    Load only what is needed initially.
                                </p>

                                <div className="exampleBlock">
                                    <pre className="code">{`// React lazy loading
const Dashboard = React.lazy(() => import("./Dashboard"));`}</pre>
                                </div>

                                <div className="note">
                                    Smaller initial bundle improves First
                                    Contentful Paint.
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section className="sec">
                                <h3 className="h3">4) Memoization</h3>
                                <p className="p">
                                    Memoization means caching expensive
                                    computations.
                                </p>

                                <div className="exampleBlock">
                                    <pre className="code">{`const value = useMemo(() => {
  return heavyCalculation(data);
}, [data]);`}</pre>
                                </div>

                                <div className="note">
                                    Prevents unnecessary recalculation on every
                                    render.
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section className="sec">
                                <h3 className="h3">5) Image optimization</h3>
                                <p className="p">
                                    Images are often the largest assets.
                                </p>

                                <div className="exampleBlock">
                                    <pre className="code">{`<img 
  src="hero.webp" 
  loading="lazy" 
  width="800" 
  height="400" 
  alt="Hero banner"
/>`}</pre>
                                </div>

                                <div className="note">
                                    Use WebP or AVIF formats and specify
                                    dimensions to prevent layout shift.
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section className="sec">
                                <h3 className="h3">
                                    6) Avoid unnecessary re-renders
                                </h3>

                                <div className="exampleBlock">
                                    <pre className="code">{`export default React.memo(MyComponent);`}</pre>
                                </div>

                                <div className="note">
                                    React.memo prevents re-render if props do
                                    not change.
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section className="sec">
                                <h3 className="h3">7) Performance metrics</h3>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">FCP</span>
                                        <span className="value">
                                            First Contentful Paint
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">LCP</span>
                                        <span className="value">
                                            Largest Contentful Paint
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">CLS</span>
                                        <span className="value">
                                            Cumulative Layout Shift
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">TTI</span>
                                        <span className="value">
                                            Time To Interactive
                                        </span>
                                    </div>
                                </div>

                                <div className="note">
                                    Use Lighthouse and Web Vitals to measure
                                    these.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiCheckCircle /> Use code splitting
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle /> Avoid layout thrashing
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle /> Lazy load images
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle /> Memoize expensive work
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle /> Measure before
                                        optimizing
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

export default PerformanceOptimization;
