import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Fuse() {
  return (
    <section className="my-6 flex flex-col items-center justify-center m-auto">
      <Accordion type="single" collapsible className="w-5/6 md:w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-row">
              <h1 className="text-lg md:text-2xl font-semibold text-center">
                Fuse (React Native, Next.js, & PostgreSQL)
              </h1>
              <Link href="https://git.gbrown.org/gib/fuse_expo"
                className="my-auto"
              >
                < FaGithub className="my-auto ml-2 mr-8 md:mr-0" size={22} />
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <p className="indent-4">
                Fuse is an Expo Application that served as a way to learn React Native. This
                application was made for my girlfriend & I in order to send each other
                messages, as well as provide a countdown timer for the next time we would be
                together, as we are in a long distance relationship. This application uses
                API&apos;s provided by a 
                <Link href="https://ismadelinethecutest.gibbyb.com"
                  className="underline hover:text-blue-500"
                >
                  ‎ Next.js Web Application I also made for my girlfriend.
                </Link>. ‎This Web Application connects to a PostgreSQL Database & is
                also self-hosted using a Docker Container.
              </p>
              <video
                src="/videos/FuseRNDemo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-lg my-4 mx-auto w-[120px] md:w-[200px]"
              />

            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
