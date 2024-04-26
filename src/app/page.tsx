'use client';

import { LeftSide } from "~/components/leftSide";
import { MainContent } from "~/components/mainContent";
import { ScrollProvider } from "~/components/scrollContext";

export default function HomePage() {
  return (
    <ScrollProvider>
      <main className="grid grid-cols-1 md:grid-cols-12 h-screen max-w-7xl m-auto">
        <div className="md:col-start-2 md:col-span-3 fixed top-8 p-12">
          <LeftSide />
        </div>
        <div className="md:col-start-2 md:col-span-3 p-12 h-80"></div>
        <div className="md:col-start-6 md:col-span-6 p-8">
          <MainContent />
        </div>
      </main>
    </ScrollProvider>
  );
}