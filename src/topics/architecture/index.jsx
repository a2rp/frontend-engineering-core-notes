// src/topics/architecture/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiBox,
    FiMap,
    FiGitBranch,
    FiDatabase,
    FiShield,
    FiZap,
    FiCode,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Architecture = () => {
    const [open, setOpen] = useState(false);

    // load on click (mount panel only when opened)
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Architecture",
            sub: "Frontend architecture means how you organize code so it stays readable, scalable, testable, and fast as features grow. It is the difference between a demo and a production system.",
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
        <Styled.Wrapper id="architecture">
            <div className="top">
                <h2 className="title">Architecture</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> Structure
                    </span>
                    <span className="pill">
                        <FiDatabase /> Data flow
                    </span>
                    <span className="pill">
                        <FiShield /> Maintainability
                    </span>
                    <span className="pill">
                        <FiZap /> Performance
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="architecture-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiMap />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                clear rules, examples, and practical patterns
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="architecture-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">
                                    1) What "frontend architecture" means
                                </h3>
                                <p className="p">
                                    Architecture is your project blueprint:
                                    <br />- where code lives
                                    <br />- how UI layers talk to data layers
                                    <br />- what is reusable vs feature-specific
                                    <br />- how you keep changes small and safe
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Goal</div>
                                        <p className="miniText">
                                            Make new features easy to add
                                            without breaking old ones.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Signal of good architecture
                                        </div>
                                        <p className="miniText">
                                            You can find the right file fast,
                                            and changes do not cause random side
                                            effects.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    2) Layers (simple mental model)
                                </h3>

                                <div className="layerGrid">
                                    <div className="layer">
                                        <div className="lTitle">
                                            <span className="lIcon">
                                                <FiBox />
                                            </span>
                                            UI layer
                                        </div>
                                        <div className="lBody">
                                            Components, pages, layout. Pure
                                            rendering. Minimal business logic.
                                        </div>
                                    </div>

                                    <div className="layer">
                                        <div className="lTitle">
                                            <span className="lIcon">
                                                <FiDatabase />
                                            </span>
                                            Data layer
                                        </div>
                                        <div className="lBody">
                                            API calls, caching, mapping server
                                            shape to UI shape. Centralized
                                            service layer.
                                        </div>
                                    </div>

                                    <div className="layer">
                                        <div className="lTitle">
                                            <span className="lIcon">
                                                <FiGitBranch />
                                            </span>
                                            State layer
                                        </div>
                                        <div className="lBody">
                                            Client state, server state, derived
                                            state. Context, reducers, query
                                            cache.
                                        </div>
                                    </div>

                                    <div className="layer">
                                        <div className="lTitle">
                                            <span className="lIcon">
                                                <FiShield />
                                            </span>
                                            Quality layer
                                        </div>
                                        <div className="lBody">
                                            Validation, error boundaries,
                                            logging, testing, type rules (if
                                            used).
                                        </div>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Rule: keep UI dumb, keep data logic
                                    centralized, keep state predictable.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    3) A clean folder structure example
                                </h3>
                                <p className="p">
                                    There are many valid structures. The best
                                    one is the one your team can follow
                                    consistently. Here is a common
                                    production-friendly layout:
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example (React + Vite)
                                    </div>
                                    <pre className="code">{`src/
  components/
    header/
      index.jsx
      styled.js
    footer/
      index.jsx
      styled.js

  pages/
    home/
      index.jsx
      styled.js
    docs/
      index.jsx
      styled.js

  topics/
    htmlDeep/
      index.jsx
      styled.js
    architecture/
      index.jsx
      styled.js

  services/
    api.js
    endpoints.js

  utils/
    format.js
    guards.js

  App.jsx
  main.jsx`}</pre>
                                </div>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            components
                                        </span>
                                        <span className="value">
                                            Reusable UI pieces (header, footer,
                                            buttons)
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">pages</span>
                                        <span className="value">
                                            Route-level screens (composition
                                            happens here)
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">topics</span>
                                        <span className="value">
                                            Single-focus content sections (your
                                            core notes)
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">services</span>
                                        <span className="value">
                                            All API calls in one place (service
                                            layer)
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">utils</span>
                                        <span className="value">
                                            Small helpers, pure functions, no
                                            side effects
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    4) Component boundaries and responsibilities
                                </h3>
                                <p className="p">
                                    Good architecture has clear "who does what":
                                    <br />- presentational components render UI
                                    <br />- container components connect data
                                    and state
                                    <br />- services handle API and mapping
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Presentational
                                            </span>
                                            <span className="tag">UI only</span>
                                        </div>
                                        <p className="tBody">
                                            Receives props, renders UI. No
                                            fetching. Example:{" "}
                                            <span className="mono">Card</span>,{" "}
                                            <span className="mono">Table</span>,{" "}
                                            <span className="mono">Badge</span>.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Container
                                            </span>
                                            <span className="tag">Wiring</span>
                                        </div>
                                        <p className="tBody">
                                            Fetches data, handles loading and
                                            errors, passes data to
                                            presentational components.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Pseudo example
                                    </div>
                                    <pre className="code">{`// Container
function UsersPage() {
  const { data, loading, error } = useUsers();
  return <UsersList data={data} loading={loading} error={error} />;
}

// Presentational
function UsersList({ data, loading, error }) {
  if (loading) return <Spinner />;
  if (error) return <ErrorBox />;
  return data.map(u => <UserCard key={u.id} user={u} />);
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    5) Data flow rules (avoid spaghetti)
                                </h3>
                                <p className="p">
                                    Most frontend bugs happen when data flow
                                    becomes unclear. Follow these rules:
                                    <br />- keep API calls in one service layer
                                    <br />- map server response to UI shape once
                                    <br />- do not spread fetch logic inside
                                    random components
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Service layer
                                        </div>
                                        <div className="cSub">
                                            A single place for all API calls so
                                            later changes are minimal.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Service layer sketch
                                    </div>
                                    <pre className="code">{`// services/api.js
export async function getUser(id) {
  const res = await fetch("/api/users/" + id);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    6) Performance architecture (build it in)
                                </h3>
                                <p className="p">
                                    Performance is not only "optimization". It
                                    is architecture decisions:
                                    <br />- split large routes (code splitting)
                                    <br />- keep components small and stable
                                    <br />- memoize only where needed
                                    <br />- avoid rerender chains
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Code splitting
                                        </div>
                                        <p className="miniText">
                                            Load heavy pages only when user
                                            navigates. Example:{" "}
                                            <span className="mono">
                                                React.lazy
                                            </span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Stable props
                                        </div>
                                        <p className="miniText">
                                            Avoid creating new objects/functions
                                            every render unless needed. It helps
                                            memoized components.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Lazy loading example
                                    </div>
                                    <pre className="code">{`const Docs = React.lazy(() => import("./pages/docs"));

<Route
  path="/docs"
  element={
    <React.Suspense fallback={<Spinner />}>
      <Docs />
    </React.Suspense>
  }
/>`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    7) Error handling and reliability
                                </h3>
                                <p className="p">
                                    Production apps must handle failures:
                                    <br />- network errors
                                    <br />- empty states
                                    <br />- permission issues
                                    <br />- unexpected crashes
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">
                                            Loading state
                                        </span>
                                        <span className="value">
                                            Skeletons or spinners, avoid blank
                                            screens
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Error state
                                        </span>
                                        <span className="value">
                                            Human-readable messages, retry
                                            button
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">
                                            Empty state
                                        </span>
                                        <span className="value">
                                            No data is not an error, guide user
                                            next action
                                        </span>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Reliability is a feature. Architecture
                                    should make failures predictable and
                                    recoverable.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">8) Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">API</span> -
                                        Application Programming Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">SPA</span> -
                                        Single Page Application
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
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Make a "Products" feature. Put UI in
                                            a page, put API calls in services,
                                            and keep reusable cards in
                                            components.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Goal</span>
                                        <span className="value">
                                            A new developer should locate
                                            product code in under 30 seconds.
                                        </span>
                                    </div>
                                </div>

                                <div className="checkGrid">
                                    <div className="check">
                                        <FiLayers /> Separate UI and data
                                    </div>
                                    <div className="check">
                                        <FiDatabase /> Centralize API calls
                                    </div>
                                    <div className="check">
                                        <FiShield /> Predictable states
                                    </div>
                                    <div className="check">
                                        <FiZap /> Ship performance by design
                                    </div>
                                    <div className="check">
                                        <FiCode /> Keep code discoverable
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

export default Architecture;
