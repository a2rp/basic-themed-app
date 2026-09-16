import { Styled } from "./styled";

const Footer = () => (
    <Styled.Wrapper>
        <Styled.Main>
            <Styled.Col>Copyright &copy; {new Date().getFullYear()} Basic Themed App</Styled.Col>
            <Styled.Col>
                By{" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </Styled.Col>
            <Styled.Col>
                <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
                <a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a>{" "}
                <a href="mailto:ash.ranjan09@gmail.com">Email</a>{" "}
                <a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support</a>{" "}
                <a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>{" "}
                <a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a>
            </Styled.Col>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Footer;
