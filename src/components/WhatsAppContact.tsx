"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const WhatsAppContact = () => {
  const whatsappNumber = portfolioConfig.whatsapp.replace(/[^0-9]/g, ""); // Remove any non-numeric characters

  const handleWhatsAppClick = () => {
    // Open WhatsApp chat directly
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="icon_underline flex items-center justify-center gap-2 text-2xl">
          <MessageCircle className="h-6 w-6" />
          Contact me on WhatsApp
        </CardTitle>
        <CardDescription className="text-base pt-2">
          Click the button below to start a conversation with me on WhatsApp.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center pb-6">
        <Button
          onClick={handleWhatsAppClick}
          className="w-full gap-2 py-6 text-lg"
          size="lg"
        >
          <MessageCircle className="h-5 w-5" />
          Open WhatsApp Chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default WhatsAppContact;
