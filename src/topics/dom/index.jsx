import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGlobe,
    FiLayers,
    FiCode,
    FiRefreshCw,
    FiCpu,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Dom = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "DOM - Document Object Model",
            sub: "DOM is the browser's in-memory tree representation of your HTML document. JavaScript interacts with the DOM to read, modify, and update the UI.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    useEffect(() => {
        let t;
        if (open) {
            setIsMounted(true);
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            t = setTimeout(() => setIsMounted(false), TRANSITION_MS);
        }
        return () => clearTimeout(t);
    }, [open]);

    return (
        <Styled.Wrapper id="dom">
            <div className="top">
                <h2 className="title">DOM</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiLayers /> Tree structure
                    </span>
                    <span className="pill">
                        <FiCode /> JS interaction
                    </span>
                    <span className="pill">
                        <FiRefreshCw /> Dynamic updates
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
                            <FiGlobe />
                        </span>
                        <div>
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} full
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
                                <h3>1) What DOM means</h3>
                                <p>
                                    <strong>DOM</strong> stands for{" "}
                                    <strong>Document Object Model</strong>. It
                                    is a structured tree of objects that
                                    represents your HTML document in memory.
                                </p>

                                <div className="exampleBlock">
                                    <pre>{`HTML:

<body>
  <h1>Hello</h1>
  <p>World</p>
</body>

DOM Tree:

Document
 └── html
      └── body
           ├── h1
           └── p`}</pre>
                                </div>

                                <p>
                                    Every element becomes a node in this tree.
                                    JavaScript can access and modify these
                                    nodes.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>2) DOM Nodes</h3>
                                <p>Everything in DOM is a node:</p>

                                <ul className="list">
                                    <li>
                                        <strong>Element node</strong> - HTML
                                        tags
                                    </li>
                                    <li>
                                        <strong>Text node</strong> - text inside
                                        tags
                                    </li>
                                    <li>
                                        <strong>Attribute node</strong> - class,
                                        id, etc
                                    </li>
                                </ul>
                            </section>

                            <section className="sec">
                                <h3>3) Accessing DOM with JavaScript</h3>

                                <div className="exampleBlock">
                                    <pre>{`const heading = document.querySelector("h1");
heading.textContent = "Updated Title";`}</pre>
                                </div>

                                <p>
                                    <strong>document</strong> represents the
                                    whole page.
                                    <br />
                                    <strong>querySelector</strong> finds
                                    elements.
                                    <br />
                                    <strong>textContent</strong> updates text.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>4) Creating elements</h3>

                                <div className="exampleBlock">
                                    <pre>{`const div = document.createElement("div");
div.textContent = "New Box";

document.body.appendChild(div);`}</pre>
                                </div>

                                <p>
                                    <strong>createElement</strong> creates new
                                    node.
                                    <br />
                                    <strong>appendChild</strong> inserts into
                                    DOM.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>5) Event handling</h3>

                                <div className="exampleBlock">
                                    <pre>{`const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Clicked");
});`}</pre>
                                </div>

                                <p>
                                    <strong>addEventListener</strong> attaches
                                    behavior to DOM elements.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>6) DOM and Rendering</h3>

                                <p>When DOM changes, browser may:</p>

                                <ul className="list">
                                    <li>Recalculate styles</li>
                                    <li>Recalculate layout (Reflow)</li>
                                    <li>Repaint pixels</li>
                                </ul>

                                <p>
                                    Too many DOM updates can slow performance.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>7) Important terms</h3>

                                <ul className="list">
                                    <li>
                                        <strong>API</strong> - Application
                                        Programming Interface
                                    </li>
                                    <li>
                                        <strong>Tree</strong> - Hierarchical
                                        structure
                                    </li>
                                    <li>
                                        <strong>Reflow</strong> - Layout
                                        recalculation
                                    </li>
                                    <li>
                                        <strong>Repaint</strong> - Visual update
                                    </li>
                                </ul>

                                <div className="finalNote">
                                    DOM is the bridge between HTML and
                                    JavaScript. Mastering DOM helps you
                                    understand React better.
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default Dom;
