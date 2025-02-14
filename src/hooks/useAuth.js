
import { useEffect, useState } from "react";

const useAuth = ()=>{
const [isauth ,setisauth]= useState(null)
const [user ,setuser]= useState(null)
useEffect(()=>{
const checkauth =async ()=>{
try {
    const response = await fetch("http://localhost:8080/auth/verify", {
        method: "GET",
        credentials: "include", // Cookies ko bhejne ke liye
    });

const data = await response.json();
console.log("Auth API Response:", data);
if(data.success){
    setisauth(true);
    setuser(data.user);   
}else{
    setisauth(false);
    setuser(null);
}




} catch (error) {
    setisauth(false);
    setuser(null);   
}
};
checkauth()

},[])





return {isauth,user};


};
export default  useAuth;
