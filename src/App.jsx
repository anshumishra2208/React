import Body from "./components/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Print } from "./components/Print"

let fruits = ["mango", "apple", "guava", "banana"]

let school = {
  name: "dps",
  class: 8
}

let arr = [

  {
    title: "purse",
    price: 950436
  },

  {
    title: "cosmetic",
    price: 6845
  },

  {
    title: "phone",
    price: 7383
  }

]

let user = {
  name: "anshu",
  isLoggedIn: true
}


let products = [
  {
    title: "iphone",
    price: 5802
  },

  {
    title: "laptop",
    price: 480325
  }
]

function App() {
  return (
    <>

      <div style={{ backgroundColor: "purple", color: "white" }}>

        <Body arr={products} />

      </div>

      <div style={{ backgroundColor: "yellow", color: "red" }}>

        <Navbar name={user.name} isLoggedIn={user.isLoggedIn} />
      </div>

      <div style={{ backgroundColor: "brown", color: "pink" }}>

        <Footer fruits={fruits} school={school} />
      </div>
      
      <div style={{ backgroundColor: "blue", color: "orange" }}>

        <Body arr={arr} />
      </div>

    </>

  )
}
export default App
