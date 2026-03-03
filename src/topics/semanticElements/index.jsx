import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiCheckCircle,
    FiGlobe,
    FiLayout,
    FiTag,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const SemanticElements = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Semantic elements",
            sub: "Semantic HTML elements describe the meaning of content instead of just how it looks. They improve accessibility, SEO, and maintainability.",
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
        <Styled.Wrapper id="semantic-elements">
            <div className="top">
                <h2 className="title">Semantic elements</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiTag /> Meaning
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Accessibility
                    </span>
                    <span className="pill">
                        <FiGlobe /> SEO
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
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
                                explanation with examples
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
                                <h3>What is semantic HTML?</h3>
                                <p>
                                    A semantic element clearly describes its
                                    meaning to both the browser and the
                                    developer. For example,{" "}
                                    <strong>header</strong> means top section,
                                    <strong>nav</strong> means navigation,
                                    <strong>article</strong> means independent
                                    content.
                                </p>

                                <div className="example">
                                    <pre>{`<!-- Non semantic -->
<div class="top"></div>

<!-- Semantic -->
<header></header>`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Core semantic elements</h3>

                                <div className="listGrid">
                                    <div className="item">
                                        <strong>header</strong>
                                        <p>Top section of page or section.</p>
                                    </div>

                                    <div className="item">
                                        <strong>nav</strong>
                                        <p>Navigation links container.</p>
                                    </div>

                                    <div className="item">
                                        <strong>main</strong>
                                        <p>
                                            Main content of the document. Only
                                            one per page.
                                        </p>
                                    </div>

                                    <div className="item">
                                        <strong>section</strong>
                                        <p>Thematic grouping of content.</p>
                                    </div>

                                    <div className="item">
                                        <strong>article</strong>
                                        <p>
                                            Self-contained content like blog
                                            post or news.
                                        </p>
                                    </div>

                                    <div className="item">
                                        <strong>aside</strong>
                                        <p>Related content, sidebar, ads.</p>
                                    </div>

                                    <div className="item">
                                        <strong>footer</strong>
                                        <p>
                                            Bottom section of page or section.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Real world layout example</h3>

                                <div className="example">
                                    <pre>{`<header>
  <nav>
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
  </nav>
</header>

<main>
  <article>
    <h1>Semantic HTML</h1>
    <p>Meaning matters.</p>
  </article>

  <aside>
    Related links
  </aside>
</main>

<footer>
  Copyright 2026
</footer>`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3>Why semantic matters</h3>
                                <ul>
                                    <li>Screen readers understand structure</li>
                                    <li>Search engines rank content better</li>
                                    <li>Code becomes self explanatory</li>
                                    <li>Better long term maintainability</li>
                                </ul>
                            </section>

                            <section className="sec">
                                <h3>Important rule</h3>
                                <p>
                                    If an element has meaning, use the semantic
                                    tag. Use div only when no semantic element
                                    fits.
                                </p>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default SemanticElements;
