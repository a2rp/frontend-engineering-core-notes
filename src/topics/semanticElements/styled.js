import styled from "styled-components";

const TRANSITION_MS = 220;

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 16px;
    `,

    Top: styled.div``,

    WrapperInner: styled.div``,

    Accordion: styled.div``,

    /* main styling */
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 10px;
            display: flex;
            gap: 8px;
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
            background: var(--color-surface);
        }

        .accBtn {
            width: 100%;
            padding: 14px;
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

        .accIcon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: var(--color-surface-2);
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

        .sec h3 {
            margin-bottom: 8px;
        }

        .example {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-code-border);
            margin-top: 8px;
        }

        .example pre {
            font-size: 12px;
            line-height: 1.6;
            overflow-x: auto;
        }

        .listGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 10px;
        }

        .item {
            padding: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        ul {
            padding-left: 18px;
            list-style: disc;
        }
    `,
};
