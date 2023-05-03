import axios from "axios";
import React,{useEffect, useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  // const [gif,setGif]=useState('');
  // const[loading,setLoading]=useState(false);
  

  // async function fetchData()
  // {
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setGif(imageSource)
  //   setLoading(false)   
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[])

   const[tag,setTag]=useState("car");  
  const{gif,loading,fetchData}=useGif(tag);
  function clickHandler()
  {
      fetchData(tag);
  }

  function changeHandler(event)
  {
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">Random {tag} Gif</h1>
      {
        loading ?<Spinner/>: <img src={gif} width="450" alt="random gif"/>
      }    
      <input className="w-10/12 text-lg py-2 rounded-xl mb-[3px] text-center" type="text" name="tag" onChange={changeHandler} value={tag}/> 
      <button onClick={clickHandler} className="w-10/12 bg-green-600 text-lg py-2 rounded-xl mb-[20px] ">Generate</button>
    </div>
  )
}
