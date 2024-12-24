import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

declare global {
  var model: any;
}

globalThis.model =
  globalThis.model || genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const model = globalThis.model;

export default model;
