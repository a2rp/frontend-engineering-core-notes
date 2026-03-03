// src/topics/reflowVsRepaint/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRefreshCw,
    FiDroplet,
    FiLayers,
    FiAlertTriangle,
    FiCheckCircle,
    FiZap,
    FiEye,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const ReflowVsRepaint = () => {
    const [open, setOpen] = useState(false);

    // load on click (do not pre-render heavy content)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Reflow vs repaint",
            sub: "Both are rendering costs. Reflow is layout recalculation (geometry). Repaint is drawing pixels (visual). Reflow usually triggers repaint, so reduce layout thrashing.",
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
        <Styled.Wrapper id="reflow-vs-repaint">
            <div className="top">
                <h2 className="title">Reflow vs repaint</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRefreshCw /> Reflow - layout
                    </span>
                    <span className="pill">
                        <FiDroplet /> Repaint - pixels
                    </span>
                    <span className="pill">
                        <FiLayers /> Composite - layers
                    </span>
                    <span className="pill">
                        <FiZap /> Performance topic
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="reflow-vs-repaint-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiEye />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation, examples, and what to
                                avoid
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="reflow-vs-repaint-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning in simple words</h3>

                                <div className="compareGrid">
                                    <div className="compareCard">
                                        <div className="cHead">
                                            <span className="cIcon">
                                                <FiRefreshCw />
                                            </span>
                                            <div className="cTitle">
                                                Reflow (layout)
                                            </div>
                                        </div>
                                        <p className="p">
                                            The browser recalculates positions
                                            and sizes of elements.
                                            <br />- width, height, margin,
                                            padding
                                            <br />- line wraps and text flow
                                            <br />- flex and grid layout changes
                                        </p>
                                        <div className="badgeRow">
                                            <span className="badge warn">
                                                Expensive
                                            </span>
                                            <span className="badge">
                                                Affects geometry
                                            </span>
                                        </div>
                                    </div>

                                    <div className="compareCard">
                                        <div className="cHead">
                                            <span className="cIcon">
                                                <FiDroplet />
                                            </span>
                                            <div className="cTitle">
                                                Repaint (paint)
                                            </div>
                                        </div>
                                        <p className="p">
                                            The browser redraws pixels for an
                                            element.
                                            <br />- color, background, shadow
                                            <br />- border and outline
                                            <br />- visibility changes
                                        </p>
                                        <div className="badgeRow">
                                            <span className="badge ok">
                                                Usually cheaper
                                            </span>
                                            <span className="badge">
                                                Affects visuals
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="callout">
                                    <span className="callIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="callText">
                                        <div className="callTitle">
                                            Common relationship
                                        </div>
                                        <div className="callSub">
                                            Reflow often triggers repaint
                                            because when geometry changes,
                                            pixels must be redrawn.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Tiny mental model (pipeline)
                                </h3>
                                <p className="p">
                                    Typical browser rendering stages:
                                    <br />- Style calculation (apply CSS rules)
                                    <br />- Layout (reflow) - compute sizes and
                                    positions
                                    <br />- Paint (repaint) - draw pixels
                                    <br />- Composite - merge layers to final
                                    frame
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">Style</div>
                                        <p className="flowText">
                                            Which rules apply?
                                        </p>
                                    </div>
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Layout (reflow)
                                        </div>
                                        <p className="flowText">
                                            Where is it and how big?
                                        </p>
                                    </div>
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Paint (repaint)
                                        </div>
                                        <p className="flowText">
                                            What pixels should be drawn?
                                        </p>
                                    </div>
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Composite
                                        </div>
                                        <p className="flowText">
                                            Put layers together
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">What changes cause what?</h3>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Usually causes reflow + repaint
                                        </div>
                                        <ul className="list">
                                            <li>width, height</li>
                                            <li>margin, padding</li>
                                            <li>font-size, line-height</li>
                                            <li>
                                                display changes (none, block)
                                            </li>
                                            <li>
                                                DOM insert/remove that affects
                                                layout
                                            </li>
                                            <li>flex and grid changes</li>
                                        </ul>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Usually causes repaint only
                                        </div>
                                        <ul className="list">
                                            <li>color</li>
                                            <li>background-color</li>
                                            <li>box-shadow</li>
                                            <li>border-color</li>
                                            <li>outline</li>
                                            <li>visibility</li>
                                        </ul>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Often only composite (best case)
                                        </div>
                                        <ul className="list">
                                            <li>
                                                transform (translate, scale)
                                            </li>
                                            <li>opacity</li>
                                            <li>filter (depends)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    If you animate position with{" "}
                                    <span className="mono">top</span> and{" "}
                                    <span className="mono">left</span>, you can
                                    trigger layout each frame. Prefer{" "}
                                    <span className="mono">transform</span> for
                                    smoother animations.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Layout thrashing (the real enemy)
                                </h3>
                                <p className="p">
                                    Layout thrashing happens when you
                                    repeatedly:
                                    <br />- write styles (change layout)
                                    <br />- read layout (force browser to
                                    calculate)
                                    <br />- write again
                                    <br />
                                    This forces extra reflows and kills frame
                                    rate.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Bad example (forces reflow repeatedly)
                                    </div>
                                    <pre className="code">{`const box = document.querySelector(".box");

for (let i = 0; i < 1000; i++) {
  box.style.width = (box.offsetWidth + 1) + "px";
  // Reading offsetWidth forces layout (reflow)
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Better example (batch reads then writes)
                                    </div>
                                    <pre className="code">{`const box = document.querySelector(".box");

// Read once
const w = box.offsetWidth;

// Write once
box.style.width = (w + 1000) + "px";`}</pre>
                                </div>

                                <div className="callout warn">
                                    <span className="callIcon">
                                        <FiAlertTriangle />
                                    </span>
                                    <div className="callText">
                                        <div className="callTitle">
                                            Common forced layout reads
                                        </div>
                                        <div className="callSub">
                                            offsetWidth, offsetHeight,
                                            offsetTop, getBoundingClientRect,
                                            scrollTop, scrollHeight
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Practical tips for React apps
                                </h3>

                                <div className="tipGrid">
                                    <div className="tip">
                                        <div className="tipHead">
                                            <FiLayers /> Prefer transform based
                                            animations
                                        </div>
                                        <p className="tipBody">
                                            Use{" "}
                                            <span className="mono">
                                                transform
                                            </span>{" "}
                                            and{" "}
                                            <span className="mono">
                                                opacity
                                            </span>{" "}
                                            for smooth UI transitions.
                                        </p>
                                    </div>

                                    <div className="tip">
                                        <div className="tipHead">
                                            <FiRefreshCw /> Avoid measuring in
                                            render loops
                                        </div>
                                        <p className="tipBody">
                                            If you measure layout, do it once,
                                            then set state once, not in a tight
                                            loop.
                                        </p>
                                    </div>

                                    <div className="tip">
                                        <div className="tipHead">
                                            <FiZap /> Use requestAnimationFrame
                                            for animation loops
                                        </div>
                                        <p className="tipBody">
                                            requestAnimationFrame syncs with the
                                            browser frame schedule.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CSS</span> -
                                        Cascading Style Sheets
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">FPS</span> -
                                        Frames Per Second
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">rAF</span> -
                                        requestAnimationFrame
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">Layout</span> -
                                        Reflow (geometry calculation)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">Paint</span> -
                                        Repaint (pixel drawing)
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Reflow is geometry. Repaint is pixels.
                                    Composite is layer merging. Optimize by
                                    reducing layout changes and using transform
                                    for animations.
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default ReflowVsRepaint;
