import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

let anthropicInstance: Anthropic;
let openAiInstance: OpenAI;

export function getAnthropicClient() {
  if (!anthropicInstance) {
    const apiKey = process.env.ANTHROPIC_API_KEY || "";

    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set in environment variables");
    }

    anthropicInstance = new Anthropic({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  return anthropicInstance;
}

export function getOpenAiClient(baseURL: string) {
  if (!openAiInstance) {
    const apiKey = process.env.GITHUB_API_KEY || "";

    if (!apiKey) {
      console.error("GITHUB_API_KEY is not set in environment variables");
    }

    openAiInstance = new OpenAI({
      baseURL,
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  return openAiInstance;
}

export function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY || "";
  const geminiInstance = new GoogleGenerativeAI(apiKey);

  return geminiInstance;
}
