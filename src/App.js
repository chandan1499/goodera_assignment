import './App.css';
import { JobList } from './Components/JobList/JobList';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobList />
    </div>
  );
}

export default App;
