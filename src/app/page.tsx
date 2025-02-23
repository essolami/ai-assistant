"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAnthropic, useOpenAi } from "@/hooks/use-ai-modals";
import { useToast } from "@/hooks/use-toast";

import { RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const { toast } = useToast();
  let lolipopa = "";
  const { sendMessage: sendAnthropicMessage } = useAnthropic();
  const { sendMessage: sendOpenaiMessage } = useOpenAi();

  const copyText = () => {
    navigator.clipboard.writeText(output);
    toast({
      description: "Your message has been sent.",
    });
  };

  const useClaude = async () => {
    try {
      const response = await sendAnthropicMessage({
        messages: [],
      });
      console.log(response);
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  const useChatgpt = async () => {
    try {
      await sendOpenaiMessage({
        messages: [
          {
            role: "user",
            content: `please make a simple and short reformulation for ${prompt}`,
          },
        ],
        options: {
          onStream: (chunk: string) => {
            lolipopa += chunk;
            console.log(lolipopa);
            setOutput(lolipopa);
          },
        },
      });
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <>
      <div className="flex w-full gap-2 h-full flex-col md:flex-row">
        <div className="w-full h-1/2 flex flex-col gap-2 md:w-1/2 md:h-full ">
          <Textarea
            placeholder="Type your message here."
            className="h-full"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={useClaude}>useAnthropic</Button>
          <div className="flex gap-2">
            <Button onClick={useChatgpt} disabled={!prompt.length}>
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={() => setPrompt("")}
              disabled={!prompt.length}
            >
              <RotateCcw />
            </Button>
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col gap-2 md:w-1/2 md:h-full ">
          <Textarea
            placeholder=""
            className="h-full bg-gray-600"
            disabled
            value={output}
            // onChange={(e) => setOutput(e.target.value)}
          />
          <div className="flex gap-2 place-self-end">
            <Button
              variant="secondary"
              disabled={!output.length}
              onClick={() => copyText()}
            >
              Copy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
