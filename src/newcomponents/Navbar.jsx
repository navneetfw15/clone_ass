import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>


<div class="topnav">
<div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>

  <a class="active" href="#home">Seller</a>
  <a class="active_1" href="#about">Buyer</a>
  <a href="#contact">HPRJ Agrf Traders Pvt Ltd</a>
  
</div>





{/* side bar----------------------------------- */}
<div>
<div className='nav_h'>

<div >
<h2>Steath</h2>

</div>

<div className='nav_m'><Link to="/"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>Dasboard</button>
      
      </Link></div>

      <div className='nav_m'><Link to="/users"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>Order track</button>
      
      </Link></div>

      <div className='nav_m'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>My task</button>
      
      </Link></div>

      <div className='nav_m'><Link to="/"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>Inbox</button>
      
      </Link></div>

      <div className='nav_m'><Link to="/task"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>My website</button>
      
      </Link></div>

      <div className='nav_m'><Link to="/users"><button style={{   borderRadius: "25px"  , width:"70%" , height:"40px" , marginBottom:"13px", marginTop:"10px"}}>Wallet</button>
      
      </Link></div>


    
    
    </div>
    </div>






    </div>
    
  )
}

export default Navbar