import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Layout.module.css';
import NewProductForm from './NewProductForm';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const isFormOpen = useSelector((st) => st.isFormOpen);
  return (
    <div className={classes.wrapper}>
      {isFormOpen && <NewProductForm />}
      <header className={classes.header}>
        <span className={classes.logo}>your own market</span>
        <nav className={classes.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Cart
          </NavLink>
        </nav>
      </header>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
