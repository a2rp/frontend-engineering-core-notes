// src/topics/layoutSystems/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayout,
    FiGrid,
    FiColumns,
    FiMaximize2,
    FiSmartphone,
    FiCheckCircle,
    FiLayers,
    FiZap,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const LayoutSystems = () => {
    const [open, setOpen] = useState(false);

    // load on click (mount only when opened)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Layout systems",
            sub: "Layout systems are the rules the browser uses to place elements on the page. A strong layout mental model saves time and prevents messy CSS. The main tools are normal flow, Flexbox, Grid, positioning, and responsive constraints.",
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
        <Styled.Wrapper id="layout-systems">
            <div className="top">
                <h2 className="title">Layout systems</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> Normal flow
                    </span>
                    <span className="pill">
                        <FiColumns /> Flexbox
                    </span>
                    <span className="pill">
                        <FiGrid /> Grid
                    </span>
                    <span className="pill">
                        <FiSmartphone /> Responsive
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="layout-systems-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayout />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation, rules, and practical
                                examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="layout-systems-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">
                                    1) What is a layout system
                                </h3>
                                <p className="p">
                                    A <strong>layout system</strong> is how the
                                    browser calculates element size and
                                    position. It starts from the root and works
                                    down the DOM (Document Object Model).
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Goal</div>
                                        <p className="miniText">
                                            Place boxes predictably based on
                                            rules, not guesses.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Outcome</div>
                                        <p className="miniText">
                                            Fewer hacks, less absolute
                                            positioning, cleaner responsive UI.
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
                                            Pick the correct system first, then
                                            use properties inside that system.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) Normal flow and the box model
                                </h3>
                                <p className="p">
                                    <strong>Normal flow</strong> is the default
                                    layout behavior.
                                    <br />- block elements stack vertically
                                    <br />- inline elements flow within a line
                                    <br />
                                    The <strong>box model</strong> is how size
                                    is calculated using content, padding,
                                    border, and margin.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">Content</span>
                                        <span className="value">
                                            The actual text or child elements
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Padding</span>
                                        <span className="value">
                                            Space inside the border
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Border</span>
                                        <span className="value">
                                            The edge line of the box
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Margin</span>
                                        <span className="value">
                                            Space outside the border
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Box model example
                                    </div>
                                    <pre className="code">{`/* With box-sizing: border-box (recommended)
   width includes padding + border */
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 16px;
  border: 1px solid #333;
  margin: 12px;
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) Flexbox system (one direction)
                                </h3>
                                <p className="p">
                                    <strong>Flexbox</strong> is best when your
                                    layout is mainly one direction at a time:
                                    <br />- a row of items (navbar, chips)
                                    <br />- a column of items (sidebar list)
                                    <br />
                                    Flexbox solves alignment, spacing, and
                                    distribution.
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                display: flex
                                            </span>
                                            <span className="tag">
                                                Container
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Makes children become flex items and
                                            enables flex rules.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                justify-content
                                            </span>
                                            <span className="tag">
                                                Main axis
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Controls spacing along the main
                                            axis. Example: center,
                                            space-between.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                align-items
                                            </span>
                                            <span className="tag">
                                                Cross axis
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Aligns items perpendicular to main
                                            axis. Example: center, stretch.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">gap</span>
                                            <span className="tag">Spacing</span>
                                        </div>
                                        <p className="tBody">
                                            Clean spacing between items, better
                                            than margin hacks.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Navbar example (Flexbox)
                                    </div>
                                    <pre className="code">{`header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.left {
  display: flex;
  align-items: center;
  gap: 10px;
}`}</pre>
                                </div>

                                <div className="finalNote">
                                    Flexbox is not a grid replacement. It is a
                                    great "row or column" tool.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    4) Grid system (two dimensions)
                                </h3>
                                <p className="p">
                                    <strong>CSS Grid</strong> is best when
                                    layout is two-dimensional:
                                    <br />- rows and columns together
                                    <br />- dashboards
                                    <br />- card grids
                                    <br />
                                    Grid makes structure predictable, especially
                                    on different screen sizes.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Best use
                                        </div>
                                        <p className="miniText">
                                            Page layouts, galleries, dashboards,
                                            complex grids.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Key feature
                                        </div>
                                        <p className="miniText">
                                            You define tracks (columns and rows)
                                            and place items reliably.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Card grid example
                                    </div>
                                    <pre className="code">{`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Dashboard layout example
                                    </div>
                                    <pre className="code">{`.page {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
}

@media (max-width: 900px) {
  .page {
    grid-template-columns: 1fr;
  }
}`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiGrid />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Mental shortcut
                                        </div>
                                        <div className="cSub">
                                            Flexbox arranges items. Grid designs
                                            the space.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) Positioning and stacking
                                </h3>
                                <p className="p">
                                    Positioning is powerful, but should be used
                                    intentionally. Overuse usually causes bugs.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">static</span>
                                        <span className="value">
                                            Default, follows normal flow
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">relative</span>
                                        <span className="value">
                                            Stays in flow, can be offset
                                            visually
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">absolute</span>
                                        <span className="value">
                                            Removed from flow, positioned inside
                                            nearest positioned ancestor
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">fixed</span>
                                        <span className="value">
                                            Relative to viewport, stays while
                                            scrolling
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">sticky</span>
                                        <span className="value">
                                            Behaves like relative until it
                                            sticks at a threshold
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Sticky header example
                                    </div>
                                    <pre className="code">{`header {
  position: sticky;
  top: 0;
  z-index: 50;
}`}</pre>
                                </div>

                                <div className="finalNote">
                                    Use positioning for overlays, tooltips,
                                    sticky headers, and small offsets. Not for
                                    building the main page layout.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    6) Responsive layout basics
                                </h3>
                                <p className="p">
                                    Responsive design means the layout adapts to
                                    screen size, not just shrinks.
                                    <br />- prefer fluid grids
                                    <br />- use constraints like max-width
                                    <br />- switch layout at breakpoints
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Common pattern
                                    </div>
                                    <pre className="code">{`.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Breakpoint meaning
                                        </div>
                                        <p className="miniText">
                                            A breakpoint is a point where layout
                                            changes, not where font size
                                            changes.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Modern tip
                                        </div>
                                        <p className="miniText">
                                            Use auto-fit + minmax in Grid to
                                            reduce breakpoint count.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">7) Quick decision guide</h3>
                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            I need a row with aligned items and
                                            gaps
                                        </div>
                                        <div className="a">
                                            Use Flexbox: display flex +
                                            align-items + gap
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            I need a page layout with sidebar
                                            and content
                                        </div>
                                        <div className="a">
                                            Use Grid with columns: 280px 1fr
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            I need a responsive card gallery
                                        </div>
                                        <div className="a">
                                            Use Grid with auto-fit + minmax
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            I need an overlay or tooltip
                                        </div>
                                        <div className="a">
                                            Use position absolute or fixed, plus
                                            z-index
                                        </div>
                                    </div>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiZap />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Rule of thumb
                                        </div>
                                        <div className="cSub">
                                            Layout first, spacing second, polish
                                            last. Most bugs are from picking the
                                            wrong system.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">8) Terms and full forms</h3>
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
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">px</span> - Pixel
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">fr</span> -
                                        Fraction unit (Grid)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">z-index</span> -
                                        Stacking order
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Layout systems mastery is the difference
                                    between "CSS works sometimes" and "CSS works
                                    always".
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Build a header with logo left, nav
                                            center, and theme toggle right.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">
                                            Answer idea
                                        </span>
                                        <span className="value">
                                            Use Flexbox for header row, and Grid
                                            for page layout with sidebar +
                                            content.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiLayers /> Understand normal flow
                                    </div>
                                    <div className="check">
                                        <FiColumns /> Use Flexbox for 1D layouts
                                    </div>
                                    <div className="check">
                                        <FiGrid /> Use Grid for 2D layouts
                                    </div>
                                    <div className="check">
                                        <FiMaximize2 /> Use max-width
                                        constraints
                                    </div>
                                    <div className="check">
                                        <FiSmartphone /> Make layout responsive
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

export default LayoutSystems;
