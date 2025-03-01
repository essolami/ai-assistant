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

import { RefreshCcw } from "lucide-react";

const ReformulationComponent = () => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      // Process result
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCcw className="h-5 w-5 text-purple-500" />
          Reformulation
        </CardTitle>
        <CardDescription>
          Rewrite your text in different styles while preserving meaning
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="reformulation-input">Text to reformulate</Label>
          <Textarea
            id="reformulation-input"
            placeholder="Enter your text here..."
            className="min-h-32"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="tone">Tone</Label>
            <Select defaultValue="professional">
              <SelectTrigger id="tone">
                <SelectValue placeholder="Select tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                <SelectItem value="confident">Confident</SelectItem>
                <SelectItem value="sympathetic">Sympathetic</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ref-language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="ref-language">
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

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="output-length">Output Length</Label>
            <span className="text-xs text-muted-foreground">
              Shorter to Longer
            </span>
          </div>
          <Slider
            id="output-length"
            defaultValue={[50]}
            max={100}
            step={1}
            className="py-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="format">Output Format</Label>
          <Select defaultValue="paragraph">
            <SelectTrigger id="format">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paragraph">Paragraphs</SelectItem>
              <SelectItem value="bullets">Bullet Points</SelectItem>
              <SelectItem value="numbered">Numbered List</SelectItem>
              <SelectItem value="outline">Outline</SelectItem>
            </SelectContent>
          </Select>
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
              <RefreshCcw className="mr-2 h-4 w-4" />
              Reformulate
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReformulationComponent;
