import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiGitBranch,
    FiRefreshCcw,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Reconciliation = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Reconciliation",
            sub: "Reconciliation is React's process of comparing previous Virtual DOM with the new one to determine the minimal changes needed to update the real DOM efficiently.",
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
        <Styled.Wrapper id="reconciliation">
            <div className="top">
                <h2 className="title">Reconciliation</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiLayers /> Virtual DOM
                    </span>
                    <span className="pill">
                        <FiGitBranch /> Diffing
                    </span>
                    <span className="pill">
                        <FiRefreshCcw /> Efficient updates
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
                            <FiZap />
                        </span>
                        <div>
                            <div className="accTitle">How React updates UI</div>
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
                                <h3>1) What is Reconciliation</h3>
                                <p>
                                    When state or props change, React creates a
                                    new <strong>Virtual DOM</strong> tree. React
                                    then compares the previous tree with the new
                                    tree. This comparison process is called{" "}
                                    <strong>Reconciliation</strong>.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>2) Virtual DOM</h3>
                                <p>
                                    <strong>DOM</strong> means Document Object
                                    Model. It represents HTML as a tree.
                                </p>
                                <p>
                                    <strong>Virtual DOM</strong> is a
                                    lightweight JavaScript object representation
                                    of the real DOM. React works with this
                                    instead of directly manipulating the real
                                    DOM.
                                </p>

                                <pre className="code">{`// Example
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</pre>
                            </section>

                            <section className="sec">
                                <h3>3) Diffing Algorithm</h3>
                                <p>
                                    React uses a heuristic <strong>O(n)</strong>
                                    diffing algorithm instead of comparing every
                                    node deeply.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">Rule 1</span>
                                        <span>
                                            Different element types produce
                                            different trees.
                                        </span>
                                    </div>

                                    <div className="row">
                                        <span className="label">Rule 2</span>
                                        <span>
                                            Keys help identify list items.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>4) Example - Without Keys</h3>
                                <pre className="code">{`// Without key
{items.map(item => (
  <li>{item}</li>
))}`}</pre>

                                <p>
                                    If list order changes, React may re-render
                                    more than necessary.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>5) Example - With Keys</h3>
                                <pre className="code">{`// With key
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`}</pre>

                                <p>
                                    Keys allow React to track elements properly
                                    and update only what changed.
                                </p>
                            </section>

                            <section className="sec">
                                <h3>6) Re-render vs Repaint vs Reflow</h3>
                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">Re-render</span>
                                        <span>
                                            React recalculates component output.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Repaint</span>
                                        <span>
                                            Browser updates visual pixels.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Reflow</span>
                                        <span>
                                            Browser recalculates layout.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>7) Why Reconciliation is Fast</h3>
                                <p>
                                    React avoids expensive DOM operations.
                                    Instead of rebuilding entire UI, it updates
                                    only changed nodes.
                                </p>

                                <div className="callout">
                                    <FiCheckCircle />
                                    <span>
                                        Efficient UI updates are the core
                                        advantage of React.
                                    </span>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Full Forms</h3>
                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">DOM</span>
                                        <span>Document Object Model</span>
                                    </div>
                                    <div className="row">
                                        <span className="label">VDOM</span>
                                        <span>Virtual DOM</span>
                                    </div>
                                    <div className="row">
                                        <span className="label">O(n)</span>
                                        <span>Linear Time Complexity</span>
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

export default Reconciliation;
