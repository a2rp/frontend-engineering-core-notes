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
            gap: 10px;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 13px;
            font-weight: 700;
        }

        .accordion {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 14px;
            background: var(--color-surface);
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .accIcon {
            font-size: 18px;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 160ms ease;
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
            min-height: 0;
            padding: 16px;
        }

        .sec {
            margin-bottom: 18px;
        }

        .h3 {
            font-size: 15px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 8px;
            font-size: 13px;
            overflow-x: auto;
        }

        .note {
            margin-top: 8px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }
    `,
};
