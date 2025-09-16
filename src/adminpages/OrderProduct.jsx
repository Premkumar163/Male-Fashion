import axios from "axios";
import { useEffect, useState } from "react";

const Orderproduct=()=>{
    const [mydata,setmydata]=useState([]);

   const localdata=async()=>{
       
      let api="http://localhost:3000/order";

      const responce= await axios.get(api);
      console.log(responce.data)
      setmydata(responce.data)


       
   }

   useEffect(()=>{

      localdata();

   },[])

   let ans=mydata.map((key)=>{
      return(
         <>
         <tr>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.address}</td>
            <td>{key.contact}</td>
            <td>{key.pin}</td>
         </tr>
         </>
      )

   })

    return(
        <>
        <div id=" DisplayData">
<h1 id="DisplayDatafont">  Display Data </h1>
        <table border="2" cellPadding="14" cellSpacing="15"  style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Pin Code</th>
          </tr>
          {ans}
        </table>
        </div>
        
        
        </>
    )
}
export default Orderproduct