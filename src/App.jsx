// App.jsx
import React from "react";
import { Styled } from "./App.styled";
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
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
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
        </Styled.Wrapper>
    );
};

export default App;
