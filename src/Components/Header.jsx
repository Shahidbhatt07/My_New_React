// import Footer from "./Footer"
import { NavLink } from "react-router-dom"

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color : isActive ? "green" : "black",
      fontSize : "30px"
      
    };
  };
     return (
       <>
         <div className="header">
           {/* <h1>USeState Hooks</h1> */}
           <NavLink style={navLinkStyles} to={'/'} > Home</NavLink>
           <NavLink style={navLinkStyles} to={'/About'}>About</NavLink>
           <NavLink style={navLinkStyles} to={'/Contact'}>Contact</NavLink>
           </div>
      </>
  )
}


export default Header
