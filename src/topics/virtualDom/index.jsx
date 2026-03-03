// src/topics/virtualDom/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiCpu,
    FiRefreshCw,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";
import { BiGitCompare } from "react-icons/bi";

const TRANSITION_MS = 220;

const VirtualDom = () => {
    const [open, setOpen] = useState(false);

    // load on click (mount only when expanded)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Virtual DOM",
            sub: "Virtual DOM is a lightweight JavaScript object tree that represents the UI. React compares the previous and next Virtual DOM trees, finds what changed, and updates the real DOM efficiently.",
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
        <Styled.Wrapper id="virtual-dom">
            <div className="top">
                <h2 className="title">Virtual DOM</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> UI as objects
                    </span>
                    <span className="pill">
                        <BiGitCompare /> Diff changes
                    </span>
                    <span className="pill">
                        <FiZap /> Efficient updates
                    </span>
                    <span className="pill">
                        <FiCpu /> Real DOM is expensive
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="virtual-dom-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiRefreshCw />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                clear mental model, examples, and interview
                                points
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="virtual-dom-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <strong>Virtual DOM</strong> is a{" "}
                                    <strong>JavaScript representation</strong>{" "}
                                    of what the UI should look like.
                                    <br />
                                    React renders components into a tree of
                                    objects (often called{" "}
                                    <span className="mono">React elements</span>
                                    ). React then updates the real browser DOM
                                    based on differences between the old and new
                                    trees.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Real DOM
                                        </div>
                                        <p className="miniText">
                                            The browser's actual document tree.
                                            Updates can trigger layout and paint
                                            work, which can be slow.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Virtual DOM
                                        </div>
                                        <p className="miniText">
                                            Lightweight JS objects. Comparing
                                            and building them is usually cheaper
                                            than frequent real DOM operations.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Why it exists</h3>
                                <p className="p">
                                    Directly updating the real DOM on every tiny
                                    change is costly. Virtual DOM helps React:
                                    <br />- batch changes
                                    <br />- compute minimal updates
                                    <br />- update DOM in a predictable way
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">Key idea</div>
                                        <div className="cSub">
                                            React does not re-render the whole
                                            page in the browser. It re-runs your
                                            component functions to build a new
                                            UI description, then patches the DOM
                                            for what changed.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How it works (simple pipeline)
                                </h3>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            1) Render
                                        </div>
                                        <p className="flowText">
                                            Your component runs and returns UI
                                            elements (JS objects).
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">2) Diff</div>
                                        <p className="flowText">
                                            React compares previous and next
                                            trees to find changes.
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            3) Commit
                                        </div>
                                        <p className="flowText">
                                            React updates the real DOM only
                                            where needed.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example mental model
                                    </div>
                                    <pre className="code">{`State changes
  -> component function runs again
  -> new Virtual DOM tree is created
  -> React diffs old vs new
  -> minimal DOM updates are committed`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Practical example</h3>
                                <p className="p">
                                    Suppose only a counter value changes. React
                                    will update only that text node (or minimal
                                    DOM area) instead of rebuilding everything.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        React component example
                                    </div>
                                    <pre className="code">{`function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}`}</pre>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            What changes?
                                        </span>
                                        <span className="value">
                                            Only{" "}
                                            <span className="mono">
                                                {`{count}`}
                                            </span>{" "}
                                            output changes.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            What React updates?
                                        </span>
                                        <span className="value">
                                            Minimal DOM update for the text, not
                                            the whole container.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Diffing and keys (very important)
                                </h3>
                                <p className="p">
                                    React needs to understand identity of items
                                    in lists. That is why <strong>keys</strong>{" "}
                                    matter.
                                    <br />
                                    With stable keys, React can match old and
                                    new items correctly and update only what
                                    changed.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Good keys</div>
                                    <pre className="code">{`items.map((item) => (
  <li key={item.id}>{item.name}</li>
))`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Bad keys (index as key)
                                    </div>
                                    <pre className="code">{`items.map((item, index) => (
  <li key={index}>{item.name}</li>
))`}</pre>
                                </div>

                                <div className="finalNote">
                                    Index as key can break UI state when items
                                    are inserted, removed, or reordered. Prefer
                                    stable IDs.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Common misunderstandings</h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Virtual DOM is faster than DOM?
                                        </div>
                                        <div className="a">
                                            Not always. The win is reducing real
                                            DOM writes and batching work. React
                                            still must render and diff.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            React updates the DOM on every
                                            render?
                                        </div>
                                        <div className="a">
                                            React re-runs components often, but
                                            it commits DOM changes only if
                                            something actually changed.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Virtual DOM means full re-render of
                                            the page?
                                        </div>
                                        <div className="a">
                                            No. It is a new UI description, then
                                            minimal DOM patching happens.
                                        </div>
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
                                        <span className="mono">VDOM</span> -
                                        Virtual DOM
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                </div>

                                <div className="finalNote">
                                    In interviews, say it like this: "React
                                    builds a Virtual DOM tree, diffs it with the
                                    previous tree, and commits minimal updates
                                    to the real DOM. Keys help keep identity
                                    stable in lists."
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default VirtualDom;
