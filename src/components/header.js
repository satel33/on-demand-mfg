import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

const Header = () => (
  <header className="nav">
    <section className="nav-main">
      <div className="nav-header nav-main-mobile">
        <Link className="nav-header-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button className="icon-button" type="button">
          <span className="icon-button-icon icon-menu"></span>
        </button>
      </div>
      <nav className="nav-desktop">
        <Link className="nav-desktop-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="nav-desktop-links">
          <li>
            <Link className="nav-desktop-link" to="/blog/">
              Blog
            </Link>
          </li>
        </ul>
        <div className="nav-desktop-buttons">
          <a
            href="https://patient.gotthetest.com/"
            className="button button-secondary button-nav-main"
          >
            Login
          </a>
          <a
            href="https://patient.gotthetest.com/sign-up"
            className="button button-primary button-nav-main"
          >
            Sign up free
          </a>
        </div>
      </nav>
    </section>
    <div className="nav-mobile">
      <header className="nav-header">
        <Link className="nav-header-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button className="icon-button" type="button">
          <span className="icon-button-icon icon-cross"></span>
        </button>
      </header>
      <section className="nav-mobile-body">
        <a
          href="https://patient.gotthetest.com/sign-up"
          className="button button-primary button-mobile-menu"
        >
          Sign up free
        </a>
        <a
          href="https://patient.gotthetest.com/"
          className="button button-secondary button-mobile-menu"
        >
          Login
        </a>
        <ul className="nav-mobile-body-links">
          <li className="nav-link-mobile-menu">
            <Link className="nav-link" to="/blog/">
              <span className="nav-link-text">Blog</span>
              <span className="icon-external-link nav-link-icon"></span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
    <div className="nav-mobile-overlay"></div>
    <div className="nav-shadow"></div>
  </header>
)

export default Header
