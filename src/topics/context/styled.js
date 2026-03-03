import styled from "styled-components";

const TRANSITION_MS = 220;

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;
    `,

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
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            font-size: 12px;
            font-weight: 700;
        }

        .accordion {
            margin-top: 20px;
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
            gap: 10px;
            align-items: center;
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
        }

        .miniList {
            margin-top: 10px;
            display: grid;
            gap: 6px;
        }

        .codeBlock {
            margin-top: 10px;
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            font-size: 13px;
        }

        .finalNote {
            margin-top: 20px;
            padding: 12px;
            border-radius: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            font-weight: 700;
        }
    `,
};
