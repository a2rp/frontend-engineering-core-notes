// src/topics/cssDeep/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGrid,
    FiMove,
    FiSmartphone,
    FiZap,
    FiLayers,
    FiBox,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const CssDeep = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "CSS deep",
            sub: "CSS is not just colors and padding. It is layout systems, sizing rules, stacking, responsive strategy, animation, and architecture that keeps UI stable and fast.",
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
        <Styled.Wrapper id="css-deep">
            <div className="top">
                <h2 className="title">CSS deep</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiMove /> Flexbox
                    </span>
                    <span className="pill">
                        <FiGrid /> Grid
                    </span>
                    <span className="pill">
                        <FiSmartphone /> Responsive
                    </span>
                    <span className="pill">
                        <FiZap /> Animation
                    </span>
                    <span className="pill">
                        <FiLayers /> Architecture
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="css-deep-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiBox />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanations and practical examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="css-deep-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) What CSS is</h3>
                                <p className="p">
                                    <strong>CSS</strong> means{" "}
                                    <strong>Cascading Style Sheets</strong>. CSS
                                    decides how elements look and how they are
                                    placed. "Cascading" means rules can override
                                    each other based on priority.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Cascade</div>
                                        <p className="miniText">
                                            When multiple rules match an
                                            element, the browser decides which
                                            one wins.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Layout engine
                                        </div>
                                        <p className="miniText">
                                            CSS is a layout language. Most bugs
                                            are sizing and layout issues, not
                                            colors.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Cascade quick example
                                    </div>
                                    <pre className="code">{`.btn { padding: 10px 12px; }
.btn { padding: 14px 16px; } /* later rule wins */

#saveBtn { padding: 18px 20px; } /* id selector usually wins */`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">2) The box model</h3>
                                <p className="p">
                                    Every element is a box:{" "}
                                    <strong>content</strong>,{" "}
                                    <strong>padding</strong>,{" "}
                                    <strong>border</strong>,{" "}
                                    <strong>margin</strong>.
                                    <br />
                                    Best practice is using{" "}
                                    <span className="mono">
                                        box-sizing: border-box
                                    </span>{" "}
                                    so width and height include padding and
                                    border.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Box model</div>
                                    <pre className="code">{`* { box-sizing: border-box; }

.card {
  width: 300px;
  padding: 16px;     /* inside space */
  border: 1px solid; /* border line */
  margin: 12px;      /* outside space */
}`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">Rule</div>
                                        <div className="cSub">
                                            If layout feels random, check box
                                            model and check the parent size.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">3) Layout systems</h3>
                                <p className="p">
                                    Modern UI is mostly built using Flexbox and
                                    Grid. Use the right tool:
                                    <br />- <strong>Flexbox</strong> for
                                    one-dimensional layout (row or column)
                                    <br />- <strong>Grid</strong> for
                                    two-dimensional layout (rows and columns)
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                display: flex
                                            </span>
                                            <span className="tag">
                                                1D layout
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Best for toolbars, nav bars, card
                                            rows, aligning items, spacing along
                                            one axis.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                display: grid
                                            </span>
                                            <span className="tag">
                                                2D layout
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Best for dashboards, galleries,
                                            complex page sections, equal columns
                                            without hacks.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Flexbox example
                                    </div>
                                    <pre className="code">{`.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.toolbar .left {
  display: flex;
  align-items: center;
  gap: 10px;
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">Grid example</div>
                                    <pre className="code">{`.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    4) Responsive design basics
                                </h3>
                                <p className="p">
                                    Responsive design means UI adapts to screen
                                    size. The modern approach is:
                                    <br />- fluid widths (%, minmax, clamp)
                                    <br />- flexible grids
                                    <br />- media queries only when needed
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">clamp()</div>
                                        <p className="miniText">
                                            Sets a value that grows with screen
                                            but stays within min and max.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            minmax()
                                        </div>
                                        <p className="miniText">
                                            Grid helper that sets a minimum and
                                            maximum column size.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Responsive text and container
                                    </div>
                                    <pre className="code">{`.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}

.heroTitle {
  font-size: clamp(22px, 2.4vw, 40px);
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) Positioning and stacking
                                </h3>
                                <p className="p">
                                    Positioning changes how an element is
                                    placed. Stacking decides which element is on
                                    top.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">relative</span>
                                        <span className="value">
                                            Moves relative to its normal place
                                            and becomes an anchor for absolute
                                            children.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">absolute</span>
                                        <span className="value">
                                            Removed from normal flow and placed
                                            inside nearest positioned ancestor.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">fixed</span>
                                        <span className="value">
                                            Stays pinned to the viewport (good
                                            for floating buttons).
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">sticky</span>
                                        <span className="value">
                                            Behaves like relative, then sticks
                                            after scroll threshold (headers).
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">z-index</span>
                                        <span className="value">
                                            Works only inside stacking contexts.
                                            Higher z-index is not always enough.
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Sticky header example
                                    </div>
                                    <pre className="code">{`.header {
  position: sticky;
  top: 0;
  z-index: 50;
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">6) Animation basics</h3>
                                <p className="p">
                                    Animation should feel smooth. Prefer
                                    animating{" "}
                                    <span className="mono">transform</span> and{" "}
                                    <span className="mono">opacity</span>{" "}
                                    because they are cheaper than layout-based
                                    properties.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiZap />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Performance rule
                                        </div>
                                        <div className="cSub">
                                            Avoid animating width, height, top,
                                            left. Prefer transform and opacity.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Hover animation example
                                    </div>
                                    <pre className="code">{`.card {
  transition: transform 180ms ease, opacity 180ms ease;
}

.card:hover {
  transform: translateY(-4px);
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Keyframes example
                                    </div>
                                    <pre className="code">{`@keyframes floatUp {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-6px); }
}

.badge {
  animation: floatUp 1.2s ease-in-out infinite alternate;
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">7) CSS architecture</h3>
                                <p className="p">
                                    Architecture means keeping styles scalable
                                    and predictable. In component-driven apps:
                                    <br />- avoid global leaks
                                    <br />- keep tokens in theme.css
                                    <br />- keep utilities consistent
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Naming</div>
                                        <p className="miniText">
                                            Choose consistent names:{" "}
                                            <span className="mono">.card</span>,{" "}
                                            <span className="mono">
                                                .cardTitle
                                            </span>
                                            ,{" "}
                                            <span className="mono">
                                                .cardMeta
                                            </span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Tokens</div>
                                        <p className="miniText">
                                            Use CSS variables for colors,
                                            border, spacing. Then the theme is
                                            one file.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">Token example</div>
                                    <pre className="code">{`:root {
  --space-1: 6px;
  --space-2: 10px;
  --radius: 14px;
}

.card {
  padding: var(--space-2);
  border-radius: var(--radius);
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">8) Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">CSS</span> -
                                        Cascading Style Sheets
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">px</span> -
                                        Pixels (screen unit)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">vw</span> -
                                        Viewport width
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">vh</span> -
                                        Viewport height
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">rem</span> - Root
                                        em (based on root font size)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">fr</span> -
                                        Fraction unit (Grid)
                                    </div>
                                </div>

                                <div className="finalNote">
                                    CSS deep means you can build stable layout,
                                    predictable responsive UI, and smooth motion
                                    without hacks.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Create a 3-column card grid that
                                            becomes 2 columns on tablets and 1
                                            column on mobile. Add hover lift
                                            animation using transform.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Hint</span>
                                        <span className="value">
                                            Use{" "}
                                            <span className="mono">
                                                grid-template-columns
                                            </span>{" "}
                                            + media queries +{" "}
                                            <span className="mono">
                                                transform
                                            </span>
                                            .
                                        </span>
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

export default CssDeep;
