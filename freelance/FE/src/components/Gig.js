import React, { useEffect } from 'react'
import { Logout } from './Logout'
import { useState } from 'react'

export const Gig = () => {

  const [info, setinfo] = useState([])

   useEffect(() => {

     async function gig(){

      const blogData= await fetch('http://localhost:8000/blog',{
        method:'GET',
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
            
            // "mode": 'no-cors',
            // "withCredentials": true,    
            // "crossorigin": true,
            // "Access-Control-Allow-Origin": "http://localhost:8000"
        },
        body:null
  
  
      })
  
      let finalData=await blogData.json()
  
      setinfo([...finalData])
      console.log(info);
    }

    gig()
    
}, [info])



  

    
  
   
  return (

    <div >
      <div className='logout'>
      <Logout />
        
        </div>
  

        <h1>All Services</h1>
     

        <div>{info.map((item)=>(

          <div className='card'>

            <h4>{item.title}</h4>
            <h5>{item.description}</h5>
            <a href="#">Edit</a>
            <div>
            <a href="#">Delete</a>
              </div>
          </div>

        ))}</div>
        
    </div>
  )
}


