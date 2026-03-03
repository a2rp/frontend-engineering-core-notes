import styled from "styled-components";

const TRANSITION_MS = 220;

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 999px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            font-size: 13px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .accBtn {
            width: 100%;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 200ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${TRANSITION_MS}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            overflow: hidden;
            padding: 16px;
        }

        .sec {
            margin-bottom: 24px;
        }

        h3 {
            margin-bottom: 8px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 8px;
            overflow-x: auto;
        }

        .note {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--color-primary);
        }

        .compare {
            display: flex;
            gap: 20px;
            margin-top: 10px;
        }

        ul {
            padding-left: 20px;
            list-style: disc;
        }
    `,
};
