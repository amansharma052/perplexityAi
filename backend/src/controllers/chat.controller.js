import { response } from "express"
import { generateResponse,generateChatTitle} from "../services/ai.services.js"
export async function sendMessage(req,res){
    const {message} =req.body
    const title =await generateChatTitle(message)
    console.log(title)
    const result = await generateResponse(message)
    // return result
    res.json({
        aiMessage:result,
        title
    })
}