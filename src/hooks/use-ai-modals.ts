import { useState, useCallback } from "react";
import { getAnthropicClient, getOpenAiClient } from "@/lib/ai-models-instances";
import { ChatCompletionCreateParams } from "openai/resources/chat/completions";
import {
  MessageCreateParams,
  MessageParam,
  TextBlock,
} from "@anthropic-ai/sdk/resources/index.mjs";

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

        const defaultOptions = {
          model: "claude-3-haiku-20240307",
          temperature: 0.7,
          max_tokens: 150,
        };

        // Convert generic messages to Anthropic-specific MessageParam format
        const anthropicMessages: MessageParam[] = messages.map((msg) => {
          if (msg.role === "system") {
            return { role: "user", content: msg.content } as MessageParam;
          } else if (msg.role === "user") {
            return { role: "user", content: msg.content } as MessageParam;
          } else {
            return { role: "assistant", content: msg.content } as MessageParam;
          }
        });

        // Filter out invalid messages since Anthropic's API is strict
        const validMessages = anthropicMessages.filter(
          (msg) => msg.role === "user" || msg.role === "assistant"
        );

        // Create properly typed request object for Anthropic
        const requestOptions: MessageCreateParams = {
          model: options.model || defaultOptions.model,
          temperature: options.temperature ?? defaultOptions.temperature,
          max_tokens: options.max_tokens ?? defaultOptions.max_tokens,
          messages: validMessages,
          stream: options.stream ?? true,
        };

        if (options.top_p !== undefined) {
          requestOptions.top_p = options.top_p;
        }

        // Extract system message if present and add as system
        const systemMessage = messages.find((msg) => msg.role === "system");
        if (systemMessage) {
          requestOptions.system = systemMessage.content;
        }

        let fullResponse = "";

        if (requestOptions.stream) {
          const stream = await anthropic.messages.create(requestOptions);

          for await (const chunk of stream) {
            if (chunk) {
              console.log(chunk);
              const textDelta = chunk.type || "";
              fullResponse += textDelta;

              if (options.onStream) {
                options.onStream(textDelta);
              }
            }
          }

          return fullResponse;
        } else {
          const response = await anthropic.messages.create({
            ...requestOptions,
            stream: false,
          });

          // Extract text from the response content blocks
          const textContent = response.content
            .filter((block): block is TextBlock => block.type === "text")
            .map((block) => block.text)
            .join("");

          return textContent;
        }
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
        const openAi = getOpenAiClient("https://models.inference.ai.azure.com");

        const defaultOptions = {
          model: "gpt-4o",
          temperature: 1,
          max_tokens: 4096,
          top_p: 1,
        };

        // Create a properly typed request object
        const requestOptions: ChatCompletionCreateParams = {
          model: options.model || defaultOptions.model,
          temperature: options.temperature ?? defaultOptions.temperature,
          max_tokens: options.max_tokens ?? defaultOptions.max_tokens,
          top_p: options.top_p ?? defaultOptions.top_p,
          messages: messages,
          stream: options.stream ?? true,
        };

        let fullResponse = "";

        if (requestOptions.stream) {
          const response = await openAi.chat.completions.create(requestOptions);

          for await (const chunk of response) {
            const res = chunk.choices[0]?.delta?.content || "";
            fullResponse += res;

            if (options.onStream) {
              options.onStream(res);
            }
          }

          return fullResponse;
        } else {
          const response = await openAi.chat.completions.create({
            ...requestOptions,
            stream: false,
          });

          return response.choices[0]?.message?.content || "";
        }
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
