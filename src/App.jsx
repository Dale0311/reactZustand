import AnimalCard from "./comp/AnimalCard";
import ActionCard from "./comp/ActionCard";
function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-2">
        <AnimalCard />
        <div>
          <ActionCard />
        </div>
      </div>
    </div>
  );
}

export default App;
