// src/topics/accessibility/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiCommand,
    FiEye,
    FiType,
    FiLink,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Accessibility = () => {
    const [open, setOpen] = useState(false);

    // load on click (mount only when expanded)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Accessibility",
            sub: "Accessibility (A11y) means your UI works for everyone - keyboard users, screen readers, low vision users, and users with different devices and abilities. Most A11y is free when you use correct HTML and labels.",
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
        <Styled.Wrapper id="accessibility">
            <div className="top">
                <h2 className="title">Accessibility</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiCommand /> Keyboard
                    </span>
                    <span className="pill">
                        <FiType /> Labels
                    </span>
                    <span className="pill">
                        <FiEye /> Screen readers
                    </span>
                    <span className="pill">
                        <FiShield /> A11y basics
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="accessibility-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiShield />
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
                        id="accessibility-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) Meaning</h3>
                                <p className="p">
                                    <strong>Accessibility</strong> means people
                                    can use your interface with different input
                                    methods and assistive technologies.
                                    <br />- keyboard only navigation
                                    <br />- screen readers
                                    <br />- low vision or color blindness
                                    <br />- motor limitations (precise mouse use
                                    is hard)
                                    <br />
                                    <br />
                                    <strong>A11y</strong> is short for
                                    Accessibility (a + 11 letters + y).
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What you want
                                        </div>
                                        <p className="miniText">
                                            Every action reachable by keyboard,
                                            every control labeled, every state
                                            clear.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Biggest shortcut
                                        </div>
                                        <p className="miniText">
                                            Use the correct HTML element
                                            (button, a, input, label). Defaults
                                            are already accessible.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) Keyboard navigation fundamentals
                                </h3>
                                <p className="p">
                                    A keyboard user uses:
                                    <br />- <span className="mono">Tab</span> to
                                    move focus forward
                                    <br />-{" "}
                                    <span className="mono">Shift + Tab</span> to
                                    move focus backward
                                    <br />- <span className="mono">
                                        Enter
                                    </span>{" "}
                                    or <span className="mono">Space</span> to
                                    activate buttons
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Golden rule
                                        </div>
                                        <div className="cSub">
                                            If you used a{" "}
                                            <span className="mono">div</span>{" "}
                                            with onClick, you probably broke
                                            keyboard accessibility. Use{" "}
                                            <span className="mono">button</span>{" "}
                                            for actions.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Bad vs good (actions)
                                    </div>
                                    <pre className="code">{`<!-- Bad: not keyboard-friendly by default -->
<div onclick="doThing()">Save</div>

<!-- Good: keyboard + semantics -->
<button type="button">Save</button>`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Focus styling example
                                    </div>
                                    <pre className="code">{`/* Good focus style for keyboard */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) Labels, names, and descriptions
                                </h3>
                                <p className="p">
                                    Screen readers need a reliable{" "}
                                    <strong>accessible name</strong> for
                                    controls. The best sources:
                                    <br />- <span className="mono">
                                        label
                                    </span>{" "}
                                    linked with{" "}
                                    <span className="mono">for</span> and{" "}
                                    <span className="mono">id</span>
                                    <br />-{" "}
                                    <span className="mono">aria-label</span> for
                                    icon-only buttons
                                    <br />- visible text content (button text)
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Correct input labeling
                                    </div>
                                    <pre className="code">{`<label for="email">Email</label>
<input id="email" type="email" autocomplete="email" />`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Icon button labeling
                                    </div>
                                    <pre className="code">{`<!-- Icon only button must have an accessible name -->
<button type="button" aria-label="Close dialog">
  ✕
</button>`}</pre>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">label</span>
                                        <span className="value">
                                            Best for form controls
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            aria-label
                                        </span>
                                        <span className="value">
                                            Best for icon-only controls
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            aria-describedby
                                        </span>
                                        <span className="value">
                                            Connect help text or error text
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">4) Images and alt text</h3>
                                <p className="p">
                                    <strong>alt</strong> is the text alternative
                                    for images.
                                    <br />- informative images need meaningful{" "}
                                    <span className="mono">alt</span>
                                    <br />- decorative images should use{" "}
                                    <span className="mono">alt=""</span> and can
                                    be hidden from screen readers
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Alt text examples
                                    </div>
                                    <pre className="code">{`<!-- Informative -->
<img src="logo.png" alt="A2RP logo" />

<!-- Decorative -->
<img src="dots.png" alt="" aria-hidden="true" />`}</pre>
                                </div>

                                <div className="finalNote">
                                    If the image is important for meaning, write
                                    the meaning. If it is decoration, keep alt
                                    empty.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) ARIA basics (when needed)
                                </h3>
                                <p className="p">
                                    <strong>ARIA</strong> means{" "}
                                    <strong>
                                        Accessible Rich Internet Applications
                                    </strong>
                                    . Use ARIA only when HTML alone cannot
                                    express the correct meaning.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiAlertTriangle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">Warning</div>
                                        <div className="cSub">
                                            Bad ARIA is worse than no ARIA.
                                            Prefer semantic HTML first.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Common ARIA pattern: disclosure
                                    </div>
                                    <pre className="code">{`<button aria-expanded="false" aria-controls="menu">
  Open menu
</button>

<nav id="menu" hidden>
  <a href="/html">HTML</a>
  <a href="/css">CSS</a>
</nav>`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Live region example (status updates)
                                    </div>
                                    <pre className="code">{`<!-- Screen reader will announce changes -->
<div aria-live="polite">
  Saved successfully
</div>`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    6) Color contrast and clarity
                                </h3>
                                <p className="p">
                                    Do not rely on color alone to communicate
                                    status.
                                    <br />- pair color with text or icons
                                    <br />- keep good contrast between text and
                                    background
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Good status messaging
                                    </div>
                                    <pre className="code">{`<!-- Bad: only color -->
<span style="color:red">●</span>

<!-- Good: color + text -->
<span style="color:red">●</span> <span>Error</span>`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Contrast idea
                                        </div>
                                        <p className="miniText">
                                            If text looks faint for you, it will
                                            be painful for many users. Use
                                            strong contrast for body text.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Focus visibility
                                        </div>
                                        <p className="miniText">
                                            Never remove focus outline unless
                                            you replace it with a better visible
                                            focus style.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">7) Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">A11y</span> -
                                        Accessibility
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">ARIA</span> -
                                        Accessible Rich Internet Applications
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
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
                                        <span className="mono">SR</span> -
                                        Screen Reader
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Accessibility is engineering quality. It
                                    reduces bugs, improves usability, and makes
                                    your product work for more people.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Build a modal close button that uses
                                            only an icon. Make it accessible.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Answer</span>
                                        <span className="value">
                                            Use{" "}
                                            <span className="mono">button</span>{" "}
                                            with{" "}
                                            <span className="mono">
                                                aria-label="Close dialog"
                                            </span>
                                            .
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiCommand /> Everything works with Tab
                                    </div>
                                    <div className="check">
                                        <FiType /> Every input has a label
                                    </div>
                                    <div className="check">
                                        <FiShield /> Use semantic HTML first
                                    </div>
                                    <div className="check">
                                        <FiLink /> Links are descriptive
                                    </div>
                                    <div className="check">
                                        <FiEye /> Alt text is meaningful or
                                        empty
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

export default Accessibility;
