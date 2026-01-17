import WhatsAppContact from "@/components/WhatsAppContact";
import EmailContact from "@/components/EmailContact";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const contactPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Phone className="h-4 w-4" />
        Contact Me
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>
        <div className="h-auto w-full flex flex-col md:flex-row justify-center items-center gap-6">
          <FramerWrapper y={0} scale={0.8}>
            <WhatsAppContact />
          </FramerWrapper>
          <FramerWrapper y={0} scale={0.8}>
            <EmailContact />
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
