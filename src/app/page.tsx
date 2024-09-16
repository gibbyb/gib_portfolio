import { ThemeToggle } from "~/components/theme/themetoggle";
import { PFPName } from "~/components/general/pfpname";
import AboutMe from "~/components/general/aboutme";
import TechChart from "~/components/general/techchart";
import TechTracker from "~/components/projects/techtracker";
//import Image from "next/image";
//import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row items-end justify-end">
        <div className="mr-8 mt-6">
          <ThemeToggle />
        </div>
      </div>
      <PFPName />
      <AboutMe />
      <TechChart />
      <h1 className="text-3xl font-semibold text-center my-8">Projects</h1>
      <TechTracker />
    </main>
  );
}
