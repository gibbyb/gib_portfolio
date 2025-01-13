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
      <Accordion type="single" collapsible className="w-5/6 md:w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h1 className="text-lg md:text-2xl font-semibold text-center mx-auto">
              Lazy Primeagen Neovim Config (Lua)
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-center justify-center">
              <Link href="https://github.com/gibbyb/Lazy_Primeagen" className="flex flex-row mx-auto my-4">
                <h1 className="text-lg md:text-lg font-semibold text-center mx-auto">Lazy Primeagen Git Repository</h1>
                < FaGithub className="my-auto ml-2 mr-8 md:mr-0" size={22} />
              </Link>
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
