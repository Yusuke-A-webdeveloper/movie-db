import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
