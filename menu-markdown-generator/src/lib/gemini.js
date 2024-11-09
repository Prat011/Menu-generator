import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  apiKey: 'ENTER YOUR API KEY HERE',
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
  // other params...
});


export async function generateMenuMarkdown(menuText) {
  try {
    const aiMsg = await llm.invoke([
        [
          "system",
            `
            You are a professional menu formatter. Format the following menu text into beautiful markdown with emojis and styling.
            Use appropriate food emojis for each item category.
            Format prices distinctly.
            Add brief, appetizing descriptions where appropriate.
            
            Menu Text: {menuText}
            
            Format it into sections like:
            # Restaurant Name 🏪
            ## Appetizers 🥗
            ## Main Course 🍽️
            ## Desserts 🍰
            
            Make it visually appealing and easy to read. Make it in a List Format
            and divide all the food items into categories. If a particular food item
            isnt available for a category, just skip it.
        `,
        ],
        ["human", `${menuText}`],
      ]);
    
    return aiMsg.content;
  } catch (error) {
    console.error("Error generating menu markdown:", error);
    throw error;
  }
}