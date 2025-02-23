import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";

let anthropicInstance = null;
let openAiInstance = null;

export function getAnthropicClient() {
  if (!anthropicInstance) {
    const apiKey = process.env.ANTHROPIC_API_KEY || "";

    if (!apiKey) {
      throw new Error("ANTHROPIC_API_KEY is not set in environment variables");
    }

    anthropicInstance = new Anthropic({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  return anthropicInstance;
}

export function getOpenAiClient() {
  if (!openAiInstance) {
    const apiKey = process.env.GITHUB_API_KEY || "";

    if (!apiKey) {
      throw new Error("GITHUB_API_KEY is not set in environment variables");
    }

    openAiInstance = new OpenAI({
      baseURL: "https://models.inference.ai.azure.com",
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  return openAiInstance;
}
