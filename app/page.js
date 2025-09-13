import MobileHeader from "../components/MobileHeader.jsx";
import ProjectGenerator from "../components/ProjectGenerator.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <MobileHeader />
      <main className="flex-1 flex items-center justify-center">
        <ProjectGenerator />
      </main>
    </div>
  );
}