import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function TenantPortal() {
  return (
    <section className="my-6 flex flex-col items-center justify-center m-auto">
      <Accordion type="single" collapsible className="w-5/6 md:w-1/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h1 className="text-lg md:text-2xl font-semibold text-center mx-auto">
              Tenant Portal (Next.js & PostgreSQL)
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row my-4 mx-auto">
                <Link href="https://tenantportal.gbrown.org">
                  <h2 className="text-lg font-semibold text-center">
                    Tenant Portal Web Application
                  </h2>
                </Link>
                <Link href="https://git.gbrown.org/gib/rent_portal"
                  className="my-auto"
                  >
                  < FaGithub className="my-auto ml-2 mr-8 md:mr-0" size={22} />
                </Link>
              </div>
              <p className="indent-4 items-center justify-center">
                Tenant Portal is a Next.js Web Application that is a work in progress,
                but will serve as an interface for future tenants of the company I rent
                from. This application currently is only used by myself & my roommate,
                as we continue to beta test the application & as I continue to develop it.
              </p>
              <p className="indent-4 items-center justify-center">
                This web application uses the T3 Stack which includes Next.js, TypeScript,
                TailwindCSS, Auth.js, PostgreSQL, Drizzle, & Shadcnui.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </section>
  );
};
