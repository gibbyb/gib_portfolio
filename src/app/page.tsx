import Link from "next/link";
import { ModeToggle } from "~/components/theme/themetoggle";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row items-end justify-end">
        <div className="mr-8 mt-6">
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
