import { useState } from 'react'
import './styles/main.scss'

import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header.jsx'
import Beans from './pages/beans/Beans'
import Facts from './pages/facts/Facts'
import Combinations from './pages/combinations/Combinations'
import Recipes from './pages/recipes/Recipes.jsx'
import RecipesDetails from './pages/recipes/RecipesDetails.jsx';
import History from './pages/history/History';
import RecipesInfo from './pages/recipesinfo/RecipesInfo.jsx';
import FactsInfo from './pages/factsinfo/FactsInfo.jsx';
import CombinationsInfo from './pages/combinationsinfo/CombinationsInfo.jsx';
import BeansInfo from './pages/beansinfo/BeansInfo.jsx';
import HistoryInfo from './pages/historyinfo/HistoryInfo.jsx';


//https://jellybellywikiapi.onrender.com/api/Beans/?pageIndex=1&pageSize=20

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <Routes>

        <Route path="/" element={<><FactsInfo /><RecipesInfo /><BeansInfo /><CombinationsInfo /><HistoryInfo /></> } />
        <Route path="/facts" element={<Facts />} />
        <Route path="/beans" element={<Beans />} />
        <Route path="/combinations" element={<Combinations />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipesDetails />} />
        <Route path="/history" element={<History />} />

      </Routes>
      <Footer />
    </div >
  )
}

export default App
