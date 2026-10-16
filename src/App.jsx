
function printName(){
  console.log("anshu");
}
let age = 12;
function App() {

  return (
    <>
      <div>hello</div>
      <button onClick={printName}>click on me</button>
      <p>{age>=18 ? "eligible" : "not eligible"}</p>
    </>
  )
}

export default App
