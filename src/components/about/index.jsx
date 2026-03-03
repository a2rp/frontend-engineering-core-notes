import React from "react";
import { Styled } from "./styled";
import {
    FiGlobe,
    FiLayout,
    FiLayers,
    FiTrendingUp,
    FiCode,
} from "react-icons/fi";

const About = () => {
    return (
        <Styled.Wrapper id="about">
            <div className="inner">
                <div className="top">
                    <h1 className="title">
                        Frontend engineering - from markup to rendering
                    </h1>
                    <p className="subtitle">
                        This project focuses on how browsers think, how layouts
                        form, how React updates the UI, and how performance is
                        shaped by architecture decisions.
                    </p>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="icon">
                            <FiGlobe />
                        </div>
                        <h3>Browser mental model</h3>
                        <p>
                            Understand how HTML becomes DOM, CSS becomes CSSOM,
                            and how both combine to form the render tree.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiLayout />
                        </div>
                        <h3>Layout systems</h3>
                        <p>
                            Deep clarity on Flexbox, Grid, positioning,
                            responsive design and how layout recalculations
                            impact performance.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiLayers />
                        </div>
                        <h3>React internals</h3>
                        <p>
                            Virtual DOM, reconciliation, hooks lifecycle,
                            context propagation and update batching.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiTrendingUp />
                        </div>
                        <h3>Performance engineering</h3>
                        <p>
                            Critical rendering path, reflow vs repaint, code
                            splitting, memoization and bundle strategy.
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <FiCode />
                        </div>
                        <h3>Architecture thinking</h3>
                        <p>
                            Component structure, scalability patterns, and
                            frontend systems that survive real production
                            traffic.
                        </p>
                    </div>
                </div>

                <div className="bottomNote">
                    This is not just syntax revision. This is understanding how
                    the browser actually paints pixels.
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default About;
