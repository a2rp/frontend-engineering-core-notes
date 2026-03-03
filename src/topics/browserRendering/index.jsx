// src/topics/browserRendering/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGlobe,
    FiLayers,
    FiFileText,
    FiCode,
    FiZap,
    FiActivity,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const BrowserRendering = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Browser rendering",
            sub: "Browser rendering is the pipeline that turns HTML + CSS into pixels on the screen. Understanding this explains reflow vs repaint, why some UI updates are slow, and how to optimize performance.",
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
        <Styled.Wrapper id="browser-rendering">
            <div className="top">
                <h2 className="title">Browser rendering</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiFileText /> HTML to DOM
                    </span>
                    <span className="pill">
                        <FiLayers /> CSS to CSSOM
                    </span>
                    <span className="pill">
                        <FiActivity /> Layout and paint
                    </span>
                    <span className="pill">
                        <FiZap /> Performance
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="browser-rendering-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGlobe />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                clear pipeline steps and real examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="browser-rendering-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) The full pipeline</h3>
                                <p className="p">
                                    When you load a page, the browser runs a
                                    pipeline. Each step creates a structure that
                                    the next step depends on.
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            HTML parse
                                        </div>
                                        <p className="flowText">
                                            HTML becomes{" "}
                                            <span className="mono">DOM</span>{" "}
                                            (Document Object Model).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            CSS parse
                                        </div>
                                        <p className="flowText">
                                            CSS becomes{" "}
                                            <span className="mono">CSSOM</span>{" "}
                                            (CSS Object Model).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Render tree
                                        </div>
                                        <p className="flowText">
                                            DOM + CSSOM become a{" "}
                                            <span className="mono">
                                                render tree
                                            </span>{" "}
                                            (only visible nodes).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">Layout</div>
                                        <p className="flowText">
                                            Compute sizes and positions. This is{" "}
                                            <span className="mono">reflow</span>{" "}
                                            in common terms.
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">Paint</div>
                                        <p className="flowText">
                                            Convert boxes into pixels (colors,
                                            text, borders, shadows).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Composite
                                        </div>
                                        <p className="flowText">
                                            Combine layers on screen (often
                                            GPU-assisted).
                                        </p>
                                    </div>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Why this matters
                                        </div>
                                        <div className="cSub">
                                            If your UI change triggers layout,
                                            it is usually more expensive than a
                                            paint-only change, and paint is
                                            usually more expensive than a pure
                                            composite change.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) DOM and CSSOM (what they mean)
                                </h3>
                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">DOM</span>
                                            <span className="tag">Tree</span>
                                        </div>
                                        <p className="tBody">
                                            DOM is the in-memory tree of your
                                            HTML. JavaScript reads and updates
                                            it.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">CSSOM</span>
                                            <span className="tag">Rules</span>
                                        </div>
                                        <p className="tBody">
                                            CSSOM is the in-memory structure of
                                            CSS rules after parsing and
                                            resolving them.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        DOM example (concept)
                                    </div>
                                    <pre className="code">{`<main>
  <h1>Title</h1>
  <p>Text</p>
</main>

DOM becomes a tree:
main
- h1
- p`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        CSSOM example (concept)
                                    </div>
                                    <pre className="code">{`h1 { font-size: 32px; }
p  { color: #334155; }

CSSOM stores these rules so the browser can compute styles.`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) Render tree (what gets rendered)
                                </h3>
                                <p className="p">
                                    Render tree is not the same as DOM. It
                                    includes only nodes that actually appear on
                                    screen. For example, elements with{" "}
                                    <span className="mono">display: none</span>{" "}
                                    do not appear in the render tree.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            display: none
                                        </div>
                                        <p className="miniText">
                                            Removed from layout and render tree.
                                            No space is reserved.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            visibility: hidden
                                        </div>
                                        <p className="miniText">
                                            Still takes space in layout, but not
                                            painted (invisible).
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Visibility vs display
                                    </div>
                                    <pre className="code">{`/* Not in render tree */
.hiddenA { display: none; }

/* In render tree + layout, but not visible */
.hiddenB { visibility: hidden; }`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">4) Layout and paint</h3>
                                <p className="p">
                                    Layout computes geometry, paint fills
                                    pixels. This is the core of UI cost.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">Layout</span>
                                        <span className="value">
                                            widths, heights, positions, line
                                            wrapping, box model calculations
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Paint</span>
                                        <span className="value">
                                            colors, text drawing, shadows,
                                            borders, images
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Composite</span>
                                        <span className="value">
                                            combining layers, often cheaper than
                                            layout and paint
                                        </span>
                                    </div>
                                </div>

                                <div className="callout warn">
                                    <span className="cIcon">
                                        <FiAlertTriangle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Common slow pattern
                                        </div>
                                        <div className="cSub">
                                            Repeatedly reading layout values and
                                            then writing styles can cause layout
                                            thrashing.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Layout thrashing (bad pattern)
                                    </div>
                                    <pre className="code">{`// BAD: read then write repeatedly in a loop
for (let i = 0; i < 1000; i++) {
  const w = box.offsetWidth;   // read layout
  box.style.width = (w + 1) + "px"; // write layout
}

// This can force repeated layout work.`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Better pattern (batch reads then writes)
                                    </div>
                                    <pre className="code">{`// BETTER: read first, then write
const w = box.offsetWidth;
for (let i = 0; i < 1000; i++) {
  box.style.width = (w + i) + "px";
}

// Or use requestAnimationFrame for UI updates.`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">5) Reflow vs repaint</h3>
                                <p className="p">
                                    These are everyday words for layout and
                                    paint costs. Different changes trigger
                                    different work.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Reflow (layout)
                                        </div>
                                        <p className="miniText">
                                            Triggered by changes like{" "}
                                            <span className="mono">width</span>,{" "}
                                            <span className="mono">height</span>
                                            ,{" "}
                                            <span className="mono">
                                                font-size
                                            </span>
                                            ,{" "}
                                            <span className="mono">
                                                display
                                            </span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Repaint (paint)
                                        </div>
                                        <p className="miniText">
                                            Triggered by changes like{" "}
                                            <span className="mono">color</span>,{" "}
                                            <span className="mono">
                                                background
                                            </span>
                                            ,{" "}
                                            <span className="mono">
                                                box-shadow
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Cheap animations (usually)
                                    </div>
                                    <pre className="code">{`/* Often composite-friendly */
.card {
  transform: translateY(0);
  opacity: 1;
}

.card:hover {
  transform: translateY(-4px);
  opacity: 0.98;
}

/* transform and opacity typically avoid layout work */`}</pre>
                                </div>

                                <div className="finalNote">
                                    A common performance rule: prefer animating{" "}
                                    <span className="mono">transform</span> and{" "}
                                    <span className="mono">opacity</span> rather
                                    than width or height.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    6) Critical Rendering Path (CRP)
                                </h3>
                                <p className="p">
                                    <strong>CRP</strong> means{" "}
                                    <strong>Critical Rendering Path</strong>. It
                                    is the sequence of steps the browser must
                                    finish before it can show the first pixels.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">Goal</span>
                                        <span className="value">
                                            show content quickly, reduce
                                            blocking resources
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">CSS</span>
                                        <span className="value">
                                            usually render-blocking (browser
                                            needs styles before paint)
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">JS</span>
                                        <span className="value">
                                            can block parsing when it runs, use{" "}
                                            <span className="mono">defer</span>{" "}
                                            and{" "}
                                            <span className="mono">async</span>{" "}
                                            wisely
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Defer vs async example
                                    </div>
                                    <pre className="code">{`<!-- defer: downloads in parallel, runs after HTML parse -->
<script src="/app.js" defer></script>

<!-- async: downloads in parallel, runs as soon as downloaded -->
<script src="/analytics.js" async></script>`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCode />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Quick practical rule
                                        </div>
                                        <div className="cSub">
                                            Use{" "}
                                            <span className="mono">defer</span>{" "}
                                            for app scripts that depend on DOM.
                                            Use{" "}
                                            <span className="mono">async</span>{" "}
                                            for independent scripts like
                                            analytics.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">7) Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CSSOM</span> -
                                        CSS Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CRP</span> -
                                        Critical Rendering Path
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">GPU</span> -
                                        Graphics Processing Unit
                                    </div>
                                </div>

                                <div className="finalNote">
                                    If you can explain DOM, CSSOM, render tree,
                                    layout, paint, and compositing, you can
                                    explain most frontend performance bugs.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Create a card hover animation using{" "}
                                            <span className="mono">
                                                transform
                                            </span>{" "}
                                            and{" "}
                                            <span className="mono">
                                                opacity
                                            </span>
                                            . Avoid changing width and height.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Think</span>
                                        <span className="value">
                                            Which steps will this trigger:
                                            layout, paint, or composite?
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiLayers /> Know DOM and CSSOM
                                    </div>
                                    <div className="check">
                                        <FiActivity /> Avoid layout thrashing
                                    </div>
                                    <div className="check">
                                        <FiZap /> Prefer transform and opacity
                                    </div>
                                    <div className="check">
                                        <FiFileText /> Reduce render blocking
                                        CSS
                                    </div>
                                    <div className="check">
                                        <FiCode /> Use defer for app scripts
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

export default BrowserRendering;
