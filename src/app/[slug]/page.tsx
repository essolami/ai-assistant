"use client";
import ComposeComponent from "@/components/features/compose";
import CorrectionComponent from "@/components/features/correction";
import ReformulationComponent from "@/components/features/reformulation";
import TranslationComponent from "@/components/features/translation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useClipboard } from "@/hooks/use-clipboard";
import {
  CheckCircle2,
  Edit,
  Languages,
  MessageCircle,
  RefreshCcw,
} from "lucide-react";
import { useState } from "react";

const AIAssistantPage = () => {
  const [results, setResults] = useState("");
  const { copyText } = useClipboard();

  return (
    <div className="container mx-auto py-6 max-w-5xl max-h-[calc(100vh-173px)] overflow-y-scroll">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Assistant</h1>
          <p className="text-muted-foreground">
            Enhance your content with powerful AI tools
          </p>
        </div>

        <Tabs defaultValue="correction" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="correction" className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              <span className="hidden sm:inline">Correction</span>
            </TabsTrigger>
            <TabsTrigger
              value="translation"
              className="flex items-center gap-1"
            >
              <Languages className="h-4 w-4" />
              <span className="hidden sm:inline">Translation</span>
            </TabsTrigger>
            <TabsTrigger
              value="reformulation"
              className="flex items-center gap-1"
            >
              <RefreshCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reformulation</span>
            </TabsTrigger>
            <TabsTrigger value="compose" className="flex items-center gap-1">
              <Edit className="h-4 w-4" />
              <span className="hidden sm:inline">Compose</span>
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <TabsContent value="correction" className="mt-0">
                <CorrectionComponent
                  setResults={(text: string) => setResults(text)}
                />
              </TabsContent>

              <TabsContent value="translation" className="mt-0">
                <TranslationComponent
                  setResults={(text: string) => setResults(text)}
                />
              </TabsContent>

              <TabsContent value="reformulation" className="mt-0">
                <ReformulationComponent
                  setResults={(text: string) => setResults(text)}
                />
              </TabsContent>

              <TabsContent value="compose" className="mt-0">
                <ComposeComponent
                  setResults={(text: string) => setResults(text)}
                />
              </TabsContent>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    Results
                  </CardTitle>
                  <CardDescription>
                    Your AI-processed content will appear here
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80 overflow-y-auto">
                  {results ? (
                    <div className="space-y-4">{results}</div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 text-muted-foreground">
                      <MessageCircle className="h-10 w-10 mb-4 opacity-20" />
                      <h3 className="font-medium mb-2">No Results Yet</h3>
                      <p className="text-sm">
                        Select one of the tools on the left and submit your
                        content to see results here.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  {/* <Button variant="outline">Save discussion</Button> */}
                  <Button variant="outline" onClick={() => copyText(results)}>
                    Copy
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AIAssistantPage;
