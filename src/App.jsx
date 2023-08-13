import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import Title from './components/Title'

function App() {

  return (
    <>
      <Header/>
      <Title title="Projetos"/>
      <Projetos/>
      <Sobre/>
      <Footer/>
    </>
  )
}

export default App
