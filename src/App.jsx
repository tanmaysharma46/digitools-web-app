
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
import Started from './components/startedSection/Started'

const startedFetchData=async()=>{
  const res=await fetch('/startedData.json');
  return res.json();
}
const startedPromise=startedFetchData();

const pricingFetchData = async() => {
  const res = await fetch('/pricingData.json')
    return res.json();

}
const pricingPromise=pricingFetchData();

const fetchData = async () => {

  const res = await fetch('/cardData.json')
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
        <nav className=' sticky overflow-visible top-0 z-50'>
          <NavBar carts={carts} />
        </nav>
        <Banner></Banner>

        <Rating />


      </header>
      <main>
        <Tabs carts={carts} setCarts={setCarts} productsPromise={productsPromise} />

        <Started startedPromise={startedPromise}/>
        <Pricing pricingPromise={pricingPromise} />


      </main>


      <footer>
        <Footer />
      </footer>


    </>
  )
}

export default App;
