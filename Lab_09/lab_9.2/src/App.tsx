import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <div>
      <VirtualList />
      <hr />
      <RegularList />
    </div>
  );
}

export default App;