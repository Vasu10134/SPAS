import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click 'Sign Up' on the homepage, fill in your details, and verify your email address to get started."
    },
    {
      question: "How are exams scored?",
      answer: "Exams are scored automatically using our advanced algorithm that considers accuracy, speed, and difficulty level."
    },
    {
      question: "Can I retake an exam?",
      answer: "Yes, you can retake most exams after a 24-hour waiting period. Some certification exams may have different policies."
    },
    {
      question: "How do I reset my password?", 
      answer: "Click 'Forgot Password' on the login page, enter your email, and follow the instructions sent to your inbox."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about SPAS</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
            <CardDescription>Everything you need to know about using SPAS</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;