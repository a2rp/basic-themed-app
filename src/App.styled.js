import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        color: var(--text);
    `,
    Main: styled.main`
        flex: 1;
        width: min(100%, var(--maxw));
        margin: 0 auto;
        padding: 112px 24px 64px;
        @media (max-width: 560px) {
            padding: 96px 16px 48px;
        }
    `,
    Hero: styled.section`
        max-width: 820px;
        padding: 52px 0 64px;
    `,
    Eyebrow: styled.p`
        margin: 0 0 14px;
        color: var(--accent);
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,
    Title: styled.h1`
        margin: 0;
        color: var(--text);
        font-size: clamp(2.7rem, 8vw, 5.9rem);
        line-height: 0.98;
        letter-spacing: -0.07em;
    `,
    Intro: styled.p`
        max-width: 680px;
        margin: 26px 0 32px;
        color: var(--muted);
        font-size: 1.08rem;
        line-height: 1.7;
    `,
    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    `,
    PrimaryLink: styled.a`
        border-radius: 10px;
        padding: 12px 17px;
        background: var(--accent);
        color: #06101e;
        font-weight: 800;
        text-decoration: none;
        &:hover {
            color: #06101e;
            filter: brightness(1.1);
        }
    `,
    SecondaryLink: styled.a`
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 11px 17px;
        color: var(--text);
        font-weight: 800;
        text-decoration: none;
        &:hover {
            background: var(--accent-soft);
            color: var(--accent);
        }
    `,
    FeatureGrid: styled.section`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,
    FeatureCard: styled.article`
        min-height: 170px;
        padding: 22px;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: var(--card);
        box-shadow: var(--shadow);
    `,
    FeatureTitle: styled.h2`
        margin: 0 0 10px;
        color: var(--text);
        font-size: 1.05rem;
    `,
    FeatureDescription: styled.p`
        margin: 0;
        color: var(--muted);
        line-height: 1.65;
    `,
};
