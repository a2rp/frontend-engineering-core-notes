// src/topics/animationTopic/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiPlayCircle,
    FiClock,
    FiRefreshCw,
    FiLayers,
    FiZap,
    FiActivity,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const AnimationTopic = () => {
    const [open, setOpen] = useState(false);

    // load on click (mount only when expanded)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Animation",
            sub: "Animation in frontend is about smooth motion without breaking performance. The big rule is: animate properties that do not trigger layout (reflow) when possible, and keep work on the compositor (transform, opacity).",
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
        <Styled.Wrapper id="animation">
            <div className="top">
                <h2 className="title">Animation</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiPlayCircle /> Transitions and keyframes
                    </span>
                    <span className="pill">
                        <FiClock /> Timing and easing
                    </span>
                    <span className="pill">
                        <FiLayers /> Transform and opacity
                    </span>
                    <span className="pill">
                        <FiZap /> Performance friendly motion
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="animation-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiActivity />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanations and real examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="animation-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) What animation means</h3>
                                <p className="p">
                                    Animation means changing visual properties
                                    over time to create motion. On the web, you
                                    typically use:
                                    <br />- CSS transitions for simple state
                                    changes
                                    <br />- CSS keyframes for repeated sequences
                                    <br />- JavaScript animation for dynamic,
                                    interactive control (usually via{" "}
                                    <span className="mono">
                                        requestAnimationFrame
                                    </span>
                                    )
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Transition
                                        </div>
                                        <p className="miniText">
                                            One change from A to B.
                                            <br />
                                            Example: button hover, expand
                                            accordion, fade in.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Keyframes
                                        </div>
                                        <p className="miniText">
                                            Multiple steps (0% to 100%).
                                            <br />
                                            Example: loader spinner, bouncing
                                            dot, pulsing glow.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">2) The performance rule</h3>
                                <p className="p">
                                    For smooth animations, prefer animating:
                                    <br />-{" "}
                                    <span className="mono">transform</span>{" "}
                                    (translate, scale, rotate)
                                    <br />-{" "}
                                    <span className="mono">opacity</span>
                                    <br />
                                    Avoid animating properties that can trigger
                                    layout (reflow), like{" "}
                                    <span className="mono">width</span>,{" "}
                                    <span className="mono">height</span>,{" "}
                                    <span className="mono">top</span>,{" "}
                                    <span className="mono">left</span>,{" "}
                                    <span className="mono">margin</span>.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Best practice
                                        </div>
                                        <div className="cSub">
                                            If you need to move something, use{" "}
                                            <span className="mono">
                                                transform: translate
                                            </span>
                                            , not{" "}
                                            <span className="mono">top</span> or{" "}
                                            <span className="mono">left</span>.
                                        </div>
                                    </div>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            Good to animate
                                        </span>
                                        <span className="value">
                                            transform, opacity
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Risky to animate
                                        </span>
                                        <span className="value">
                                            width, height, top, left, margin,
                                            padding
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) CSS transitions example
                                </h3>
                                <p className="p">
                                    Use transitions for interactive state
                                    changes like hover, focus, open and close,
                                    active states.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Transition example (hover card)
                                    </div>
                                    <pre className="code">{`.card {
  transform: translateY(0);
  opacity: 1;
  transition: transform 180ms ease, opacity 180ms ease;
}

.card:hover {
  transform: translateY(-4px);
  opacity: 0.98;
}`}</pre>
                                </div>

                                <div className="note">
                                    If you transition many properties, keep the
                                    list explicit. Avoid{" "}
                                    <span className="mono">
                                        transition: all
                                    </span>{" "}
                                    in production because it may animate
                                    unexpected properties.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">4) CSS keyframes example</h3>
                                <p className="p">
                                    Keyframes are best for repeated motion like
                                    loaders, attention pulses, or background
                                    shimmer.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Keyframes example (spinner)
                                    </div>
                                    <pre className="code">{`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.9);
  animation: spin 900ms linear infinite;
}`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Duration
                                        </div>
                                        <p className="miniText">
                                            How long one cycle takes.
                                            <br />
                                            Example: 900ms
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Timing</div>
                                        <p className="miniText">
                                            Easing curve.
                                            <br />
                                            Example: linear, ease, ease-in-out
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) requestAnimationFrame (rAF)
                                </h3>
                                <p className="p">
                                    <strong>rAF</strong> means{" "}
                                    <strong>requestAnimationFrame</strong>. It
                                    schedules your animation work just before
                                    the browser paints the next frame. This
                                    helps you sync updates with refresh rate and
                                    avoid jank.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        rAF example (simple number tween)
                                    </div>
                                    <pre className="code">{`let start = null;

function tick(ts) {
  if (start === null) start = ts;

  const elapsed = ts - start;
  const t = Math.min(elapsed / 400, 1); // 0 to 1 in 400ms
  const value = Math.round(0 + (100 - 0) * t);

  // update UI here (textContent, style, etc.)
  // element.textContent = value;

  if (t < 1) requestAnimationFrame(tick);
}

requestAnimationFrame(tick);`}</pre>
                                </div>

                                <div className="note">
                                    Use rAF when animation depends on time,
                                    pointer movement, physics, or per frame
                                    calculations. Otherwise prefer pure CSS.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">6) Easing basics</h3>
                                <p className="p">
                                    <strong>Easing</strong> describes how speed
                                    changes over time. Real movement usually
                                    starts slower, speeds up, then slows down.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">linear</span>
                                        <span className="value">
                                            Constant speed, good for spinners
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">ease</span>
                                        <span className="value">
                                            Default smooth feel for UI
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">ease-in</span>
                                        <span className="value">
                                            Starts slow, ends fast
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">ease-out</span>
                                        <span className="value">
                                            Starts fast, ends slow, common for
                                            menus and modals
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Cubic bezier example
                                    </div>
                                    <pre className="code">{`.panel {
  transition: transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1);
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    7) Reduced motion support
                                </h3>
                                <p className="p">
                                    Some users prefer fewer animations. Use{" "}
                                    <span className="mono">
                                        prefers-reduced-motion
                                    </span>{" "}
                                    to respect that.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Reduced motion CSS
                                    </div>
                                    <pre className="code">{`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
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
                                        <span className="mono">rAF</span> -
                                        requestAnimationFrame
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">FPS</span> -
                                        Frames Per Second
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">GPU</span> -
                                        Graphics Processing Unit
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CPU</span> -
                                        Central Processing Unit
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Fast animations are usually not about adding
                                    more code. They are about choosing the right
                                    properties to animate and keeping work away
                                    from layout.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Create a button that scales slightly
                                            on hover and fades on active. Use
                                            only transform and opacity.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Bonus</span>
                                        <span className="value">
                                            Add reduced motion support so the
                                            effect turns off for those users.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiLayers /> Prefer transform and
                                        opacity
                                    </div>
                                    <div className="check">
                                        <FiRefreshCw /> Avoid layout thrashing
                                    </div>
                                    <div className="check">
                                        <FiClock /> Keep durations short for UI
                                    </div>
                                    <div className="check">
                                        <FiZap /> Use CSS first, JS when needed
                                    </div>
                                    <div className="check">
                                        <FiActivity /> Respect reduced motion
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

export default AnimationTopic;
