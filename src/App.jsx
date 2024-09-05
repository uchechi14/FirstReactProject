import styled from '@emotion/styled'
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
    return(
      <>
        <Container>
          <Header/>
          <Hero />
        </Container>
      </>
    )
};
export default App

const Container = styled.div`
background-color: white;
height: 100vh;
width: 100vw;
`


