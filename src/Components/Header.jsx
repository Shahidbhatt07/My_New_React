// import Footer from "./Footer"
import { Link } from "react-router-dom"

 function Header() {
     return (
       <>
         <div className="header">
           {/* <h1>USeState Hooks</h1> */}
           <Link to={'/'}><h1>Home</h1></Link>
           <Link to={'/About'}><h1>About</h1></Link>
           <Link to={'/Contact'}><h1>Contact</h1></Link>
           </div>
      </>
  )
}


export default Header
