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
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
            font-weight: 700;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface);
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .accIcon {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 0.2s ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            transition: grid-template-rows ${TRANSITION_MS}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
        }

        h3 {
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .miniList {
            display: grid;
            gap: 8px;
            margin-top: 10px;
        }

        .row {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            padding: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        .label {
            font-weight: 700;
        }

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
            overflow-x: auto;
        }

        .callout {
            margin-top: 10px;
            padding: 10px;
            border-radius: 10px;
            background: var(--color-surface-2);
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }
    `,
};
