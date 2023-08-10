import './App.css'
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
    </>
  )
}

export default App
