import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--border);
        background: var(--surface);
        backdrop-filter: blur(12px);
    `,
    Main: styled.div`
        width: min(100%, var(--maxw));
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 0 24px;
        @media (max-width: 560px) {
            min-height: 58px;
            padding: 0 16px;
        }
    `,
    Name: styled.span`
        color: var(--text);
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: -0.02em;
    `,
    Theme: styled.button`
        width: 38px;
        height: 38px;
        display: grid;
        place-items: center;
        padding: 0;
        border: 1px solid var(--border);
        border-radius: 10px;
        background: var(--card);
        color: var(--text);
        cursor: pointer;
        transition: border-color 160ms ease, color 160ms ease, transform 160ms ease;
        &:hover {
            border-color: var(--accent);
            color: var(--accent);
        }
        &:active {
            transform: translateY(1px);
        }
    `,
};
