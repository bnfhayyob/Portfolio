"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const EmailContact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioConfig.email}`;
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="icon_underline flex items-center justify-center gap-2 text-2xl">
          <Mail className="h-6 w-6" />
          Contact me via Email
        </CardTitle>
        <CardDescription className="text-base pt-2">
          Click the button below to send me an email.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center pb-6">
        <Button
          onClick={handleEmailClick}
          className="w-full gap-2 py-6 text-lg"
          size="lg"
        >
          <Mail className="h-5 w-5" />
          Send Email
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmailContact;
