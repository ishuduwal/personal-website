import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from './components/home/Home';
import { Project } from './components/project/Project';
import { Contact } from './components/contact/Contact';
import { Navbar } from './components/home/Navbar';
import { Techmart } from './components/project/Techmart';
import { Todo } from './components/project/Todo';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/techmart' element={<Techmart />} />
            <Route path='/todo' element={<Todo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
