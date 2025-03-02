"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useGemini } from "@/hooks/use-gemini";
import { CorrectionPrompt } from "@/consts/prompts";

const CorrectionComponent = ({
  setResults,
}: {
  setResults: (text: string) => void;
}) => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const { sendMessage } = useGemini();

  const handleSubmit = () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    const prompt = CorrectionPrompt(inputText);
    sendMessage(prompt, (text) => {
      const cleanOutputText = text.replace(/^```html\s*|```$/g, "");
      setResults(cleanOutputText);
    });
    setIsProcessing(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          Text Correction
        </CardTitle>
        <CardDescription>
          Correct grammar, spelling, and punctuation errors in your text
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="correction-input">Text to correct</Label>
          <Textarea
            id="correction-input"
            placeholder="Enter your text here..."
            className="h-80"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>Processing...</>
          ) : (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Correct Text
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CorrectionComponent;
