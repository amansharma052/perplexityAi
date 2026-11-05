import{Server} from "socket.io"

let io 
export function initSocket(httpServer){
    io =new Server(httpServer,{
        cors:{
            origin:"http://localhost5173",
            credentials:true
        }
    })
    console.log("socket io server is running")
    io.on("connection",(socket)=>{
        console.log("A user is connected with socket io"+socket.id)
    })
}
export function getIO(){
    if(!io){
        throw new Error("socket io is not inilatized")
    }
    return io
}