import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Tesla from './components/Tesla.jsx';
import Career from './components/Career.jsx';
import Achievements from './components/Achievements.jsx';
import Facts from './components/Facts.jsx';
import Closing from './components/Closing.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import { NAV } from './data/content.js';

const IDS = NAV.map((n) => n.id);

export default function App() {
  const active = useActiveSection(IDS);
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero /><About /><Tesla /><Career /><Achievements /><Facts /><Closing />
      </main>
    </>
  );
}
