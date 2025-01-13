import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Sunhat() {
  return (
    <section className="my-6 flex flex-col items-center justify-center m-auto">
      <Accordion type="single" collapsible className="w-5/6 md:w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h1 className="text-lg md:text-2xl font-semibold text-center mx-auto">Sunhat (Bash)</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row mx-auto">
              <Link href="https://git.gbrown.org/gib/sunhat" className="flex flex-row mx-auto my-4">
                <h1 className="text-lg md:text-lg font-semibold text-center mx-auto">Sunhat Git Repository</h1>
                < FaGithub className="my-auto ml-2 mr-8 md:mr-0" size={22} />
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="indent-4">
                Sunhat is a fork of DHH&apos;s Omakub, an opinionated Ubuntu setup that
                I have contributed to in the past. Sunhat is a complete rewrite as it
                supports Fedora rather than Ubuntu. This project serves as my own personal
                Fedora setup script, but provides a lot of wisdom to newcomers in the
                Fedora / Linux community.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </section>
  );
};
