import styled from "styled-components";

const TRANSITION_MS = 220;

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 8px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pill {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .accordion {
            margin-top: 16px;
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

        .accIcon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: var(--color-surface-2);
        }

        .accTitle {
            font-weight: 900;
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${TRANSITION_MS}ms ease;
            overflow: hidden;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
            border: 1px solid var(--color-border);
            padding: 16px;
            border-radius: 12px;
            background: var(--color-surface-2);
        }

        .h3 {
            font-size: 16px;
            font-weight: 900;
        }

        .p {
            margin-top: 8px;
            line-height: 1.6;
        }

        .exampleBlock {
            margin-top: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            overflow: hidden;
        }

        .code {
            padding: 12px;
            font-size: 12px;
            font-family: monospace;
            white-space: pre-wrap;
        }

        .note {
            margin-top: 10px;
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .miniList .row {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .check {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 800;
        }

        .mono {
            font-family: monospace;
        }
    `,
};
