'use client';

import { LeftSide } from "~/components/leftSide";
import { MainContent } from "~/components/mainContent";
import { ScrollProvider } from "~/components/scrollContext";

export default function HomePage() {
  return (
    <ScrollProvider>
      <main className="grid grid-cols-1 md:grid-cols-5 h-screen max-w-7xl m-auto gap-32">
        <div className="md:col-span-2 fixed top-20">
          <LeftSide />
        </div>
        <div className="md:col-start-3 md:col-span-3 relative">
          <MainContent />
        </div>
      </main>
    </ScrollProvider>
  );
}