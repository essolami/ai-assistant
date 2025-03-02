"use client";
import parse from "html-react-parser";
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
// import { Switch } from "@/components/ui/switch";

import { CheckCircle2 } from "lucide-react";
import { useGemini } from "@/hooks/use-gemini";

type SupportedLanguage = "en" | "fr" | "es" | "de" | "it";

const CorrectionComponent = ({
  setResults,
}: {
  setResults: (text: string) => void;
}) => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formality, setFormality] = useState("standard");
  const [language, setLanguage] = useState<SupportedLanguage>("en");
  // const [explainChanges, setExplainChanges] = useState(false);
  const [outputText] = useState("");

  const { sendMessage } = useGemini();

  const handleSubmit = () => {
    if (!inputText.trim()) return;

    // Create a mapping for language codes to names
    const languageNames = {
      en: "English",
      fr: "French",
      es: "Spanish",
      de: "German",
      it: "Italian",
    };

    // Create the prompt using state values
    const prompt = `Please correct this text: "${inputText}"
    
    Follow these guidelines:
    - Correct for grammar, spelling, and punctuation errors
    - Use ${formality} formality level
    - Language should be ${languageNames[language]}
    - Return only the corrected text with no explanations"
    `;

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
            className="min-h-32"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="formality">Formality level</Label>
            <Select
              defaultValue="standard"
              onValueChange={(value) => setFormality(value)}
            >
              <SelectTrigger id="formality">
                <SelectValue placeholder="Select formality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="correction-language">Language</Label>
            <Select
              defaultValue="en"
              onValueChange={(value) => setLanguage(value as SupportedLanguage)}
            >
              <SelectTrigger id="correction-language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* <div className="flex items-center space-x-2">
          <Switch
            id="explain-changes"
            checked={explainChanges}
            onCheckedChange={setExplainChanges}
          />
          <Label htmlFor="explain-changes">Explain changes</Label>
        </div> */}
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
      {outputText && (
        <div className="mt-4 border rounded-md p-4 w-full">
          <h3 className="text-lg font-medium mb-2">Corrected Text:</h3>
          <div className="prose">{parse(outputText)}</div>
        </div>
      )}
    </Card>
  );
};

export default CorrectionComponent;
