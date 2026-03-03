// src/topics/reactDeep/styled.js
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
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 13px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 16px;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .accIcon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        .chev {
            transition: transform 150ms ease;
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
            padding: 20px;
        }

        .sec {
            margin-bottom: 24px;
            border: 1px solid var(--color-border);
            padding: 16px;
            border-radius: 14px;
        }

        h3 {
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 800;
        }

        p {
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        ul {
            padding-left: 18px;
            list-style: disc;
        }

        pre {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 8px;
            font-size: 13px;
            overflow-x: auto;
        }
    `,
};
