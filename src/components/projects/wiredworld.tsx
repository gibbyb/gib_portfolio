import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function WiredWorld() {
  return (
    <section className="my-6 flex flex-col items-center justify-center m-auto">
      <Accordion type="single" collapsible className="w-5/6 md:w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-row mx-auto">
              <h1 className="text-lg md:text-2xl font-semibold text-center mx-auto">
                Wired World (PHP & MySQL)
              </h1>
              <Link href="https://github.com/gibbyb/WiredWorld"
                className="my-auto"
              >
                < FaGithub className="my-auto ml-2 mr-8 md:mr-0" size={22} />
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex flex-row my-4 mx-auto">
                <Link href="https://wiredworld.gbrown.org">
                  <h2 className="text-lg font-semibold text-center underline hover:text-blue-500">
                    Wired World Website
                  </h2>
                </Link>
              </div>
              <p className="indent-4">
                Wired World is a strange project of mine which was made as an assignment
                while I was in school for my Database Management class. Wired World is 
                an online store written entirely from scratch using PHP & MySQL & is 
                self-hosted using a PHP Docker Container & Caddy as the reverse proxy.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
