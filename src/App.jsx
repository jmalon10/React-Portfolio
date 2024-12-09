import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <header>
      <Header />
      <NavTabs />
    </header>
    <main className="flex-fill">
      <Outlet />
    </main>
    <footer>
    <Footer />
    </footer>
  </div>
  );
}
export default App;
