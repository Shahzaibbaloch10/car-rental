import { toast } from "react-toastify";
 export const successmessage= (msg)=>{
    toast.success(msg,{
        position:'top-center'
    })
 }
 export const errormessage=(msg)=>{
    toast.error(msg,{
        position:'top-right'
    })
 }