import Loading from "../images/loading2.gif"
import { useState } from "react";
const PaymentDone=()=>{
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(()=>{
          setIsLoading(false);
    }, 3000);

    return(
        < >
        <div id="toppayment">
        
         {isLoading ? (<>
             <center>
            <img src={Loading} />
         </center>
          </>) : (<> 
         <div id="payment">
            <h1 id="paydon"> Payment Done </h1>
            <h3 align="center"> Your Order Succesfully placed!!!</h3>
           </div>
         </>)}
         </div>
        </>
    )
}
export default PaymentDone;