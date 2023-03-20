import React from "react";
import qrcodeImg from "../image-qr-code.png";

function QrCode(){
    return (
        <div className="container-div">
           <img 
                id="qr-img"
                src={qrcodeImg} 
                alt="Qr-code-pic"
           >
           </img>
           <h1>
               Improve your front-end<br></br>
               skills by building projects
           </h1>
           <p>
                Scan the QR code to visit Frontend<br></br>
                Mentor and take your coding skills to<br></br>
                the next level
           </p>
        </div>
    )
}
export default QrCode;