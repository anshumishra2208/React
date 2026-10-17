import { Print } from "./components/Print"

let user = {
  name : "anshu",
  age : 19
}

function App(){
  let {name,age} = user
  return (
    <>
          <Print name={name} age = {age} />

    </>

  )
}
export default App