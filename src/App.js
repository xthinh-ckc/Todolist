import './App.css';
import './css/bootstrap.css';
import './js/bootstrap.bundle.js';
import TaskAdd from './components/tasksadd';
import TasksList from './components/taskslist';
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <>
    <Provider store={store}>
    <div class="container mt-5">
    <h3>Todo List</h3>  
    <TaskAdd/>
    <TasksList/>
    </div>
    </Provider>
    </>
  );
}

export default App;
