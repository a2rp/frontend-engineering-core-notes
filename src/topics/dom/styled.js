import styled from "styled-components";

const TRANSITION_MS = 220;

export const Styled = {
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
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 13px;
            display: inline-flex;
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
            background: var(--color-surface);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .accIcon {
            width: 36px;
            height: 36px;
            background: var(--color-surface-2);
            border-radius: 10px;
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
            transition: transform 160ms ease;
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

        .exampleBlock {
            margin-top: 10px;
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
        }

        pre {
            margin: 0;
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            margin-top: 8px;
            padding-left: 16px;
            list-style: disc;
        }

        .finalNote {
            margin-top: 12px;
            padding: 10px;
            border-radius: 10px;
            background: var(--color-surface-2);
        }
    `,
};
