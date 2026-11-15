
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages"


const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-3.5-flash-lite",
    apiKey: process.env.GOOGLE_API_KEY

})

const titleModel = new ChatGoogleGenerativeAI({
    model: "gemini-3.5-flash-lite",
    apiKey: process.env.GOOGLE_TITLE_API_KEY

})

export async function generateResponse(message) {
    console.log(message)

    const response = await geminiModel.invoke(message.map(msg => {
        if (msg.role == "user") {
            return new HumanMessage(msg.content)
        } else if (msg.role == "ai") {
            return new AIMessage(msg.content)
        }
    }))

    return response.content
}


export async function generateChatTitle(message) {
    const response = await titleModel.invoke([
        new SystemMessage(`
            You are a helpful assistant that generates concise and descriptive titles for chat conversations.
            
            User will provide you with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.    
        `),
        new HumanMessage(`
            Generate a title for a chat conversation based on the following first message:
            "${message}"
            `)
    ])

}
