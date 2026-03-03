// src/topics/hooksInternals/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCpu,
    FiRepeat,
    FiLayers,
    FiZap,
    FiActivity,
    FiGitCommit,
    FiCheckCircle,
    FiInfo,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const HooksInternals = () => {
    const [open, setOpen] = useState(false);

    // load on click (panel content mounts only when expanded)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Hooks internals",
            sub: "Hooks are not magic. React stores hook state in order, replays hooks on every render, and commits effects after render. Understanding the render phase vs commit phase helps you avoid bugs and performance issues.",
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
        <Styled.Wrapper id="hooks-internals">
            <div className="top">
                <h2 className="title">Hooks internals</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat /> Order matters
                    </span>
                    <span className="pill">
                        <FiCpu /> Render phase
                    </span>
                    <span className="pill">
                        <FiGitCommit /> Commit phase
                    </span>
                    <span className="pill">
                        <FiZap /> Effects timing
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="hooks-internals-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayers />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                deep explanation and practical examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="hooks-internals-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) The core mental model</h3>
                                <p className="p">
                                    React calls your function component to
                                    produce UI. During that call, it runs hooks
                                    in the exact order they appear. React keeps
                                    a per-component list of hook "slots". On the
                                    next render, React walks that list in the
                                    same order and reads or updates values.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Why "hooks must be called in the
                                            same order"
                                        </div>
                                        <div className="cSub">
                                            React does not identify a hook by
                                            name. It identifies by position.
                                            Same order means same slot, so state
                                            stays correct.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Hook slots intuition
                                    </div>
                                    <pre className="code">{`Render 1:
1st hook call -> slot 1
2nd hook call -> slot 2
3rd hook call -> slot 3

Render 2:
React expects the same order:
1st hook call -> slot 1 (same state)
2nd hook call -> slot 2 (same state)
3rd hook call -> slot 3 (same state)`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) Render phase vs commit phase
                                </h3>
                                <p className="p">
                                    React work happens in two main phases:
                                    <br />- <strong>Render phase</strong> -
                                    compute next UI (pure calculation)
                                    <br />- <strong>Commit phase</strong> -
                                    apply changes to the DOM and run effects
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Render phase
                                        </div>
                                        <p className="miniText">
                                            React calls components, reads hooks,
                                            builds a new tree, and decides what
                                            changed. No DOM writes should happen
                                            here.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Commit phase
                                        </div>
                                        <p className="miniText">
                                            React updates the DOM, then runs{" "}
                                            <span className="mono">
                                                useLayoutEffect
                                            </span>{" "}
                                            before paint and{" "}
                                            <span className="mono">
                                                useEffect
                                            </span>{" "}
                                            after paint.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Effects timing summary
                                    </div>
                                    <pre className="code">{`Commit phase order (simplified):
1) DOM mutations (apply UI changes)
2) useLayoutEffect callbacks (before browser paint)
3) Browser paint (pixels on screen)
4) useEffect callbacks (after paint)`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) Why conditionals break hooks
                                </h3>
                                <p className="p">
                                    If you call a hook inside{" "}
                                    <span className="mono">if</span>, loop, or
                                    early return, the order can change between
                                    renders. Then React reads the wrong slot and
                                    your state becomes "shifted".
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Wrong example (do not do this)
                                    </div>
                                    <pre className="code">{`function Bad({ enabled }) {
  if (enabled) {
    const [x, setX] = useState(0); // hook slot appears only sometimes
  }

  const [y, setY] = useState(0); // this becomes slot 1 or 2 depending on enabled
  return null;
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Correct pattern
                                    </div>
                                    <pre className="code">{`function Good({ enabled }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // conditional logic inside effects or render logic, not around hooks
  const value = enabled ? x : y;

  return <div>{value}</div>;
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    4) Closures and stale values
                                </h3>
                                <p className="p">
                                    Hooks rely on JavaScript closures. A closure
                                    "captures" variables from the render where
                                    it was created. If you start a timer or
                                    subscription and do not update it properly,
                                    it might keep using old values.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiInfo />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Simple rule
                                        </div>
                                        <div className="cSub">
                                            Every render creates a new version
                                            of props and state. Effects and
                                            callbacks created in that render see
                                            that render's values.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Common stale closure bug
                                    </div>
                                    <pre className="code">{`function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // count here can be stale if not handled correctly
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []); // count is not in deps

  return <div>{count}</div>;
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Fix 1 - functional update
                                    </div>
                                    <pre className="code">{`useEffect(() => {
  const id = setInterval(() => {
    setCount((c) => c + 1); // always uses latest
  }, 1000);
  return () => clearInterval(id);
}, []);`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Fix 2 - include dependencies (when
                                        correct)
                                    </div>
                                    <pre className="code">{`useEffect(() => {
  // if effect logic must re-run when count changes
}, [count]);`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) Dependency array is a contract
                                </h3>
                                <p className="p">
                                    The dependency array tells React when it is
                                    safe to reuse the same effect or memoized
                                    value. If a value used inside changes, it
                                    should usually be in dependencies, otherwise
                                    you are telling React "it is fine to keep
                                    old values".
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">useEffect</span>
                                        <span className="value">
                                            Run side effects after commit.
                                            Dependencies control when it
                                            re-runs.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">useMemo</span>
                                        <span className="value">
                                            Cache a computed value across
                                            renders. Use for expensive
                                            calculations only.
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            useCallback
                                        </span>
                                        <span className="value">
                                            Cache a function reference across
                                            renders. Useful when passing
                                            callbacks down.
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        useMemo and useCallback example
                                    </div>
                                    <pre className="code">{`const sorted = useMemo(() => {
  return items.slice().sort((a, b) => a.value - b.value);
}, [items]);

const onSelect = useCallback((id) => {
  setSelectedId(id);
}, []);`}</pre>
                                </div>

                                <div className="finalNote">
                                    Memoization is not free. It trades CPU for
                                    memory and complexity. Measure first, then
                                    optimize.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    6) Batching and state updates
                                </h3>
                                <p className="p">
                                    React groups multiple state updates into a
                                    single render. This is called{" "}
                                    <strong>batching</strong>. It reduces
                                    unnecessary renders and improves
                                    performance.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Batching idea</div>
                                    <pre className="code">{`setA(1);
setB(2);
setC(3);

// React tries to render once instead of three times.`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiActivity />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Why functional updates matter
                                        </div>
                                        <div className="cSub">
                                            When multiple updates depend on the
                                            previous state, use{" "}
                                            <span className="mono">
                                                setState(prev =&gt; next)
                                            </span>{" "}
                                            to avoid bugs.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Correct incremental update
                                    </div>
                                    <pre className="code">{`setCount((c) => c + 1);
setCount((c) => c + 1);
// final count increases by 2 reliably`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    7) Strict Mode double invoke in dev
                                </h3>
                                <p className="p">
                                    In development, React Strict Mode can
                                    intentionally run certain lifecycles twice
                                    to help find unsafe side effects. This can
                                    make effects look like they fire twice.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Where</div>
                                        <p className="miniText">
                                            Mostly in development builds.
                                            Production behavior is not the same.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            How to handle
                                        </div>
                                        <p className="miniText">
                                            Write idempotent effects and
                                            cleanups properly. Avoid side
                                            effects in render.
                                        </p>
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
                                        <span className="mono">VDOM</span> -
                                        Virtual DOM
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">API</span> -
                                        Application Programming Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CSR</span> -
                                        Client Side Rendering
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">SSR</span> -
                                        Server Side Rendering
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Hooks internals is basically this - React
                                    replays hooks on every render, stores their
                                    state by order, and runs effects during the
                                    commit phase.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Build a search input that debounces
                                            API calls. Use{" "}
                                            <span className="mono">
                                                useEffect
                                            </span>{" "}
                                            with cleanup.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Hint</span>
                                        <span className="value">
                                            Use{" "}
                                            <span className="mono">
                                                setTimeout
                                            </span>{" "}
                                            inside effect and{" "}
                                            <span className="mono">
                                                clearTimeout
                                            </span>{" "}
                                            in cleanup.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiRepeat /> Hooks order never changes
                                    </div>
                                    <div className="check">
                                        <FiCpu /> No side effects in render
                                    </div>
                                    <div className="check">
                                        <FiGitCommit /> Effects run after commit
                                    </div>
                                    <div className="check">
                                        <FiZap /> Dependencies are a contract
                                    </div>
                                    <div className="check">
                                        <FiCheckCircle /> Cleanups are required
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

export default HooksInternals;
