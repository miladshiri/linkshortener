import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import MainPage from './pages/MainPage'
import MyLinks from './pages/MyLinks'
import Footer from './components/Footer'
import Redirect from './pages/Redirect'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Routes>
            <Route path='/' exact element={<MainPage />} />
            <Route path='/mylinks/' exact element={<MyLinks />} />
            <Route path='/link/:hash' exact element={<Redirect />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
