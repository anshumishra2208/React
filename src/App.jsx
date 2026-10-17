import Navbar from "./components/Navbar"
import { Print } from "./components/Print"



let user = {
  name : "anshu",
  isLoggedIn  : true
}


let products = [
  {
    title : "iphone",
    price : 5802
  },

  {
    title : "laptop",
    price : 480325
  }
]

function App(){
  return (
    <>
      {
        products.map(({title,price})=>{
          return <Print title={title} price={price}/>
        })
      }
      
      <Navbar name={user.name} isLoggedIn={user.isLoggedIn}/>
    </>

  )
}
export default App