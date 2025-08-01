import { Routes, Route } from 'react-router-dom'; import ShortenerPage from './pages/ShortenerPage'; import StatisticsPage from './pages/StatisticsPage'; import RedirectHandler from './pages/RedirectHandler'; import NotFoundPage from './pages/NotFoundPage';

export default function App() { return ( <Routes> <Route path="/" element={<ShortenerPage />} /> <Route path="/statistics" element={<StatisticsPage />} /> <Route path=":shortcode" element={<RedirectHandler />} /> <Route path="*" element={<NotFoundPage />} /> </Routes> ); }
