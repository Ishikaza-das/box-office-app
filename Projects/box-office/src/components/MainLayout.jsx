import { Outlet } from 'react-router';
import Navs from './Navs';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />

      <Outlet />
    </div>
  );
};

export default MainLayout;
