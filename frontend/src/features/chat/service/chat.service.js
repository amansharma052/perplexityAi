import { io } from "socket.io-client";
export const inilatizedSocketConnection=()=>{
    const socket =io("http://localhost:3000",{
        withCredentials:true
    })
    socket.io("connected",()=>{
        console.log("socket io is connected to server")
    })
}