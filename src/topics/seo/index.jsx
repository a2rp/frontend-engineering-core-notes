import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiSearch,
    FiFileText,
    FiLink,
    FiGlobe,
    FiCheckCircle,
    FiTrendingUp,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const SEO = () => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "SEO - Search Engine Optimization",
            sub: "SEO is about making your content understandable, discoverable, and properly structured for search engines and users.",
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
        <Styled.Wrapper id="seo">
            <div className="top">
                <h2 className="title">SEO</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow">
                    <span className="pill">
                        <FiSearch /> Discoverability
                    </span>
                    <span className="pill">
                        <FiFileText /> Structure
                    </span>
                    <span className="pill">
                        <FiLink /> Linking
                    </span>
                    <span className="pill">
                        <FiTrendingUp /> Ranking signals
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
                                <h3 className="h3">1) What SEO really means</h3>
                                <p className="p">
                                    SEO stands for{" "}
                                    <strong>Search Engine Optimization</strong>.
                                    It ensures that search engines like Google
                                    understand your content structure, purpose,
                                    and relevance.
                                </p>
                                <p className="p">
                                    SEO is not tricks. It is clarity + structure
                                    + performance.
                                </p>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) Title and Meta Description
                                </h3>
                                <pre className="code">{`<head>
  <title>Frontend Engineering Core Notes</title>

  <meta name="description"
        content="Deep notes on HTML, CSS, browser rendering, React internals and performance." />
</head>`}</pre>

                                <div className="note">
                                    - Title appears in search result headline -
                                    Meta description appears below title - Keep
                                    title under 60 characters - Keep description
                                    under 160 characters
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) Proper Heading Structure
                                </h3>
                                <pre className="code">{`<h1>Frontend Engineering</h1>
<h2>HTML Deep</h2>
<h3>Semantic Elements</h3>`}</pre>

                                <div className="note">
                                    - Only one h1 per page - Do not skip heading
                                    levels randomly - Headings define document
                                    hierarchy
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    4) Semantic HTML improves SEO
                                </h3>
                                <pre className="code">{`<article>
  <h2>SEO Basics</h2>
  <p>Use semantic tags for clarity.</p>
</article>

<nav>
  <a href="/html">HTML</a>
</nav>`}</pre>

                                <div className="note">
                                    Search engines understand article, nav,
                                    header, footer better than div.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">5) Canonical Links</h3>
                                <pre className="code">{`<link rel="canonical"
      href="https://example.com/frontend-engineering" />`}</pre>

                                <div className="note">
                                    Prevents duplicate content issues.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">6) Image SEO</h3>
                                <pre className="code">{`<img src="render-tree.png"
     alt="Browser render tree diagram" />`}</pre>

                                <div className="note">
                                    - Always use meaningful alt text - Do not
                                    stuff keywords
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">7) URL Structure</h3>
                                <div className="note">
                                    Good: /frontend-engineering/html-deep Bad:
                                    /page?id=123
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    8) Performance as SEO signal
                                </h3>
                                <div className="note">
                                    - Fast loading pages rank better - Core Web
                                    Vitals matter - Optimize images and bundle
                                    size
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Full Forms</h3>
                                <div className="note">
                                    SEO - Search Engine Optimization URL -
                                    Uniform Resource Locator HTML - HyperText
                                    Markup Language
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Checklist</h3>
                                <div className="note">
                                    ✔ Title + Meta ✔ Semantic HTML ✔ Clean URLs
                                    ✔ Proper headings ✔ Performance optimization
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default SEO;
