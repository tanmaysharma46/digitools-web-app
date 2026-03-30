
import './App.css'
import Banner from './components/navBar/banner/Banner'
import NavBar from './components/navBar/NavBar'
import Products from './components/products/Products'
import Rating from './components/rating/Rating'
import Tabs from './components/tabs/Tabs'

const fetchData=async()=>{
  const res=await fetch('../public/cardData.json')
  return res.json();

}
const productsPromise=fetchData();

function App() {



  return (

    <>
    <header>
      <nav>
        <NavBar/>
      </nav>
      <Banner></Banner>

      <Rating/>


    </header>
    <main>
      <Tabs/>

<Products productsPromise={productsPromise}></Products>
    </main>
    
    
    
    </>
  )
}

export default App
