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

// "use client";

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import {
//   MessageCircle,
//   BrainCircuit,
//   Settings,
//   History,
//   UserCircle,
//   Plus,
//   Send,
//   ChevronDown,
//   Zap,
// } from "lucide-react";

// const Dashboard = () => {
//   const [inputValue, setInputValue] = useState("");

//   // Mock conversation data
//   const conversations = [
//     { id: 1, title: "Project Planning", date: "Today", messages: 12 },
//     { id: 2, title: "Data Analysis Help", date: "Yesterday", messages: 8 },
//     { id: 3, title: "UI Design Feedback", date: "Mar 20", messages: 15 },
//   ];

//   // Mock usage data
//   const usageData = {
//     messagesUsed: 342,
//     messagesTotal: 500,
//     percentage: 68,
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
//       {/* Sidebar */}
//       <div className="md:col-span-1 flex flex-col gap-4">
//         <Card className="flex-1">
//           <CardHeader className="pb-2">
//             <CardTitle className="text-lg flex justify-between items-center">
//               <span>Conversations</span>
//               <Button size="sm" variant="outline">
//                 <Plus className="h-4 w-4 mr-1" /> New
//               </Button>
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="pb-2">
//             <div className="flex flex-col gap-2">
//               {conversations.map((convo) => (
//                 <Button
//                   key={convo.id}
//                   variant="ghost"
//                   className="flex justify-between items-center h-auto py-2 px-3 text-left"
//                 >
//                   <div className="flex flex-col items-start">
//                     <span className="font-medium">{convo.title}</span>
//                     <span className="text-xs text-muted-foreground">
//                       {convo.date} · {convo.messages} messages
//                     </span>
//                   </div>
//                   <ChevronDown className="h-4 w-4 text-muted-foreground" />
//                 </Button>
//               ))}
//             </div>
//           </CardContent>
//           <CardFooter className="pt-2">
//             <Card className="w-full bg-muted/50">
//               <CardContent className="py-2">
//                 <div className="flex flex-col gap-1">
//                   <div className="flex justify-between text-sm">
//                     <span>Usage</span>
//                     <span>
//                       {usageData.messagesUsed}/{usageData.messagesTotal}
//                     </span>
//                   </div>
//                   <Progress value={usageData.percentage} className="h-2" />
//                   <div className="flex justify-end">
//                     <Button
//                       variant="link"
//                       size="sm"
//                       className="h-auto p-0 text-xs"
//                     >
//                       Upgrade Plan
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </CardFooter>
//         </Card>
//       </div>

//       {/* Main content */}
//       <div className="md:col-span-2 flex flex-col gap-4">
//         <Tabs defaultValue="chat" className="flex-1 flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <TabsList>
//               <TabsTrigger value="chat" className="flex gap-1">
//                 <MessageCircle className="h-4 w-4" />
//                 <span>Chat</span>
//               </TabsTrigger>
//               <TabsTrigger value="tools" className="flex gap-1">
//                 <BrainCircuit className="h-4 w-4" />
//                 <span>Tools</span>
//               </TabsTrigger>
//               <TabsTrigger value="history" className="flex gap-1">
//                 <History className="h-4 w-4" />
//                 <span>History</span>
//               </TabsTrigger>
//             </TabsList>

//             <div className="flex gap-2">
//               <Button variant="outline" size="icon">
//                 <UserCircle className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="icon">
//                 <Settings className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <TabsContent value="chat" className="flex-1 flex flex-col mt-0">
//             <Card className="flex-1 flex flex-col">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg">New Conversation</CardTitle>
//                 <CardDescription>
//                   Ask me anything or select a capability below
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="flex-1 flex flex-col justify-between">
//                 <div className="grid grid-cols-2 gap-2 mb-4">
//                   <Button
//                     variant="outline"
//                     className="justify-start h-auto py-2"
//                   >
//                     <div className="flex flex-col items-start">
//                       <span className="font-medium flex items-center">
//                         <Zap className="h-4 w-4 mr-1 text-blue-500" />
//                         Summarize Text
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         Extract key points from long content
//                       </span>
//                     </div>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="justify-start h-auto py-2"
//                   >
//                     <div className="flex flex-col items-start">
//                       <span className="font-medium flex items-center">
//                         <Zap className="h-4 w-4 mr-1 text-purple-500" />
//                         Generate Code
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         Create code snippets and functions
//                       </span>
//                     </div>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="justify-start h-auto py-2"
//                   >
//                     <div className="flex flex-col items-start">
//                       <span className="font-medium flex items-center">
//                         <Zap className="h-4 w-4 mr-1 text-green-500" />
//                         Research Assistant
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         Find information and explain concepts
//                       </span>
//                     </div>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="justify-start h-auto py-2"
//                   >
//                     <div className="flex flex-col items-start">
//                       <span className="font-medium flex items-center">
//                         <Zap className="h-4 w-4 mr-1 text-amber-500" />
//                         Brainstorm Ideas
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         Generate creative concepts
//                       </span>
//                     </div>
//                   </Button>
//                 </div>

//                 <div className="flex flex-col gap-4">
//                   <div className="flex items-start gap-2">
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage src="/bot-avatar.png" alt="AI" />
//                       <AvatarFallback>AI</AvatarFallback>
//                     </Avatar>
//                     <div className="flex flex-col gap-1">
//                       <div className="bg-muted p-3 rounded-lg rounded-tl-none">
//                         <p>
//                           Hello! Im your AI assistant. How can I help you today?
//                         </p>
//                       </div>
//                       <span className="text-xs text-muted-foreground">
//                         12:34 PM
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>

//               <CardFooter className="pt-2">
//                 <div className="flex gap-2 w-full">
//                   <Input
//                     placeholder="Message AI assistant..."
//                     className="flex-1"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" && !e.shiftKey) {
//                         e.preventDefault();
//                         console.log("Sending message:", inputValue);
//                         setInputValue("");
//                       }
//                     }}
//                   />
//                   <Button size="icon">
//                     <Send className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="tools" className="flex-1 mt-0">
//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle>AI Tools</CardTitle>
//                 <CardDescription>
//                   Specialized capabilities for different tasks
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {[
//                     "Code Assistant",
//                     "Content Writer",
//                     "Data Analyzer",
//                     "Image Describer",
//                     "Translation",
//                     "Document Summarizer",
//                   ].map((tool) => (
//                     <Card key={tool} className="flex items-center p-4 gap-3">
//                       <div className="bg-primary/10 p-2 rounded-lg">
//                         <BrainCircuit className="h-5 w-5 text-primary" />
//                       </div>
//                       <div className="flex flex-col">
//                         <span className="font-medium">{tool}</span>
//                         <Badge variant="outline" className="w-fit mt-1">
//                           Tool
//                         </Badge>
//                       </div>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="history" className="flex-1 mt-0">
//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle>Conversation History</CardTitle>
//                 <CardDescription>Your recent interactions</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {conversations.map((convo) => (
//                     <div key={convo.id} className="border rounded-lg p-4">
//                       <div className="flex justify-between items-start mb-2">
//                         <div>
//                           <h3 className="font-medium">{convo.title}</h3>
//                           <p className="text-sm text-muted-foreground">
//                             {convo.date}
//                           </p>
//                         </div>
//                         <Badge>{convo.messages} messages</Badge>
//                       </div>
//                       <div className="flex justify-end gap-2 mt-4">
//                         <Button variant="outline" size="sm">
//                           Delete
//                         </Button>
//                         <Button size="sm">Continue</Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
