import React from 'react'
import './Page1.css'
import Timer from './Timer'
import { Link } from "react-router-dom";

const Page = () => {

  function clickAlert() {
    alert ("Reject");
}
function bidalert() {
  alert ("Place successfully");
}


  return (
    <div className='main_d'>
    <div className='main_c'>
    <div  className='Main'style={{border:"3px solid red"}} >

      <div>
        <h2>Bid details : #123456</h2>
      </div>

      <div className='flex_1'>
        <div className='Nava_1'>
          <p>Material</p>
          <h3>IR-64 Rice</h3>

        </div>
        <div className='Nav_2'>
          <p>Quantity</p>
          <h3>260 MT</h3>

        </div>
      </div>




      <div className='flex_2'>
        <div className='Nava_3'>
          <p>Date</p>
          <h3>26-07-2022</h3>

        </div>
        <div className='Nav_4'>
          <p>Description</p>
        <h3>London</h3>

        </div>
      </div>

      {/* Timer------------------------------------------------------------ */}


<Timer/>






<div className='nav_n'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>View specifications</button>
      
      </Link></div>



    
      


      <div>
        <button style={{ backgroundColor: "black" ,color:'white'   , borderRadius: "25px" , width:"25%" , height:"40px" , marginRight:"3%" }}   onClick={clickAlert}>Reject</button>
        
          <button style={{backgroundColor: "red"    , borderRadius: "25px" , width:"40%" , height:"40px" }} onClick={bidalert}     >Place Bid</button>

        
      </div>

        
    </div>
    <div  className='Main'style={{border:"3px solid green"}} >

      <div>
        <h2>Bid details : #123456</h2>
      </div>

      <div className='flex_1'>
        <div className='Nava_1'>
          <p>Material</p>
          <h3>IR-64 Rice</h3>

        </div>
        <div className='Nav_2'>
          <p>Quantity</p>
          <h3>260 MT</h3>

        </div>
      </div>




      <div className='flex_2'>
        <div className='Nava_3'>
          <p>Date</p>
          <h3>26-07-2022</h3>

        </div>
        <div className='Nav_4'>
          <p>Description</p>
        <h3>London</h3>

        </div>
      </div>

      {/* Timer------------------------------------------------------------ */}


<Timer/>






<div className='nav_n'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>View specifications</button>
      
      </Link></div>



    
      


      <div>
        <button style={{ backgroundColor: "black" ,color:'white'   , borderRadius: "25px" , width:"25%" , height:"40px" , marginRight:"3%" }}   onClick={clickAlert}>Reject</button>
        
          <button style={{backgroundColor: "green"    , borderRadius: "25px" , width:"40%" , height:"40px" }} onClick={bidalert}     >Place Bid</button>

        
      </div>

        
    </div>
    <div  className='Main'style={{border:"3px solid yellow"}} >

      <div>
        <h2>Bid details : #123456</h2>
      </div>

      <div className='flex_1'>
        <div className='Nava_1'>
          <p>Material</p>
          <h3>IR-64 Rice</h3>

        </div>
        <div className='Nav_2'>
          <p>Quantity</p>
          <h3>260 MT</h3>

        </div>
      </div>




      <div className='flex_2'>
        <div className='Nava_3'>
          <p>Date</p>
          <h3>26-07-2022</h3>

        </div>
        <div className='Nav_4'>
          <p>Description</p>
        <h3>London</h3>

        </div>
      </div>

      {/* Timer------------------------------------------------------------ */}


<Timer/>






<div className='nav_n'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>View specifications</button>
      
      </Link></div>



    
      


      <div>
        <button style={{ backgroundColor: "black" ,color:'white'   , borderRadius: "25px" , width:"25%" , height:"40px" , marginRight:"3%" }}   onClick={clickAlert}>Reject</button>
        
          <button style={{backgroundColor: "yellow"    , borderRadius: "25px" , width:"40%" , height:"40px" }} onClick={bidalert}     >Place Bid</button>

        
      </div>

        
    </div>
    </div>

    <div className='main_c'>
    <div  className='Main'style={{border:"3px solid red"}} >

      <div>
        <h2>Bid details : #123456</h2>
      </div>

      <div className='flex_1'>
        <div className='Nava_1'>
          <p>Material</p>
          <h3>IR-64 Rice</h3>

        </div>
        <div className='Nav_2'>
          <p>Quantity</p>
          <h3>260 MT</h3>

        </div>
      </div>




      <div className='flex_2'>
        <div className='Nava_3'>
          <p>Date</p>
          <h3>26-07-2022</h3>

        </div>
        <div className='Nav_4'>
          <p>Description</p>
        <h3>London</h3>

        </div>
      </div>

      {/* Timer------------------------------------------------------------ */}


<Timer/>






<div className='nav_n'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>View specifications</button>
      
      </Link></div>



    
      


      <div>
        <button style={{ backgroundColor: "black" ,color:'white'   , borderRadius: "25px" , width:"25%" , height:"40px" , marginRight:"3%" }}   onClick={clickAlert}>Reject</button>
        
          <button style={{backgroundColor: "red"    , borderRadius: "25px" , width:"40%" , height:"40px" }} onClick={bidalert}     >Place Bid</button>

        
      </div>

        
    </div>
    <div  className='Main'style={{border:"3px solid green"}} >

      <div>
        <h2>Bid details : #123456</h2>
      </div>

      <div className='flex_1'>
        <div className='Nava_1'>
          <p>Material</p>
          <h3>IR-64 Rice</h3>

        </div>
        <div className='Nav_2'>
          <p>Quantity</p>
          <h3>260 MT</h3>

        </div>
      </div>




      <div className='flex_2'>
        <div className='Nava_3'>
          <p>Date</p>
          <h3>26-07-2022</h3>

        </div>
        <div className='Nav_4'>
          <p>Description</p>
        <h3>London</h3>

        </div>
      </div>

      {/* Timer------------------------------------------------------------ */}


<Timer/>






<div className='nav_n'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>View specifications</button>
      
      </Link></div>



    
      


      <div>
        <button style={{ backgroundColor: "black" ,color:'white'   , borderRadius: "25px" , width:"25%" , height:"40px" , marginRight:"3%" }}   onClick={clickAlert}>Reject</button>
        
          <button style={{backgroundColor: "green"    , borderRadius: "25px" , width:"40%" , height:"40px" }} onClick={bidalert}     >Place Bid</button>

        
      </div>

        
    </div>
    <div  className='Main'style={{border:"3px solid yellow"}} >

      <div>
        <h2>Bid details : #123456</h2>
      </div>

      <div className='flex_1'>
        <div className='Nava_1'>
          <p>Material</p>
          <h3>IR-64 Rice</h3>

        </div>
        <div className='Nav_2'>
          <p>Quantity</p>
          <h3>260 MT</h3>

        </div>
      </div>




      <div className='flex_2'>
        <div className='Nava_3'>
          <p>Date</p>
          <h3>26-07-2022</h3>

        </div>
        <div className='Nav_4'>
          <p>Description</p>
        <h3>London</h3>

        </div>
      </div>

      {/* Timer------------------------------------------------------------ */}


<Timer/>






<div className='nav_n'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>View specifications</button>
      
      </Link></div>



    
      


      <div>
        <button style={{ backgroundColor: "black" ,color:'white'   , borderRadius: "25px" , width:"25%" , height:"40px" , marginRight:"3%" }}   onClick={clickAlert}>Reject</button>
        
          <button style={{backgroundColor: "yellow"    , borderRadius: "25px" , width:"40%" , height:"40px" }} onClick={bidalert}     >Place Bid</button>

        
      </div>

        
    </div>
    </div>
    
    </div>
  )
}

export default Page