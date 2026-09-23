import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: grid;
        gap: 20px;
        padding: 24px 15px 30px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);

        .footerIntro,
        .footerBottom {
            width: min(1120px, 100%);
            margin: 0 auto;
        }

        .footerIntro {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .footerIntro img {
            width: 46px;
            height: 46px;
            padding: 6px;
            object-fit: contain;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        .footerIntro strong {
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .footerIntro p {
            margin-top: 3px;
            font-size: 12px;
        }

        .footerBottom {
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            font-size: 12px;
        }

        .footerBottom p {
            margin: 0;
        }

        .footerBottom p a {
            color: var(--color-text-primary);
            font-weight: 800;
        }

        .footerLinks {
            display: flex;
            align-items: center;
            gap: 7px;
            flex-wrap: wrap;
        }

        .footerLinks a {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-muted);
            transition: border-color 140ms ease, box-shadow 140ms ease,
                color 140ms ease;
        }

        .footerLinks a:hover,
        .footerLinks a:focus-visible {
            border-color: var(--color-primary);
            box-shadow: 0 0 16px color-mix(in srgb, var(--color-primary) 24%, transparent);
            color: var(--color-text-primary);
            outline: none;
        }

        @media (width < 620px) {
            .footerBottom {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
