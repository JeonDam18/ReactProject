import React, { useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const token = localStorage.getItem("token");
const dToken = jwtDecode(token);

function Profile(props) {
// useEffect(()=>{
//     profileDetail();
// },[])
// console.log(dToken.userId);
// async function profileDetail(){
//     try {
//         const res = await axios.get("http://localhost:3100/profile",{
//             userId :  dToken.userId
//         })
//         if(res.data.success){
//             console.log("데이터가져옴");
//         }
//     } catch (error) {
//         console.log("fail");
//     }
// }
    return (
        <div>
            
        </div>
    );
}

export default Profile;