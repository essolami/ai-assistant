// pages/help.jsx or app/help/page.jsx depending on your Next.js routing
import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HelpPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Help Center</h1>

      <p className="text-lg mb-6">
        Welcome to our Help Center. Find guides and information on how to use
        our text assistant.
      </p>

      <Tabs defaultValue="getting-started" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  How to sign up and create your profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Visit our homepage and click the `Sign Up` button</li>
                  <li>Enter your email and create a secure password</li>
                  <li>Verify your email address</li>
                  <li>Complete your profile information</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upload your first text</CardTitle>
                <CardDescription>
                  Get started with text corrections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Navigate to the dashboard</li>
                  {/* <li>Click "New Project" or "Upload Text"</li> */}
                  <li>Paste your text or upload a document</li>
                  <li>Select the type of assistance needed</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="correction">
              <AccordionTrigger>Text Correction</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Our text correction tool identifies grammar, spelling, and
                  punctuation errors in your text.
                </p>
                <h4 className="font-medium mb-2">How to use:</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Upload or paste your text</li>
                  <li>Click `Check Text`</li>
                  <li>Review highlighted errors</li>
                  <li>Apply suggested corrections</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reformulation">
              <AccordionTrigger>Text Reformulation</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Rewrite your text to improve clarity, tone, or style while
                  preserving your message.
                </p>
                <h4 className="font-medium mb-2">How to use:</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Upload or paste your text</li>
                  <li>Select your desired tone (formal, casual, etc.)</li>
                  <li>Click `Reformulate`</li>
                  <li>Compare original and reformulated versions</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="translation">
              <AccordionTrigger>Translation</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Translate your text between multiple languages while
                  maintaining context and meaning.
                </p>
                <h4 className="font-medium mb-2">How to use:</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Upload or paste your text</li>
                  <li>Select source and target languages</li>
                  <li>Click `Translate`</li>
                  <li>Review and download your translated text</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="composition">
              <AccordionTrigger>Text Composition</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Get assistance creating new text based on your requirements
                  and guidelines.
                </p>
                <h4 className="font-medium mb-2">How to use:</h4>
                <ol className="list-decimal pl-5 mb-4">
                  <li>Select `Compose` from the dashboard</li>
                  <li>Enter your requirements (topic, length, style)</li>
                  <li>Provide any additional context</li>
                  <li>Click `Generate` and review the composition</li>
                  <li>Edit or regenerate as needed</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="troubleshooting">
          <Card>
            <CardHeader>
              <CardTitle>Common Issues</CardTitle>
              <CardDescription>
                Solutions to frequently encountered problems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">
                    Text not uploading properly
                  </h3>
                  <p>If you`re having trouble uploading text:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Check your file format (we support .txt, .doc, .docx,
                      .pdf)
                    </li>
                    <li>Ensure file size is under 10MB</li>
                    <li>Try copying and pasting the text directly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">
                    Translation accuracy issues
                  </h3>
                  <p>To improve translation quality:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Break complex sentences into shorter ones</li>
                    <li>Avoid slang or region-specific idioms</li>
                    <li>Provide context for ambiguous terms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Account access problems</h3>
                  <p>If you can`t log in:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Use the `Forgot Password` link</li>
                    <li>Check your email for verification links</li>
                    <li>Ensure you`re using the correct email address</li>
                    <li>Clear browser cookies and cache</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-10 text-center">
        <p className="mb-4">Still need help? We`re here for you.</p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/faq">View FAQ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
