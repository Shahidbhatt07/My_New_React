import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    const [state, setState] = useState(2);
    const [data, setData] = useState([]);  
  
    useEffect(()=> {
      async function getData() {
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
        const res = await get.json();
        setData(res)
        console.log(res);
      }
      getData();
  
      document.title = `${state} Employes Online`
      
    }, [state])
    
  return (
    <div>
       <button className='btn' onClick={() => setState(state + 2)}>Click me {state}</button>
      <div className='iconName'>
        <h3>FirstName</h3>
        <h3>LastName</h3>
        <h3>Email</h3>
        <h3>Age</h3>
      </div>
      {
        data.map((element, index) => {
          return (
            <Link to={`/${element.id}`}>
            <div className='data' key = {index}>
              <h3>{element.firstName }</h3>
              <h3>{element.lastName }</h3>
              <h3>{element.email }</h3>
              <h3>{element.age }</h3>
              </div>
              </Link>
            
            )
          })
      }
      <Outlet/>
    </div>
  )
}

export default Home
