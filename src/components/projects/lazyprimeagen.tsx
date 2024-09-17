import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function LazyPrimeagen() {
  return (
    <section className="my-6 flex flex-col items-center justify-center m-auto">
      <Accordion type="single" collapsible className="w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-row mx-auto">
              <h1 className="text-2xl font-semibold text-center mx-auto">
                Lazy Primeagen Neovim Config (Lua)
              </h1>
              <Link href="https://github.com/gibbyb/Lazy_Primeagen"
                className="my-auto"
              >
                < FaGithub className="my-auto ml-2" size={22} />
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-center justify-center">
              <p className="indent-4 items-center justify-center">
                Lazy Primeagen is simply ThePrimeagen&apos;s Neovim Config, but with the 
                deprecated Packer.nvim replaced with Lazy.nvim. This project is meant
                to be exactly the same as ThePrimeagen&apos;s Neovim Config, just with Lazy.nvim
                instead of Packer.nvim.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
