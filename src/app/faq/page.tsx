import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input className="pl-10" placeholder="Search for answers..." />
        </div>
      </div>

      <Tabs defaultValue="general" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account & Billing</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is">
              <AccordionTrigger>
                What is your text assistant app?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Our text assistant app is a comprehensive tool designed to
                  help you improve your writing. It offers features for text
                  correction, reformulation, translation, and composition
                  assistance. Whether you`re writing an important email,
                  academic paper, or creative content, our app provides the
                  tools you need to enhance your text.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="who-for">
              <AccordionTrigger>Who is this app designed for?</AccordionTrigger>
              <AccordionContent>
                <p>Our app is designed for a wide range of users including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Students working on academic papers and essays</li>
                  <li>Professionals crafting business communications</li>
                  <li>
                    Content creators developing articles, blogs, and creative
                    writing
                  </li>
                  <li>
                    Non-native speakers looking to improve their writing in
                    another language
                  </li>
                  <li>
                    Anyone who wants to ensure their writing is clear, correct,
                    and effective
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages">
              <AccordionTrigger>What languages are supported?</AccordionTrigger>
              <AccordionContent>
                <p>Our app currently supports the following languages:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>English (US, UK, Australian, Canadian)</li>
                  <li>Spanish</li>
                  <li>French</li>
                  <li>German</li>
                  <li>Italian</li>
                  <li>Portuguese</li>
                  <li>Chinese (Simplified and Traditional)</li>
                  <li>Japanese</li>
                  <li>Korean</li>
                  <li>Russian</li>
                </ul>
                <p className="mt-2">
                  We`re constantly adding support for more languages based on
                  user demand.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy">
              <AccordionTrigger>
                How is my data handled and protected?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We take data privacy seriously. All texts uploaded to our
                  platform are encrypted both in transit and at rest. We do not
                  store your texts longer than necessary to provide our
                  services, and you can delete your data at any time.
                </p>
                <p className="mt-2">
                  We do not use your content to train our models unless you
                  explicitly opt in. For more details, please refer to our
                  comprehensive Privacy Policy.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="account">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="free-plan">
              <AccordionTrigger>
                Is there a free plan available?
              </AccordionTrigger>
              <AccordionContent>
                <p>Yes, we offer a free plan that includes:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Basic text correction for documents up to 1,000 words</li>
                  <li>Limited reformulation features</li>
                  <li>Translation of short texts (up to 500 words)</li>
                  <li>5 composition requests per month</li>
                </ul>
                <p className="mt-2">
                  Our premium plans offer expanded features, higher word limits,
                  and priority support.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="subscription">
              <AccordionTrigger>How do subscriptions work?</AccordionTrigger>
              <AccordionContent>
                <p>We offer monthly and annual subscription plans:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>Basic ($9.99/month):</strong> Text correction and
                    reformulation for documents up to 10,000 words, translation,
                    and 20 composition requests per month
                  </li>
                  <li>
                    <strong>Pro ($19.99/month):</strong> All Basic features plus
                    priority support, advanced composition tools, and unlimited
                    text processing
                  </li>
                  <li>
                    <strong>Team ($49.99/month):</strong> All Pro features for
                    up to 5 users, with collaboration tools and admin dashboard
                  </li>
                </ul>
                <p className="mt-2">
                  All plans can be canceled at any time. Annual subscriptions
                  offer a 20% discount compared to monthly billing.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancel">
              <AccordionTrigger>
                How do I cancel my subscription?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can cancel your subscription at any time by following
                  these steps:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Log in to your account</li>
                  <li>Go to `Account Settings`</li>
                  <li>Select `Subscription`</li>
                  <li>Click `Cancel Subscription`</li>
                  <li>Confirm your cancellation</li>
                </ol>
                <p className="mt-2">
                  After cancellation, your account will remain active until the
                  end of your current billing period. You won`t be charged
                  again, and your account will revert to the free plan when your
                  paid period ends.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refund">
              <AccordionTrigger>What is your refund policy?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We offer a 14-day money-back guarantee for all new
                  subscriptions. If you`re not satisfied with our service within
                  the first 14 days, contact our support team for a full refund.
                </p>
                <p className="mt-2">
                  For annual subscriptions, we can provide a prorated refund if
                  requested within 30 days of payment. After these periods,
                  refunds are handled on a case-by-case basis.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="features">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="correction">
              <AccordionTrigger>
                How accurate is the text correction feature?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Our text correction feature uses advanced AI models to
                  identify and suggest fixes for:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Spelling errors</li>
                  <li>Grammar issues</li>
                  <li>Punctuation mistakes</li>
                  <li>Style inconsistencies</li>
                </ul>
                <p className="mt-2">
                  While our system achieves over 95% accuracy for common errors,
                  we recommend a final human review for critical documents. We
                  continuously improve our models based on user feedback and
                  linguistic research.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="translation">
              <AccordionTrigger>
                How does the translation feature work?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Our translation feature uses neural machine translation
                  technology to provide accurate translations between supported
                  languages. Unlike basic translation tools, our system:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Preserves context and meaning across languages</li>
                  <li>Maintains appropriate tone and formality levels</li>
                  <li>Handles industry-specific terminology</li>
                  <li>
                    Provides alternative translations for ambiguous phrases
                  </li>
                </ul>
                <p className="mt-2">
                  For professional or official translations requiring
                  certification, we recommend consulting with a professional
                  human translator.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reformulation">
              <AccordionTrigger>
                What does the reformulation feature do?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The reformulation feature helps you rewrite your text while
                  preserving its core meaning. It`s useful for:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Adjusting the tone (formal, casual, friendly, professional)
                  </li>
                  <li>Simplifying complex explanations</li>
                  <li>Making text more concise or more detailed</li>
                  <li>Improving clarity and readability</li>
                  <li>Avoiding repetition and redundancy</li>
                </ul>
                <p className="mt-2">
                  You can select specific reformulation goals or let our AI
                  suggest improvements based on your text type and audience.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="composition">
              <AccordionTrigger>
                How does the composition assistant work?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Our composition assistant helps you create original text based
                  on your specifications. You can:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Provide a topic and key points you want to cover</li>
                  <li>Specify the desired length and format</li>
                  <li>Choose the tone and style</li>
                  <li>Set the target audience</li>
                </ul>
                <p className="mt-2">
                  The AI will generate a draft that you can then edit, refine,
                  or request alternatives for. You maintain full creative
                  control while our system helps you overcome writer`s block and
                  structure your thoughts effectively.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="technical">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="supported-formats">
              <AccordionTrigger>
                What file formats are supported?
              </AccordionTrigger>
              <AccordionContent>
                <p>Our app supports the following file formats:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>Text documents:</strong> .txt, .doc, .docx, .rtf,
                    .odt
                  </li>
                  <li>
                    <strong>Web content:</strong> .html, .md
                  </li>
                  <li>
                    <strong>Presentations:</strong> .ppt, .pptx
                  </li>
                  <li>
                    <strong>Spreadsheets:</strong> .csv (text content in cells)
                  </li>
                  <li>
                    <strong>PDFs:</strong> .pdf (text layer must be present for
                    editing)
                  </li>
                </ul>
                <p className="mt-2">
                  The maximum file size is 20MB for free accounts and 50MB for
                  premium accounts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="offline">
              <AccordionTrigger>Can I use the app offline?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Our app primarily functions online as it relies on our
                  cloud-based AI processing. However:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Premium users can download the desktop app which offers
                    limited offline capabilities
                  </li>
                  <li>
                    The offline mode can perform basic spelling and grammar
                    checks
                  </li>
                  <li>
                    Previously processed documents can be accessed offline if
                    you`ve enabled this feature
                  </li>
                </ul>
                <p className="mt-2">
                  Advanced features like translation, reformulation, and
                  composition require an internet connection to access our AI
                  models.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integrations">
              <AccordionTrigger>
                Does the app integrate with other software?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, our app integrates with various writing and productivity
                  tools:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>Word processors:</strong> Microsoft Word, Google
                    Docs
                  </li>
                  <li>
                    <strong>Email clients:</strong> Gmail, Outlook
                  </li>
                  <li>
                    <strong>Browsers:</strong> Chrome and Firefox extensions
                  </li>
                  <li>
                    <strong>Content management:</strong> WordPress, Medium
                  </li>
                  <li>
                    <strong>Productivity:</strong> Notion, Evernote
                  </li>
                </ul>
                <p className="mt-2">
                  We also offer an API for custom integrations with enterprise
                  systems. Check our developer documentation for details.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="devices">
              <AccordionTrigger>
                What devices can I use the app on?
              </AccordionTrigger>
              <AccordionContent>
                <p>Our app is available on multiple platforms:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>Web:</strong> Access via any modern browser on
                    desktop or mobile
                  </li>
                  <li>
                    <strong>Mobile apps:</strong> Native apps for iOS and
                    Android devices
                  </li>
                  <li>
                    <strong>Desktop:</strong> Applications for Windows, macOS,
                    and Linux
                  </li>
                  <li>
                    <strong>Extensions:</strong> Browser add-ons for Chrome,
                    Firefox, and Edge
                  </li>
                </ul>
                <p className="mt-2">
                  Your account and documents sync across all platforms, allowing
                  you to start work on one device and continue on another.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="api">
              <AccordionTrigger>
                Do you offer an API for developers?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, we provide a comprehensive REST API that allows
                  developers to integrate our text processing capabilities into
                  their own applications. The API includes endpoints for:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Text analysis and correction</li>
                  <li>Translation between supported languages</li>
                  <li>Text reformulation with customizable parameters</li>
                  <li>Text composition based on structured inputs</li>
                </ul>
                <p className="mt-2">
                  API access is available on Pro and Team plans, with custom
                  enterprise pricing for high-volume usage. Visit our Developer
                  Portal for documentation, authentication details, and sample
                  code.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="mt-10 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="mb-6">
          If you couldn`t find the answer you were looking for, our support team
          is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/help">Visit Help Center</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
