import Table from "./components/Table";
import { useAppSelector } from "./hooks/dispatch";

function App() {
  const { data } = useAppSelector((state) => state.price);
  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;
