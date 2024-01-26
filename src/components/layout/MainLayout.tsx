import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className='' >
      <Navbar />
      <Outlet  />
    </div>
  );
};

export default MainLayout;