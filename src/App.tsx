import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SamplePage } from './pages';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SamplePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
