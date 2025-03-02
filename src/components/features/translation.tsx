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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Languages, ArrowRight } from "lucide-react";
import { useGemini } from "@/hooks/use-gemini";
import { TranslationPrompt } from "@/consts/prompts";

export type SupportedLanguage = "en" | "fr" | "es" | "de" | "it";

type TranslationComponentProps = {
  setResults: (text: string) => void;
};

const TranslationComponent = ({ setResults }: TranslationComponentProps) => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState<SupportedLanguage>("fr");
  const { sendMessage } = useGemini();

  const handleSubmit = () => {
    if (!inputText.trim()) return;
    const prompt = TranslationPrompt(inputText, language);
    setIsProcessing(true);
    sendMessage(prompt, (text) => {
      const cleanOutputText = text.replace(/^```html\s*|```$/g, "");
      setResults(cleanOutputText);
      setIsProcessing(false);
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Languages className="h-5 w-5 text-blue-500" />
          Translation
        </CardTitle>
        <CardDescription>
          Translate your text to various languages with high accuracy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="translation-input">Text to translate</Label>
          <Textarea
            id="translation-input"
            placeholder="Enter your text here..."
            className="h-64"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 space-y-2">
            <Label htmlFor="source-language">Source Language</Label>
            <Select defaultValue="auto">
              <SelectTrigger id="source-language">
                <SelectValue placeholder="Detect language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto Detect</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ArrowRight className="mt-8" />

          <div className="flex-1 space-y-2">
            <Label htmlFor="target-language">Target Language</Label>
            <Select
              defaultValue="fr"
              onValueChange={(value: SupportedLanguage) => setLanguage(value)}
            >
              <SelectTrigger id="target-language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
              <Languages className="mr-2 h-4 w-4" />
              Translate
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TranslationComponent;
