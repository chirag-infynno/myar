import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

type LayoutProps = {
  children?: ReactNode;
  isBlur?: boolean;
};

const Layout = ({ children, isBlur }: LayoutProps) => {
  return (
    <div className="relative">
      <Navigation isBlur={isBlur} />
      {children}
      <Footer isBlur={isBlur} />
    </div>
  );
};

export default Layout;
