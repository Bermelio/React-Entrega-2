import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import ArticlesPost from './components/articles/articles';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ArticlesPost/>
      </BrowserRouter>
    </>
  )
}

export default App
