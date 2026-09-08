import { Styled } from "./styled";

const Footer = () => (
    <Styled.Wrapper>
        <Styled.Main>
            <Styled.Col>&copy; {new Date().getFullYear()} Basic Themed App</Styled.Col>
            <Styled.Col>
                By{" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </Styled.Col>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Footer;
