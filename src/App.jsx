import React from 'react'
import { Styled } from './App.styled'
import Footer from './components/footer'
import Header from './components/header'

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header><Header /></Styled.Header>
            <Styled.Main>main</Styled.Main>
            <Styled.Footer><Footer /></Styled.Footer>
        </Styled.Wrapper>
    )
}

export default App