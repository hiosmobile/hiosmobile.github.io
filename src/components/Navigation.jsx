import { NavLink } from 'react-router-dom';
import '../assets/global.css';

const navItems = [
  { path: '/', icon: 'home', label: 'Home' },
  { path: '/restaurant', icon: 'restaurant', label: 'Food' },
  { path: '/hotel', icon: 'hotel', label: 'Hotel' },
  { path: '/roomkey', icon: 'key', label: 'Key' }
];

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className="nav-item">
          {({ isActive }) => (
            <div className={isActive ? 'activeIcon' : 'inactiveIcon'}>
              <i className="material-symbols-rounded">{item.icon}</i>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export function SideRail() {
  return (
    <aside className="side-rail">
      {navItems.map((item) => (
        <NavLink 
          key={item.path} 
          to={item.path} 
          className="nav-item" 
          style={{ marginBottom: '30px' }}
        >
          {({ isActive }) => (
            <>
              <div className={isActive ? 'activeIcon' : 'inactiveIcon'}>
                <i className="material-symbols-rounded">{item.icon}</i>
              </div>
              <span style={{ fontSize: '12px', marginTop: '6px', fontWeight: '500' }}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </aside>
  );
}