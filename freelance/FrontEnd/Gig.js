import React, { useEffect } from 'react'
import { Logout } from './Logout'
import { useState } from 'react'

export const Gig = () => {

  const [info, setinfo] = useState([])

   useEffect(() => {

     async function gig(){

      const gigData= await fetch('http://localhost:8000/gig',{
        method:'GET',
        headers:{
            "Accept":"application/json",
            
            // "mode": 'no-cors',
            // "withCredentials": true,    
            // "crossorigin": true,
            // "Access-Control-Allow-Origin": "http://localhost:8000"
        },
        // body:null
  
  
      })
  
      let finalData=await gigData.json()
  
      setinfo(finalData)
      console.log(info);
    }

    gig()
    
 }, [])



  

    
  
   
  return (

    <div >
      <div className='logout'>
      <Logout />
        
        </div>
  

        <h1>All Services</h1>
     

        <div>{info.map((item)=>(

          <div className='card'>

            <h4>{item.name}</h4>
            <h5>{item.email}</h5>
            <a href="#">Edit</a>
            <div>
            <a href="#">Delete</a>
              </div>
          </div>

        ))}</div>
        
    </div>
  )
}


