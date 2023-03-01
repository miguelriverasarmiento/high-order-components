import withSearch from "./components/hoc/withSearch";
import ProductList from "./components/hoc/productList";
import TodoList from "./components/hoc/todoList";
import "./App.css";

const products = [
  {
    id: 0,
    title: "carne",
  },
  {
    id: 1,
    title: "leche",
  },
  {
    id: 2,
    title: "verduras",
  },
];

const tasks = [
  {
    id: 0,
    title: "hacer tarea",
    completed: false,
  },
  {
    id: 1,
    title: "crear video",
    completed: true,
  },
  {
    id: 2,
    title: "limpiar casa",
    completed: false,
  },
];

const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWithSearch = withSearch(TodoList, tasks);


function App() {
  return (
    <div>
      <h2>HOC</h2>
      <ProductListWithSearch />
      <TodoListWithSearch />
    </div>
  );
}

export default App;