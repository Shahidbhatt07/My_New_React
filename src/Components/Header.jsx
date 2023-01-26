import Footer from "./Footer"

 function Header() {
     return (
       <>
         <div className="header">
      <h1>This is Header</h1>
           <h3 id="tutor">Hello this is my Tutorial</h3>
           <h3 style={ { backgroundColor: "black", color: "green"}}>Hey i am Shahid</h3> 
           <Footer />
           </div>
      </>
  )
}


export default Header
