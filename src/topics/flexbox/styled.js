import styled from "styled-components";

const TRANSITION_MS = 220;

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;
    `,

    top: styled.div``,

    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .title {
            font-size: 22px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        .sub {
            color: var(--color-text-secondary);
            margin-bottom: 12px;
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 12px;
        }

        .pill {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface);
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .accIcon {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .accTitle {
            font-weight: 900;
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
            transition: grid-template-rows ${TRANSITION_MS}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            overflow: hidden;
            padding: 16px;
            background: var(--color-surface-2);
        }

        .sec {
            margin-bottom: 18px;
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin-top: 10px;
        }

        .miniCard {
            border: 1px solid var(--color-border);
            padding: 10px;
            border-radius: 10px;
        }

        .miniList .row {
            margin-bottom: 6px;
        }

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 13px;
            margin: 10px 0;
            overflow-x: auto;
        }

        .mono {
            font-family: monospace;
            font-weight: 700;
        }

        .finalNote {
            padding: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
        }
    `,
};
