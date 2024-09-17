import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function TechTracker() {
  return (
    <section className="my-6 flex flex-col items-center justify-center m-auto">
      <Accordion type="single" collapsible className="w-5/6 md:w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h1 className="md:text-2xl font-semibold text-center mx-auto">Tech Tracker (Next.js, Swift & MySQL)</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex flex-row my-4 mx-auto">
                <Link href="https://techtracker.gbrown.org">
                  <h2 className="text-lg font-semibold text-center">
                    Tech Tracker Web Application
                  </h2>
                </Link>
                <Link href="https://git.gbrown.org/gib/Tech_Tracker_Web"
                  className="my-auto"
                  >
                  < FaGithub className="my-auto ml-2" size={22} />
                </Link>
              </div>
              <p className="indent-4">
                A Next.js Web Application that allows City of Gulfport IT Employees to
                update their status throughout the day using the T3 Stack which includes
                TypeScript, TailwindCSS, Auth.js, PostgreSQL, Drizzle, & Shadcnui.
              </p>
              <video
                src="/videos/techtrackerwebdemo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-auto rounded-lg shadow-lg my-4"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row my-4 mx-auto">
                <h2 className="text-lg font-semibold text-center">
                  Tech Tracker Native iOS Application
                </h2>
                <Link href="https://git.gbrown.org/gib/Tech_Tracker_iOS"
                  className="my-auto"
                >
                  < FaGithub className="my-auto ml-2" size={22} />
                </Link>
              </div>
              <p className="indent-4">
                A Native iOS Application written in Swift & Distributed to City of 
                Gulfport IT Employees using TestFlight. This application uses APIs
                provided by the Next.js Tech Tracker Web Application.
              </p>
              <video
                src="/videos/techtrackeriosdemo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-lg my-4 mx-auto w-[200px]"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </section>
  );
};
