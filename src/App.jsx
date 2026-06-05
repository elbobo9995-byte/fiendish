import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/Landing';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import AllMatchesFinal from './pages/AllMatchesFinal';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Premium from './pages/Premium';
import PremiumConfirmed from './pages/PremiumConfirmed';
import Careers from './pages/Careers';
import Press from './pages/Press';
import InvestorRelations from './pages/InvestorRelations';
import CommunityGuidelines from './pages/CommunityGuidelines';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';
import BannedProfile from './pages/BannedProfile';
import WarningProfile from './pages/WarningProfile';

function WithFooter({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<WithFooter><Landing /></WithFooter>} />
        <Route path="/browse" element={<WithFooter><Browse /></WithFooter>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/banned/:id" element={<BannedProfile />} />
        <Route path="/warning/:id" element={<WarningProfile />} />
        <Route path="/all-matches-final" element={<AllMatchesFinal />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/premium/confirmed" element={<PremiumConfirmed />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
