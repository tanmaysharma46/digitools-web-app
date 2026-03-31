
import { useState } from 'react'
import './App.css'
import LastCard from './components/pricingSection/Pricing'
import Banner from './components/navBar/banner/Banner'
import NavBar from './components/navBar/NavBar'
import Rating from './components/rating/Rating'
import Tabs from './components/tabs/Tabs'
import { ToastContainer } from 'react-toastify'
import Pricing from './components/pricingSection/Pricing'
import Footer from './components/footer/Footer'

const pricingFetchData = async() => {
  const res = await fetch('../public/pricingData.json')
    return res.json();

}
const pricingPromise=pricingFetchData();

const fetchData = async () => {

  const res = await fetch('../public/cardData.json')
  return res.json();

}
const productsPromise = fetchData();



function App() {


  const [carts, setCarts] = useState([]);
  console.log(carts);




  return (

    <>
      <ToastContainer></ToastContainer>

      <header>
        <nav>
          <NavBar carts={carts} />
        </nav>
        <Banner></Banner>

        <Rating />


      </header>
      <main>
        <Tabs carts={carts} setCarts={setCarts} productsPromise={productsPromise} />

      </main>


      <footer>
        <Pricing pricingPromise={pricingPromise} />
        <Footer />
      </footer>


    </>
  )
}

export default App;
