import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <NavTabs />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}
export default App;
