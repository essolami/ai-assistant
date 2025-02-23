/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { getAnthropicClient, getOpenAiClient } from "@/lib/ai-models-instances";

export function useAnthropic() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async ({ messages, options = {} }) => {
    setIsLoading(true);
    setError(null);

    try {
      const anthropic = getAnthropicClient();

      const defaultOptions = {
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
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    sendMessage,
    isLoading,
    error,
  };
}

export function useOpenAi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [output, setOutput] = useState("");

  const sendMessage = useCallback(async ({ messages, options = {} }) => {
    setOutput("");
    setIsLoading(true);
    setError(null);

    try {
      const openAi = getOpenAiClient();

      const defaultOptions = {
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

      for await (const chunk of response) {
        const res = chunk.choices[0]?.delta?.content || "";
        setOutput((prev) => prev + res);
        return output;
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    output,
    sendMessage,
    isLoading,
    error,
  };
}
