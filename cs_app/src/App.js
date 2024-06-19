import './App.css';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Counter from './components/Content_components/Counter';
import StopWatch from './components/Content_components/StopWatch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
          <Routes>
            <Route path="/counter" element={<Content page={Counter} />} />
            <Route path="/stopwatch" element={<Content page={StopWatch} />} />
            <Route path="/" element={<Content page={Counter} />} /> {/* Default page */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
