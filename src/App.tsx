import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Visit } from './pages/Visit';
import { Watch } from './pages/Watch';
import { Give } from './pages/Give';
import { Connect } from './pages/Connect';
import { Outreach } from './pages/Outreach';
import { Serve } from './pages/Serve';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-obc-offwhite font-sans text-obc-midnight">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/give" element={<Give />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetail />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/outreach" element={<Outreach />} />
            <Route path="/serve" element={<Serve />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>);

}
