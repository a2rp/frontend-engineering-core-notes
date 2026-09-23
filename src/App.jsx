// App.jsx
import React, { useEffect, useState } from "react";
import { Styled } from "./App.styled";
import { FiArrowUp } from "react-icons/fi";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import HtmlDeep from "./topics/htmlDeep";
import SemanticElements from "./topics/semanticElements";
import Accessibility from "./topics/accessibility";
import Seo from "./topics/seo";
import CssDeep from "./topics/cssDeep";
import LayoutSystems from "./topics/layoutSystems";
import Flexbox from "./topics/flexbox";
import Grid from "./topics/grid";
import ResponsiveDesign from "./topics/responsiveDesign";
import AnimationTopic from "./topics/animationTopic";
import Architecture from "./topics/architecture";
import BrowserRendering from "./topics/browserRendering";
import Dom from "./topics/dom";
import ReflowVsRepaint from "./topics/reflowVsRepaint";
import CriticalRenderingPath from "./topics/criticalRenderingPath";
import ReactDeep from "./topics/reactDeep";
import Reconciliation from "./topics/reconciliation";
import VirtualDom from "./topics/virtualDom";
import HooksInternals from "./topics/hooksInternals";
import ContextTopic from "./topics/context";
import PerformanceOptimization from "./topics/performanceOptimization";
import CodeSplitting from "./topics/codeSplitting";

const App = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const main = document.querySelector("main");
        if (!main) return undefined;

        const handleScroll = () => setShowTop(main.scrollTop > 280);
        handleScroll();
        main.addEventListener("scroll", handleScroll, { passive: true });
        return () => main.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToTop = () => {
        document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main id="main-scroll">
                <div className="contentWrapper">
                    <About />

                    <HtmlDeep />
                    <SemanticElements />
                    <Accessibility />
                    <Seo />
                    <CssDeep />
                    <LayoutSystems />
                    <Flexbox />
                    <Grid />
                    <ResponsiveDesign />
                    <AnimationTopic />
                    <Architecture />
                    <BrowserRendering />
                    <Dom />
                    <ReflowVsRepaint />
                    <CriticalRenderingPath />
                    <ReactDeep />
                    <Reconciliation />
                    <VirtualDom />
                    <HooksInternals />
                    <ContextTopic />
                    <PerformanceOptimization />
                    <CodeSplitting />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>

            {showTop && (
                <button
                    type="button"
                    className="floatingTopButton"
                    onClick={handleScrollToTop}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <FiArrowUp aria-hidden="true" />
                </button>
            )}
        </Styled.Wrapper>
    );
};

export default App;
