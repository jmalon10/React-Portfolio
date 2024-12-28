import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav style={{
      background: '#222', 
      borderBottom: '1px solid #ff007f',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', 
      paddingTop: '5px'

    }}>
      <ul className="nav nav-tabs justify-content-center" style={{ margin: 0, borderBottom: '1px solid #ff007f', paddingBottom: '5px' }}>
        {['About', 'Contact', 'Portfolio', 'Resume'].map((tab) => {
          const path = tab === 'About' ? '/' : `/${tab}`;
          const isActive = currentPage === path;

          return (
            <li className="nav-item" key={tab} style={{ margin: '0 15px' }}>
              <Link
                to={path}
                className={`nav-link${isActive ? ' active' : ''}`}
                style={{
                  background: isActive ? '#ff007f' : 'transparent',
                  color: isActive ? '#fff' : '#ff007f',
                  border: `2px solid ${isActive ? '#ff007f' : '#444'}`,
                  borderRadius: '30px',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  textShadow: '0 0 5px #ff007f, 0 0 15px #ff007f', 
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ff007f';
                  e.target.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = isActive ? '#ff007f' : 'transparent';
                  e.target.style.color = isActive ? '#fff' : '#ff007f';
                }}
              >
                {tab}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavTabs;
