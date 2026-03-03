import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayout,
    FiMove,
    FiAlignCenter,
    FiLayers,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Flexbox = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Flexbox",
            sub: "Flexbox is a one dimensional layout system in CSS. It controls alignment and distribution of items along a single axis - either row or column.",
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
        <Styled.Wrapper id="flexbox">
            <div className="top">
                <h2 className="title">Flexbox</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiLayout /> Layout engine
                    </span>
                    <span className="pill">
                        <FiMove /> Axis based
                    </span>
                    <span className="pill">
                        <FiAlignCenter /> Alignment control
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
                            <FiLayers />
                        </span>
                        <div>
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} detailed
                                explanation
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
                            <section className="sec">
                                <h3>Main concept</h3>
                                <p>
                                    Flexbox works on two axes:
                                    <br />- Main axis
                                    <br />- Cross axis
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <strong>Main axis</strong>
                                        <p>
                                            Direction defined by{" "}
                                            <span className="mono">
                                                flex-direction
                                            </span>
                                            . Default is row.
                                        </p>
                                    </div>

                                    <div className="miniCard">
                                        <strong>Cross axis</strong>
                                        <p>Perpendicular to main axis.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Basic example</h3>
                                <pre className="code">{`<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

.container {
  display: flex;
}`}</pre>
                                <p>
                                    Setting{" "}
                                    <span className="mono">display: flex</span>{" "}
                                    turns the container into a flex formatting
                                    context.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>flex-direction</h3>
                                <pre className="code">{`.container {
  display: flex;
  flex-direction: row;      /* default */
  flex-direction: column;
}`}</pre>
                                <p>
                                    Row means horizontal layout. Column means
                                    vertical layout.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>justify-content (main axis alignment)</h3>
                                <pre className="code">{`.container {
  display: flex;
  justify-content: center;
}`}</pre>

                                <div className="miniList">
                                    <div className="row">flex-start</div>
                                    <div className="row">flex-end</div>
                                    <div className="row">center</div>
                                    <div className="row">space-between</div>
                                    <div className="row">space-around</div>
                                    <div className="row">space-evenly</div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>align-items (cross axis alignment)</h3>
                                <pre className="code">{`.container {
  display: flex;
  align-items: center;
}`}</pre>
                                <p>
                                    Controls vertical alignment when direction
                                    is row.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>flex property</h3>
                                <pre className="code">{`.item {
  flex: 1;
}

/* shorthand */
flex: grow shrink basis;`}</pre>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <strong>flex-grow</strong>
                                        <p>How much item expands.</p>
                                    </div>
                                    <div className="miniCard">
                                        <strong>flex-shrink</strong>
                                        <p>How much item shrinks.</p>
                                    </div>
                                    <div className="miniCard">
                                        <strong>flex-basis</strong>
                                        <p>Initial size before growing.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Real world example - Navbar</h3>
                                <pre className="code">{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</pre>
                                <p>
                                    Left logo, right menu items automatically
                                    align.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>Full forms and terms</h3>
                                <div className="miniList">
                                    <div className="row">
                                        DOM - Document Object Model
                                    </div>
                                    <div className="row">
                                        CSS - Cascading Style Sheets
                                    </div>
                                    <div className="row">
                                        UI - User Interface
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <div className="finalNote">
                                    Flexbox is ideal for components, navbars,
                                    cards, and alignment problems. It is not a
                                    full 2D grid system.
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default Flexbox;
