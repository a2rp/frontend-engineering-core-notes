import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayout,
    FiColumns,
    FiBox,
    FiMaximize,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Grid = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "CSS Grid",
            sub: "CSS Grid is a 2-dimensional layout system. It controls rows and columns together. It is ideal for page layouts, dashboards, and structured UI.",
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
        <Styled.Wrapper id="grid">
            <div className="top">
                <h2 className="title">Grid</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiLayout /> 2D layout
                    </span>
                    <span className="pill">
                        <FiColumns /> Rows + Columns
                    </span>
                    <span className="pill">
                        <FiBox /> Explicit control
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button className="accBtn" onClick={toggle}>
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayout />
                        </span>
                        <div>
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                detailed explanations and examples
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
                                <h3>1) Grid basics</h3>
                                <p>
                                    To activate Grid, you use{" "}
                                    <strong>display: grid</strong>. This creates
                                    a grid formatting context.
                                </p>

                                <pre>{`container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto;
}`}</pre>

                                <div className="note">
                                    <FiCheckCircle /> Grid controls both
                                    horizontal and vertical placement.
                                </div>
                            </section>

                            <section className="sec">
                                <h3>2) grid-template-columns</h3>
                                <p>Defines the number and size of columns.</p>

                                <pre>{`grid-template-columns: 1fr 1fr 1fr;`}</pre>

                                <p>
                                    <strong>fr</strong> means fractional unit.
                                    It divides remaining space proportionally.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>3) Repeat and auto-fit</h3>

                                <pre>{`grid-template-columns: repeat(3, 1fr);`}</pre>

                                <pre>{`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`}</pre>

                                <p>
                                    <strong>auto-fit</strong> automatically
                                    creates columns that fit the container.
                                    <br />
                                    <strong>minmax</strong> defines minimum and
                                    maximum size.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>4) Grid item placement</h3>

                                <pre>{`.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}</pre>

                                <p>
                                    This places the item between column line 1
                                    and 3.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>5) Grid areas</h3>

                                <pre>{`container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`}</pre>

                                <pre>{`header { grid-area: header; }`}</pre>

                                <p>
                                    Named areas make layout readable and clean.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>6) Alignment</h3>

                                <pre>{`justify-items: center;
align-items: center;`}</pre>

                                <p>
                                    <strong>justify</strong> controls horizontal
                                    alignment.
                                    <br />
                                    <strong>align</strong> controls vertical
                                    alignment.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>7) Real dashboard example</h3>

                                <pre>{`.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`}</pre>

                                <p>
                                    Sidebar fixed width. Main content flexible.
                                    Header and footer span full width.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>8) Grid vs Flexbox</h3>

                                <div className="compare">
                                    <div>
                                        <strong>Grid</strong>
                                        <br />
                                        2D layout
                                        <br />
                                        Page structure
                                    </div>
                                    <div>
                                        <strong>Flexbox</strong>
                                        <br />
                                        1D layout
                                        <br />
                                        Component layout
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Key terms</h3>
                                <ul>
                                    <li>Grid container</li>
                                    <li>Grid item</li>
                                    <li>Track</li>
                                    <li>Grid line</li>
                                    <li>Fraction unit (fr)</li>
                                    <li>minmax()</li>
                                    <li>auto-fit / auto-fill</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default Grid;
