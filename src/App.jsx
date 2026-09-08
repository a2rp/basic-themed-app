import { Styled } from "./App.styled";
import Footer from "./components/footer";
import Header from "./components/header";

const features = [
    {
        title: "Design tokens",
        description: "Shared CSS variables keep colors, spacing, borders, and shadows consistent across the app.",
    },
    {
        title: "Theme persistence",
        description: "Your light or dark preference is saved locally and restored on the next visit.",
    },
    {
        title: "Deployment ready",
        description: "Vite and GitHub Pages scripts are configured for a straightforward static deployment.",
    },
];

const App = () => (
    <Styled.Wrapper>
        <Header />
        <Styled.Main>
            <Styled.Hero>
                <Styled.Eyebrow>React and Vite starter</Styled.Eyebrow>
                <Styled.Title>A reusable shell for themed interfaces.</Styled.Title>
                <Styled.Intro>
                    A small, responsive foundation with design tokens, a persistent theme switcher, and a polished layout ready for your next front-end idea.
                </Styled.Intro>
                <Styled.Actions>
                    <Styled.PrimaryLink href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">
                        View GitHub
                    </Styled.PrimaryLink>
                    <Styled.SecondaryLink href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                        Visit portfolio
                    </Styled.SecondaryLink>
                </Styled.Actions>
            </Styled.Hero>

            <Styled.FeatureGrid aria-label="Project features">
                {features.map((feature) => (
                    <Styled.FeatureCard key={feature.title}>
                        <Styled.FeatureTitle>{feature.title}</Styled.FeatureTitle>
                        <Styled.FeatureDescription>{feature.description}</Styled.FeatureDescription>
                    </Styled.FeatureCard>
                ))}
            </Styled.FeatureGrid>
        </Styled.Main>
        <Footer />
    </Styled.Wrapper>
);

export default App;
