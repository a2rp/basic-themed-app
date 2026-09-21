import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--surface);
        color: var(--muted);
        border-top: 1px solid var(--border);
    `,
    Main: styled.div`
        width: 100%;
        max-width: var(--maxw);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 20px 24px;
        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 20px 16px;
        }
    `,
    Copyright: styled.p`
        margin: 0;
        color: var(--muted);
        font-size: 0.9rem;
        a {
            color: var(--text);
            text-decoration: none;
            transition: text-shadow 160ms ease;
        }
        a:hover {
            text-shadow: 0 0 14px var(--accent);
        }
    `,
    Links: styled.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
    `,
    Link: styled.a`
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 9px;
        color: var(--muted);
        text-decoration: none;
        transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease;
        svg {
            width: 16px;
            height: 16px;
        }
        &:hover {
            border-color: var(--accent);
            box-shadow: 0 0 16px var(--accent-soft);
            text-shadow: 0 0 12px var(--accent);
        }
    `,
};
