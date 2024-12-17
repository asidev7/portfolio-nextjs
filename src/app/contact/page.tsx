import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const contactPage = () => {
  return (
    // PAGE DE CONTACT
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Phone className="h-5 w-5" />
        Contact
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contactez-moi !</Heading>
        <div className="h-auto w-full flex justify-center items-center">
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm />
          </FramerWrapper>
        </div>
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          Si vous avez des questions, des suggestions ou des demandes de collaboration, n'hésitez pas à me contacter en remplissant le formulaire ci-dessus. Je me ferai un plaisir de vous répondre dans les plus brefs délais.
        </p>
      </div>
    </div>
  );
};

export default contactPage;
