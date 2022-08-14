import React from "react";
import "./Page3.css";

const Page3 = () => {

  function clickAlert() {
    alert("Update successfully");
}
function bidalert() {
  alert("Place successfully");
}


  return (
    <div className="main_w">
      {/* Navbar---------------------------------------------------------------------------- */}

      <div className="main">
        <div className="nav_1">
          <div>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: "25px",
                width: "50%",
                height: "40px",
                marginRight: "90px",
                marginTop: "4px",
              }}
            >
              Back
            </button>
          </div>
          <div>
            <p style={{ color: "white" }}>live Bid</p>
          </div>
        </div>
        {/* <div>
            <button style={{backgroundColor: "black" ,color: "white" ,  marginBottom:"100px" , borderRadius: "15px" , width:"10%" , height:"40px" }}>Bid left</button>
            </div> */}
        <div></div>
      </div>

      {/* components--------------------------------------------- */}

      <div className="main_3">
        <div className="main_2">
          <div>
            <h3>Grade</h3>
          </div>
          <div>
            <h3>IR-64(100% Broken)</h3>
          </div>
          <div className="flex_2">
            <div className="Nav_3">
              <p>Commenty type</p>
            </div>
            <div className="Nav_4">
              <h3>560 MT</h3>
            </div>
          </div>

          <div className="flex_2">
            <div className="Nav_3">
              <p>Commenty type</p>
            </div>
            <div className="Nav_4">
              <button
                style={{
                 
                  borderRadius: "25px",
                  marginTop: "18px",
                }}
                onClick={bidalert}
              >
                Place Bid
              </button>
            </div>
          </div>
          <div className="flex_2">
            <div className="Nav_3">
              <p>Commenty type</p>
            </div>
            <div className="Nav_4">
              <button
                style={{
                 
                  borderRadius: "25px",
                  marginTop: "20px",
                }}
                onClick={bidalert}
              >
                Place Bid
              </button>
            </div>
          </div>
          <div className="Nav_4">
              <button 
                style={{
                  backgroundColor: "#5846f6 ",
                  borderRadius: "25px",
                  marginTop: "20px",
                  width:"100px",
                  height:"35px"
                }}

                onClick={clickAlert}
              >
                UPDATE
              </button>
            </div>
        </div>

        <div className="main_2">
          <div>
            <h3>Grade</h3>
          </div>
          <div>
            <h3>IR-64(100% Broken)</h3>
          </div>
          <div className="flex_2">
            <div className="Nav_3">
              <p>Commenty type</p>
            </div>
            <div className="Nav_4">
              <h3>560 MT</h3>
            </div>
          </div>

          <div className="flex_2">
            <div className="Nav_3">
              <p>Commenty type</p>
            </div>
            <div className="Nav_4">
              <button
                style={{
                 
                  borderRadius: "25px",
                  marginTop: "18px",
                }}
                onClick={bidalert}
              >
                Place Bid
              </button>
            </div>
          </div>
          <div className="flex_2">
            <div className="Nav_3">
              <p>Commenty type</p>
            </div>
            <div className="Nav_4">
              <button
                style={{
                  
                  borderRadius: "25px",
                  marginTop: "20px",
                }}
                onClick={bidalert}
              >
                Place Bid
              </button>
            </div>
          </div>
          <div className="Nav_4">
              <button
                style={{
                  backgroundColor: "#5846f6 ",
                  borderRadius: "25px",
                  marginTop: "20px",
                  width:"100px",
                  height:"35px"
                }}
                onClick={clickAlert}
              >
                UPDATE
              </button>
            </div>
               </div>
        <div className="main_a">
          <div className="nav_a">
<h3>Counter offers</h3>
          </div>
          <div>
            <p style={{
                  marginTop:"150px"
                }}>Place your bid to recieve counter offer for buyer</p>
          </div> 

        </div>
      </div>
      <div className="Nav_4">
              <button
                style={{
                  backgroundColor: "#5846f6 ",
                  borderRadius: "25px",
                  marginTop: "20px",
                  width:"190px",
                  height:"40px",
                 marginRight:'5%'
                }}
                onClick={bidalert}
              >
                Place Bid
              </button>
            </div>
     
    </div>
  );
};

export default Page3;
