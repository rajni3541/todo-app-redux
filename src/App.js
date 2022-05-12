import {Routes, Route} from 'react-router-dom';
import EditTodo from './components/EditTodo/EditTodo';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </>
  );
}

export default App;