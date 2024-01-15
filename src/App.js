import React from "react";
import myImage from './pic.jpeg';

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:"100%",
  height:"100vh"
}
function App() {

  return (
    <div>   
      <style jsx>{`
        @keyframes radiusTransition {
          0% {
            border-radius: 30% 50% 10% 50% / 50% 10% 50% 30%;
          }

          100% {
            border-radius: 23% 56% 66% 22% / 29% 41% 35% 52%;
          }
        }
      `}</style>
      <header style={{position:"fixed", zIndex:"100", width:"100%"}}>
        <div style={{
          display:"flex",
          justifyContent:"space-between"
        }}>
          <div style={{fontWeight:"bold", marginLeft:"1%"}}>Pritam.dev</div>
          <div style={{
            marginRight:"1%"
          }}>
            <button style={{border:"0px", background:"white", fontWeight:"bold"}}>Home</button>
            <button style={{border:"0px", background:"white", fontWeight:"bold"}}>About</button>
            <button style={{border:"0px", background:"white", fontWeight:"bold"}}>Projects</button>
            <button style={{border:"0px", background:"white", fontWeight:"bold"}}>Contact</button>
          </div>
        </div>
        {/* <ul style={{
          display:"flex",
          alignItems:"center",
          gap:"10%",
          marginRight:"0%"
        }}>
          <li style={{marginRight:"30%"}}>
            Pritam.dev
          </li>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> */}

      </header>
            <div style={{...center}}>
              <div
              style={{
                border:"2px",
                background:"red",
                display:"grid",
                gridTemplateColumns:"2fr 1fr",
                gridTemplateRows:"1fr 1fr 1fr",
                width:"40%",
                height:"50%"
              }}>
                <div>
                  Full Stack Web Developer
                </div>
                <div style={{
                  gridArea:"1/2/3/3"
                }}>
                  <img
                    src={myImage}
                    alt="mypic"
                    style={{
                      width:"100%",
                      height:"90%",
                      borderRadius:"50% 37% 18% 72% / 41% 21% 64% 36% ",
                      animation:"radiusTransition 4s infinite alternate"
                    }}></img>
                </div>
                <div>
                  About me
                </div>
              </div>
            </div>
            <div style={{...center}}>
              section 2
            </div>
            <div style={{...center}}>
              section 3
            </div>
            <div style={{...center}}>
              section 4
            </div>
    </div>
  );
}





export default App;
