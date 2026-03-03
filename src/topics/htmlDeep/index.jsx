// src/topics/htmlDeep/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGlobe,
    FiBox,
    FiShield,
    FiSearch,
    FiTag,
    FiLink,
    FiCheckCircle,
    FiFileText,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const HtmlDeep = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "HTML deep",
            sub: "HTML is not just tags. It is document structure, meaning (semantics), accessibility, SEO basics, and predictable behavior for browsers, assistive tech, and search engines.",
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
        <Styled.Wrapper id="html-deep">
            <div className="top">
                <h2 className="title">HTML deep</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiTag /> Semantics
                    </span>
                    <span className="pill">
                        <FiShield /> Accessibility
                    </span>
                    <span className="pill">
                        <FiSearch /> SEO
                    </span>
                    <span className="pill">
                        <FiFileText /> Document structure
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="html-deep-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGlobe />
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
                        id="html-deep-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">1) What HTML really is</h3>
                                <p className="p">
                                    <strong>HTML</strong> means{" "}
                                    <strong>HyperText Markup Language</strong>.
                                    It describes the structure and meaning of a
                                    document, so the browser can build a{" "}
                                    <strong>DOM</strong> (Document Object Model)
                                    tree and render it.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Markup</div>
                                        <p className="miniText">
                                            You are marking up content with
                                            meaning like "this is navigation",
                                            "this is an article", "this is a
                                            heading".
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Not styling
                                        </div>
                                        <p className="miniText">
                                            HTML defines structure. CSS styles
                                            it. JavaScript adds behavior.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">2) Semantic elements</h3>
                                <p className="p">
                                    <strong>Semantic HTML</strong> means using
                                    the right element for the job. This helps:
                                    <br />- accessibility tools understand the
                                    page
                                    <br />- SEO understand content sections
                                    <br />- devs maintain code easily
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Simple rule
                                        </div>
                                        <div className="cSub">
                                            If you can describe the purpose in
                                            one word, there is usually a
                                            semantic tag for it.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Good structure example
                                    </div>
                                    <pre className="code">{`<header>
  <nav aria-label="Primary">
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
  </nav>
</header>

<main>
  <article>
    <h1>HTML deep notes</h1>
    <p>Use semantic elements for meaning.</p>
  </article>

  <aside>
    <h2>Quick tips</h2>
    <p>Prefer button for actions and a for navigation.</p>
  </aside>
</main>

<footer>
  <small>Copyright 2026</small>
</footer>`}</pre>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">header</span>
                                        <span className="value">
                                            Page or section header
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">nav</span>
                                        <span className="value">
                                            Main navigation links
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">main</span>
                                        <span className="value">
                                            Primary content of the page
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">article</span>
                                        <span className="value">
                                            Self-contained content unit
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">section</span>
                                        <span className="value">
                                            Themed grouping of content
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">aside</span>
                                        <span className="value">
                                            Related content, sidebar, notes
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">footer</span>
                                        <span className="value">
                                            Page or section footer
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">3) Accessibility (A11y)</h3>
                                <p className="p">
                                    <strong>A11y</strong> is short for{" "}
                                    <strong>Accessibility</strong> (a + 11
                                    letters + y). It means your site works for
                                    keyboard users, screen reader users, and
                                    users with different vision and motor
                                    abilities.
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">button</span>
                                            <span className="tag">Action</span>
                                        </div>
                                        <p className="tBody">
                                            Use{" "}
                                            <span className="mono">button</span>{" "}
                                            for actions like submit, open modal,
                                            toggle theme. It supports keyboard
                                            and accessibility by default.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">a</span>
                                            <span className="tag">
                                                Navigation
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Use <span className="mono">a</span>{" "}
                                            for navigation. If it changes the
                                            URL, it is a link.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Labels and alt text
                                    </div>
                                    <pre className="code">{`<!-- Good label -->
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email" />

<!-- Good image alt -->
<img src="logo.png" alt="A2RP logo" />

<!-- Decorative image -->
<img src="wave.png" alt="" aria-hidden="true" />`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        ARIA (Accessible Rich Internet
                                        Applications)
                                    </div>
                                    <pre className="code">{`<!-- Use ARIA when you cannot express meaning with HTML alone -->
<button aria-expanded="false" aria-controls="menu">
  Open menu
</button>

<nav id="menu" hidden>
  <a href="/html">HTML</a>
  <a href="/css">CSS</a>
</nav>`}</pre>
                                </div>

                                <div className="finalNote">
                                    Best accessibility is mostly free when you
                                    use correct HTML elements. ARIA is a helper,
                                    not a replacement.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">4) SEO fundamentals</h3>
                                <p className="p">
                                    <strong>SEO</strong> means{" "}
                                    <strong>Search Engine Optimization</strong>.
                                    For most apps, the biggest wins come from:
                                    <br />- correct title and meta description
                                    <br />- correct heading structure
                                    <br />- semantic content
                                    <br />- good links and readable URLs
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Head tags example
                                    </div>
                                    <pre className="code">{`<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Frontend Engineering Core Notes</title>
  <meta name="description" content="At-a-glance notes on HTML, CSS, browser rendering, and React internals." />

  <link rel="canonical" href="https://a2rp.github.io/frontend-engineering-core-notes/" />
</head>`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Headings
                                        </div>
                                        <p className="miniText">
                                            Use one{" "}
                                            <span className="mono">h1</span> for
                                            main page topic. Use{" "}
                                            <span className="mono">h2</span>,{" "}
                                            <span className="mono">h3</span> for
                                            sections. Do not skip levels for
                                            styling.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Links</div>
                                        <p className="miniText">
                                            Use descriptive link text. Avoid
                                            "click here". Example:{" "}
                                            <span className="mono">
                                                Read HTML deep notes
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) Forms and validation basics
                                </h3>
                                <p className="p">
                                    Forms are a big part of real products.
                                    Prefer native input types because they give
                                    you better keyboards on mobile and basic
                                    validation for free.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Practical form example
                                    </div>
                                    <pre className="code">{`<form>
  <label for="phone">Phone</label>
  <input id="phone" type="tel" autocomplete="tel" />

  <label for="age">Age</label>
  <input id="age" type="number" min="1" max="120" />

  <button type="submit">Save</button>
</form>`}</pre>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            type="email"
                                        </span>
                                        <span className="value">
                                            Email keyboard + basic checks
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            type="tel"
                                        </span>
                                        <span className="value">
                                            Phone keyboard
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">required</span>
                                        <span className="value">
                                            Blocks empty submission
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">min max</span>
                                        <span className="value">
                                            Numeric range constraints
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">6) Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">HTML</span> -
                                        HyperText Markup Language
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">A11y</span> -
                                        Accessibility
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">ARIA</span> -
                                        Accessible Rich Internet Applications
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">SEO</span> -
                                        Search Engine Optimization
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">URL</span> -
                                        Uniform Resource Locator
                                    </div>
                                </div>

                                <div className="finalNote">
                                    HTML deep is about meaning, structure, and
                                    defaults. When the base is correct, CSS and
                                    React become easier and performance
                                    improves.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Make a card that has a heading,
                                            description, and a "Read more" link.
                                            Use semantic tags and proper heading
                                            level.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Hint</span>
                                        <span className="value">
                                            Consider{" "}
                                            <span className="mono">
                                                article
                                            </span>{" "}
                                            + <span className="mono">h2</span> +{" "}
                                            <span className="mono">p</span> +{" "}
                                            <span className="mono">a</span>.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick checklist</h3>
                                <div className="checkGrid">
                                    <div className="check">
                                        <FiTag /> Use semantic elements
                                    </div>
                                    <div className="check">
                                        <FiShield /> Labels and keyboard support
                                    </div>
                                    <div className="check">
                                        <FiSearch /> Proper title and meta
                                        description
                                    </div>
                                    <div className="check">
                                        <FiLink /> Descriptive link text
                                    </div>
                                    <div className="check">
                                        <FiBox /> Use correct input types
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

export default HtmlDeep;
