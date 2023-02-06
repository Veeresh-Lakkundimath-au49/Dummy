import React from 'react'
import {useState} from "react"

export const Createblog = () => {

    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [content,setContent]=useState("");
    let [privacy,setPrivacy]=useState(false);
    let [createdBy,setcreatedBy]=useState("");


    let handleSubmit=async (e)=>{
        e.preventDefault()
       console.log({title,description,content,privacy,createdBy});



      let result= await fetch('http://localhost:8000/addBlog',{
           method:'POST',
           headers:{
               "Accept":"application/json",
               "Content-Type":"application/json"
               
               // "mode": 'no-cors',
               // "withCredentials": true,    
               // "crossorigin": true,
               // "Access-Control-Allow-Origin": "http://localhost:8000"
           },
           body:JSON.stringify({"title":title,"description":description,"content":content,"privacy":privacy,"createdBy":createdBy})
       });

       // .then((res)=>{
       //     res.json()}).then((response)=>{
       //             console.log(response);
       //     });
       

    //    if(await result.json()){
    //        window.alert("Your account has been created successfully, navigate to LOGIN page to login")
    //    }
    //    else{
    //        window.alert("Oops...SignUP failed")
    //    }
    console.log(await result);

   }



    

  return (
    <div>
        <form >
    <div>
        <label for="title">Title</label>
        <input type="text" id="title" value={title} onChange={e=>{setTitle(e.target.value)}} />
    </div>

    <div>
        <label for="description">Description</label>
        <input type="text" id="description" value={description} onChange={e=>{setDescription(e.target.value)}} />
    </div>

    <div>
        <label for="content">Content</label>
        <input type="text" id="content" value={content} onChange={e=>{setContent(e.target.value)}} />
    </div>

    <div>
    <label for="isPrivate">Privacy</label>
        <input type="radio" id="isPrivate" value={privacy} onChange={e=>{setPrivacy(e.target.checked)}} />
    </div>

    
    <div>
        <label for="createdBy">Created By</label>
        <input type="text" id="createdBy" value={createdBy} onChange={e=>{setcreatedBy(e.target.value)}} />
    </div>

    <div>
    <button type="submit" onClick={handleSubmit}>Submit Blog</button>
    </div>
    </form>
    </div>
  )
}
