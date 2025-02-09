"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const { toast } = useToast();

  const copyText = () => {
    navigator.clipboard.writeText(prompt);
    toast({
      description: "Your message has been sent.",
    });
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
          <div className="flex gap-2">
            <Button disabled={!prompt.length}>Submit</Button>
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
            onChange={(e) => setOutput(e.target.value)}
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
