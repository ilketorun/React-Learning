import Todos from "./components/Todos";
import Todo from "./Modals/todo";

function App() {
  const todos = [
    new Todo("Learn React", 1),
    new Todo("Learn TypeScript", 2),
    new Todo("This is third one", 3),
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
