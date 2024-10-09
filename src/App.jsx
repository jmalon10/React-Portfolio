import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <>
      <Header />
      <NavTabs />
    <main>
      <Outlet />
    </main>
    </>
  );
}
export default App;
