import { Fragment } from 'react';

import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo" to="/">
                <CrwnLogo className="logo"/>
            </Link>
          <div className="nav-links-container">
              <Link className="nav-links" to="/shop"> SHOP </Link>
          </div>        
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;