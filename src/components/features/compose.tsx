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
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

import { Edit } from "lucide-react";
import { SupportedLanguage } from "./translation";
import { useGemini } from "@/hooks/use-gemini";
import { ComposePrompt } from "@/consts/prompts";

const ComposeComponent = ({
  setResults,
}: {
  setResults: (text: string) => void;
}) => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const [tone, setTone] = useState("professional");
  const [language, setLanguage] = useState<SupportedLanguage>("en");
  const [length, setLength] = useState([50]);
  const [audience, setAudience] = useState("general");
  const [contentType, setContentType] = useState("email");

  const { sendMessage } = useGemini();

  const handleSubmit = () => {
    if (!inputText.trim()) return;

    const prompt = ComposePrompt(
      inputText,
      tone,
      language,
      length,
      contentType,
      audience
    );
    setIsProcessing(true);
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
          <Edit className="h-5 w-5 text-amber-500" />
          Compose
        </CardTitle>
        <CardDescription>
          Generate text based on your instructions and preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="compose-input">What would you like to compose?</Label>
          <Textarea
            id="compose-input"
            placeholder="Describe what you want to create..."
            className="min-h-32"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="content-type">Content Type</Label>
            <Select
              defaultValue="email"
              onValueChange={(value) => setContentType(value)}
            >
              <SelectTrigger id="content-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="blog">Blog Post</SelectItem>
                <SelectItem value="social">Social Media Post</SelectItem>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="story">Story</SelectItem>
                <SelectItem value="poem">Poem</SelectItem>
                <SelectItem value="script">Script</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comp-language">Language</Label>
            <Select
              defaultValue="en"
              onValueChange={(value: SupportedLanguage) => setLanguage(value)}
            >
              <SelectTrigger id="comp-language">
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

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="comp-tone">Tone</Label>
            <Select
              defaultValue="professional"
              onValueChange={(value) => setTone(value)}
            >
              <SelectTrigger id="comp-tone">
                <SelectValue placeholder="Select tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="persuasive">Persuasive</SelectItem>
                <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="audience">Target Audience</Label>
            <Select
              defaultValue="general"
              onValueChange={(value) => setAudience(value)}
            >
              <SelectTrigger id="audience">
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="youth">Youth</SelectItem>
                <SelectItem value="seniors">Seniors</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="content-length">Content Length</Label>
            <span className="text-xs text-muted-foreground">
              Brief to Detailed
            </span>
          </div>
          <Slider
            onValueChange={(value) => setLength(value)}
            id="content-length"
            defaultValue={[50]}
            max={100}
            step={1}
            className="py-2"
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
              <Edit className="mr-2 h-4 w-4" />
              Generate Content
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComposeComponent;
