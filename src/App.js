import withSearch from "./components/hoc/withSearch";
import ProductList from "./components/hoc/productList";
import TodoList from "./components/hoc/todoList";
import TodoContainer from "./components/presentation-container/todoContainer";
import TodosView from "./components/provider/todosView";
import Store from "./components/provider/store";
import Menu from "./components/compound/menu";
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
      <hr />
      <h2>Presentation-container</h2>
      <TodoContainer />
      <hr />
      <h2>Provider</h2>
      <Store>
        <TodosView />
      </Store>
      <hr />
      <h2>Compound</h2>
      <Menu>
        <Menu.Item title="Elemento 1" />
        <Menu.Item title="Elemento 2" />
        <Menu.Item title="Elemento 3" />
      </Menu>
    </div>
  );
}

export default App;
