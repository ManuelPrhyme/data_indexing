import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState, useEffect} from 'react'
import {BounceLoader, PropagateLoader} from "react-spinners"
import { dataSlice } from 'ethers'


function App(){


  const [data,setData] = useState()
  const [walletAddress, setWallet] = useState("0x780751D1c63eFeDB54332148552D0a1EbE1d303a")

  useEffect(()=>{

    // const fectc_call = async () => {
    //      const dataStream = await fetch("https://api.chucknorris.io/jokes/random")
    //      const dataJson = await dataStream.json()
    //      setJoke(dataJson.value)
    //      console.log(dataJson)
    // }

    //

     fetch(`https://api.covalenthq.com/v1/bsc-mainnet/address/${walletAddress}/balances_v2/?quote-currency=USD`,{
      method:"GET",
      headers:{
        Authorization: "Bearer cqt_rQMQxDm7BxcJ7yGcGRVgWKmYkBFJ"
      }
     })
    .then((stream)=>stream.json())
    .then((dataInfo)=>{setData(dataInfo.data.items[1].pretty_quote_24h);
      console.log(dataInfo)
    })

     
  },[])

  return (
    <div>
   
    <h1>Chuck Norris Jokes</h1>
    <p>Chain Names</p>
    <h3>{data}</h3>
    {/* <img src={data} alt="The logo" /> */}

    {/* <div>
      {data.map((chain, index) => (
    <h2 key={index}>{chain.name}</h2>
      ))}
    </div> */}


  
    </div> 
  )
}

export default App