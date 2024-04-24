import { LeftSide } from "~/components/leftSide";
import { MainContent } from "~/components/mainContent";

export default function HomePage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 h-screen max-w-7xl m-auto gap-32">
      <div className="md:col-span-2">
        <LeftSide />
      </div>
      <div className="md:col-span-3 overflow-y-auto">
        <MainContent />
      </div>
    </main>
  );
}
