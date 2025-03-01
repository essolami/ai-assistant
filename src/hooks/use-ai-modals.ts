import { useState, useCallback } from "react";
import { getOpenAiClient } from "@/lib/ai-models-instances";
import { ChatCompletionCreateParams } from "openai/resources/chat/completions";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type SendMessageOptions = {
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  stream?: boolean;
  model?: string;
  onStream?: (chunk: string) => void;
};

type UseAIResponse = {
  sendMessage: (params: {
    messages: Message[];
    options?: SendMessageOptions;
  }) => Promise<string>;
  isLoading: boolean;
  error: string | null;
};

export function useOpenAi(): UseAIResponse {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async ({
      messages,
      options = {},
    }: {
      messages: Message[];
      options?: SendMessageOptions;
    }) => {
      setIsLoading(true);
      setError(null);

      try {
        const openAi = getOpenAiClient("https://models.inference.ai.azure.com");

        const defaultOptions = {
          model: "gpt-4o",
          temperature: 1,
          max_tokens: 4096,
          top_p: 1,
        };

        // Create a properly typed request object
        const requestOptions: ChatCompletionCreateParams = {
          ...defaultOptions,
          model: options.model || defaultOptions.model,
          temperature: options.temperature ?? defaultOptions.temperature,
          max_tokens: options.max_tokens ?? defaultOptions.max_tokens,
          top_p: options.top_p ?? defaultOptions.top_p,
          messages: messages,
          stream: true,
        };

        const response = await openAi.chat.completions.create(requestOptions);

        let fullResponse = "";

        for await (const chunk of response) {
          const res = chunk.choices[0]?.delta?.content || "";
          fullResponse += res;

          if (options.onStream) {
            options.onStream(res);
          }
        }

        return fullResponse;
      } catch (err) {
        setError((err as Error).message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { sendMessage, isLoading, error };
}
