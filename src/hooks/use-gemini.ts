import { getGeminiClient } from "@/lib/ai-models-instances";
import { useCallback, useState } from "react";

export function useGemini() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (messages: string, onStreamUpdate: (text: string) => void) => {
      setIsLoading(true);
      setError(null);
      let completeResponse = "";

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      try {
        const geminiAi = getGeminiClient();
        const model = geminiAi.getGenerativeModel({
          model: "gemini-2.0-flash",
        });
        const chatSession = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [
                {
                  text: messages,
                },
              ],
            },
          ],
        });

        const result = await chatSession.sendMessageStream(messages);

        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          for (const letter of chunkText) {
            completeResponse += letter;
            onStreamUpdate(completeResponse);
            await new Promise((resolve) => setTimeout(resolve, 10));
          }
        }

        return completeResponse;
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
