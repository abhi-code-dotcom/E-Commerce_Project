import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import ErrorPage from './ErrorPage'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { GlobalStyle } from './GlobalStyle'
import Footer from './components/Footer'

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 ,24, 29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243)",
      border: "rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg,rgb(132,144,255) 0%, rgb(98,189,252) 100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile:"820px",
      tab:"998px",
    },
  };

  return (
    <div>
      <ThemeProvider theme={theme}> {/*used for access the style component exist inside the app  */}
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
