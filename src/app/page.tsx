'use client';

import { LeftSide } from "~/components/leftSide";
import { MainContent } from "~/components/mainContent";
import { ScrollProvider } from "~/components/scrollContext";

export default function HomePage() {
  return (
    <ScrollProvider>
      <main className="grid grid-cols-1 md:grid-cols-10 h-screen max-w-7xl m-auto mt-4">
        <div className="md:col-start-2 md:col-span-2 fixed m-12 h-full max-md:static">
          <LeftSide />
        </div>
        <div className="md:col-start-5 md:col-span-6 mr-12 ml-12 md:mt-12">
          <MainContent />
        </div>
      </main>
    </ScrollProvider>
  );
}