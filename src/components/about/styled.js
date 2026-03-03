import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        display: flex;
        justify-content: center;
        padding: 80px 20px 60px;

        .inner {
            width: 100%;
            max-width: 1440px;
        }

        .top {
            max-width: 900px;
            margin-bottom: 50px;
        }

        .title {
            font-size: 34px;
            font-weight: 900;
            line-height: 1.2;
            margin-bottom: 16px;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 16px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
        }

        .card {
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 24px;
            transition:
                transform 200ms ease,
                border-color 200ms ease,
                box-shadow 200ms ease;
            box-shadow: 0 12px 28px var(--color-shadow);

            display: flex;
            flex-direction: column;
            gap: 12px;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            h3 {
                font-size: 18px;
                font-weight: 800;
                color: var(--color-text-primary);
            }

            p {
                font-size: 14px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );

            color: var(--color-primary);
            font-size: 20px;
        }

        .bottomNote {
            margin-top: 60px;
            font-size: 14px;
            color: var(--color-text-muted);
            text-align: center;
        }

        @media (max-width: 768px) {
            padding: 60px 16px 40px;

            .title {
                font-size: 26px;
            }
        }
    `,
};
