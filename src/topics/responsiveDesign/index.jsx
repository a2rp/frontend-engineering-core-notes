// src/topics/responsiveDesign/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiSmartphone,
    FiMonitor,
    FiTablet,
    FiGrid,
    FiSliders,
    FiMaximize,
    FiCheckCircle,
    FiZap,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const ResponsiveDesign = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Responsive design",
            sub: "Responsive design means your UI adapts to different screen sizes, device capabilities, and content lengths. The core mindset is flexible layouts first, then small adjustments using breakpoints.",
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
        <Styled.Wrapper id="responsive-design">
            <div className="top">
                <h2 className="title">Responsive design</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGrid /> Fluid layout
                    </span>
                    <span className="pill">
                        <FiSliders /> Breakpoints
                    </span>
                    <span className="pill">
                        <FiMaximize /> Flexible media
                    </span>
                    <span className="pill">
                        <FiZap /> Mobile first
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="responsive-design-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiSmartphone />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and practical CSS examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="responsive-design-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) Meaning</h3>
                                <p className="p">
                                    <strong>Responsive design</strong> means the
                                    same UI works on:
                                    <br />- mobile
                                    <br />- tablet
                                    <br />- laptop
                                    <br />- big desktop screens
                                    <br />
                                    <br />
                                    It is not only about screen width. It is
                                    also about content size, font scaling, touch
                                    vs mouse, and performance.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Goal</div>
                                        <p className="miniText">
                                            Make layout flexible by default, and
                                            only add breakpoints when needed.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Common mistake
                                        </div>
                                        <p className="miniText">
                                            Designing fixed pixels everywhere
                                            and adding random media queries
                                            later.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) The responsive toolkit
                                </h3>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            Fluid widths
                                        </span>
                                        <span className="value">
                                            Use <span className="mono">%</span>,{" "}
                                            <span className="mono">
                                                max-width
                                            </span>
                                            ,{" "}
                                            <span className="mono">min()</span>,{" "}
                                            <span className="mono">
                                                clamp()
                                            </span>
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Responsive typography
                                        </span>
                                        <span className="value">
                                            Use{" "}
                                            <span className="mono">
                                                clamp()
                                            </span>{" "}
                                            for font sizes and spacing
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Flexbox and Grid
                                        </span>
                                        <span className="value">
                                            Use modern layout, avoid floats for
                                            layout
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Breakpoints
                                        </span>
                                        <span className="value">
                                            Use media queries for small
                                            adjustments
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Flexible media
                                        </span>
                                        <span className="value">
                                            Images and videos should not
                                            overflow
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">3) Mobile first approach</h3>
                                <p className="p">
                                    <strong>Mobile first</strong> means: start
                                    with styles for small screens, then add
                                    rules for larger screens.
                                    <br />
                                    This keeps CSS simpler and avoids fighting
                                    overrides.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Mental model
                                        </div>
                                        <div className="cSub">
                                            Base CSS is for mobile. Media
                                            queries are upgrades for bigger
                                            screens.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - mobile first media queries
                                    </div>
                                    <pre className="code">{`/* Base - mobile */
.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* Tablet */
@media (min-width: 768px) {
  .cardGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">4) Fluid layout patterns</h3>
                                <p className="p">
                                    In real products, the best responsive UI is
                                    mostly achieved using flexible containers:
                                    <br />-{" "}
                                    <span className="mono">
                                        max-width
                                    </span> +{" "}
                                    <span className="mono">margin: 0 auto</span>
                                    <br />-{" "}
                                    <span className="mono">padding</span> for
                                    safe spacing
                                    <br />- <span className="mono">
                                        min()
                                    </span>{" "}
                                    and <span className="mono">clamp()</span> to
                                    avoid extreme sizes
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - centered container
                                    </div>
                                    <pre className="code">{`.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - responsive typography with
                                        clamp
                                    </div>
                                    <pre className="code">{`/* clamp(min, preferred, max) */
.pageTitle {
  font-size: clamp(22px, 2.2vw, 38px);
  line-height: 1.2;
}

.sectionGap {
  padding: clamp(14px, 2vw, 26px);
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) Responsive images and media
                                </h3>
                                <p className="p">
                                    Images must scale inside containers. The
                                    safest default is:
                                    <br />-{" "}
                                    <span className="mono">
                                        max-width: 100%
                                    </span>
                                    <br />-{" "}
                                    <span className="mono">height: auto</span>
                                    <br />-{" "}
                                    <span className="mono">
                                        object-fit
                                    </span>{" "}
                                    when you need consistent cropping
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - images that never overflow
                                    </div>
                                    <pre className="code">{`img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* For fixed ratio cards */
.thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 14px;
}`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why object-fit helps
                                        </div>
                                        <p className="miniText">
                                            Keeps the same visual crop across
                                            devices without stretching images.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Common bug
                                        </div>
                                        <p className="miniText">
                                            Fixed image height causing ugly
                                            stretching on mobile.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    6) Breakpoints that make sense
                                </h3>
                                <p className="p">
                                    Breakpoints should follow your layout needs,
                                    not specific device models.
                                    <br />
                                    A simple practical set:
                                    <br />- 480px small phones
                                    <br />- 768px tablets
                                    <br />- 1024px laptops
                                    <br />- 1280px desktops
                                </p>

                                <div className="checkGrid">
                                    <div className="check">
                                        <FiSmartphone /> 480px mobile
                                    </div>
                                    <div className="check">
                                        <FiTablet /> 768px tablet
                                    </div>
                                    <div className="check">
                                        <FiMonitor /> 1024px desktop
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Use fewer breakpoints. The more breakpoints
                                    you add, the harder the UI becomes to
                                    maintain.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    7) Practical checklist for responsive UI
                                </h3>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            Touch targets
                                        </span>
                                        <span className="value">
                                            Buttons should be comfortable to
                                            tap. Aim around 44px height.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Avoid horizontal scroll
                                        </span>
                                        <span className="value">
                                            Use overflow checks and flexible
                                            layouts. Fixed widths are the main
                                            cause.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Long text</span>
                                        <span className="value">
                                            Handle overflow with wrapping and
                                            <span className="mono">
                                                {" "}
                                                text-overflow: ellipsis
                                            </span>{" "}
                                            where needed.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Testing</span>
                                        <span className="value">
                                            Test at 320px, 375px, 768px, 1024px,
                                            and 1440px widths.
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Quick fix for long words
                                    </div>
                                    <pre className="code">{`.textSafe {
  overflow-wrap: anywhere;
  word-break: break-word;
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">CSS</span> -
                                        Cascading Style Sheets
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UX</span> - User
                                        Experience
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">vw</span> -
                                        Viewport width
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">px</span> -
                                        Pixels
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DPR</span> -
                                        Device Pixel Ratio
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Responsive design is mostly about flexible
                                    constraints. Breakpoints are just the
                                    finishing touches.
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default ResponsiveDesign;
