import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState, useEffect} from 'react'
import {BounceLoader, PropagateLoader} from "react-spinners"
import { dataSlice, formatUnits } from 'ethers'
import {formatEther} from 'viem'


function App(){


  const [data,setData] = useState()
  const [walletAddress, setWallet] = useState("0x0f85f1523666118eB752eec4a6f763776F4b5693")
  const [entireData, setEntireData] = useState()

  useEffect(()=>{

    // const fectc_call = async () => {
    //      const dataStream = await fetch("https://api.chucknorris.io/jokes/random")
    //      const dataJson = await dataStream.json()
    //      setJoke(dataJson.value)
    //      console.log(dataJson)
    // }

    //
// setTimeout(()=>{
  
     fetch(`https://api.sim.dune.com/v1/evm/activity/${walletAddress}?limit=40&chain_ids=1135`,{
      method:"GET",
      headers:{
        // Authorization: "Bearer cqt_rQMQxDm7BxcJ7yGcGRVgWKmYkBFJ"
        'X-Sim-Api-Key': "sim_gSCj2pv4LwopMJFCS3kctaHkG9mUYgV9"
      }
     })
    .then((stream)=>stream.json())
    .then((dataInfo)=>{
      // setEntireData(dataInfo.activity);
      setData(dataInfo.activity);
      console.log(dataInfo.activity)
    })
    .catch((err)=>{
      console.log("The error is ",err)
    })
// },6500)

     
  },[])

  return (
    <div>
   
    <h1>API Requests</h1>
    <h3>Address</h3>
    {/* <div>{
      entireData ? (<h3>{entireData.data.items[0].pretty_quote}</h3>) : (<p>Loading ...</p>)
      }
    </div> */}
    
    {/* <img src={data} alt="The logo" /> */}

    <div>
      {
        !data ? (<PropagateLoader />) : (
          <ul>
            {
              data.map((element,index) => (<li key={index}>{element.asset_type} | {element.type} | { element.asset_type == 'native' ? formatEther(element.value.toString()) : formatUnits(element.value, 18)} | {element.block_time}</li>))
            }
          </ul>
        )
      }
    </div>

    {/* <div>
      {data.map((chain, index) => (
    <h2 key={index}>{chain.name}</h2>
      ))}
    </div> */}


  
    </div> 
  )
}

export default App