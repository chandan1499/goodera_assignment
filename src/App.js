import './App.css';
import { JobList } from './Components/JobList/JobList';
import { JobPost } from './Components/JobPost/Job_post';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JobList />
      <JobPost />
    </div>
  );
}

export default App;
