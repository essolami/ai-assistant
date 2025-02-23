import { useState, useCallback } from "react";
import { getAnthropicClient, getOpenAiClient } from "@/lib/ai-models-instances";

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

export function useAnthropic(): UseAIResponse {
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
        const anthropic = getAnthropicClient();

        const defaultOptions: SendMessageOptions = {
          model: "claude-3-haiku-20240307",
          temperature: 0.7,
          max_tokens: 150,
        };

        const completion = await anthropic.messages.create({
          ...defaultOptions,
          ...options,
          messages,
        });

        return completion.content[0].text;
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
        const openAi = getOpenAiClient();

        const defaultOptions: SendMessageOptions = {
          model: "gpt-4o",
          temperature: 1,
          max_tokens: 4096,
          top_p: 1,
          stream: true,
        };

        const response = await openAi.chat.completions.create({
          ...defaultOptions,
          ...options,
          messages,
        });

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
