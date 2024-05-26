'use client';

import Profile from "~/components/profile";
import MainContent from "~/components/mainContent";
import { ScrollProvider } from "~/components/scrollContext";


const HomePage: React.FC = () => {
  return (
    <ScrollProvider>
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto sm:px-12 lg:px-16">
        <header className="w-112 lg:col-span-5 lg:sticky lg:top-0 lg:max-h-screen">
          <Profile />
        </header>
        <div className="m-8 lg:hidden sm:block">
          <hr className="border-white border-1 rounded-sm opacity-30" />
        </div>
        <main className="lg:col-start-6 lg:col-span-7">
          <MainContent />
        </main>
      </div>
    </ScrollProvider>
  );
}

export default HomePage;
