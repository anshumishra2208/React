
function Navbar({name,isLoggedIn}) {
    
  return (
    <div>
        <p>{name}</p>
        <p>{isLoggedIn? "online hai" : "offline hai"}</p>
    </div>
  )
}

export default Navbar