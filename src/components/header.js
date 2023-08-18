import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

const Header = () => (
  <div class="nav">
    <section class="nav-main">
      <section class="nav-header nav-main-mobile">
        <Link class="nav-header-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button class="icon-button" type="button">
          <span class="icon-button-icon icon-menu"></span>
        </button>
      </section>
      <nav class="nav-desktop">
        <Link class="nav-desktop-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul class="nav-desktop-links">
          <li>
            <Link class="nav-desktop-link" to="/products/">
              Products
            </Link>
          </li>
          <li>
            <Link class="nav-desktop-link" to="/blog/">
              Blog
            </Link>
          </li>
        </ul>
        <div class="nav-desktop-buttons">
          <a
            href="https://patient.gotthetest.com/"
            class="button button-secondary button-nav-main"
          >
            Login
          </a>
          <a
            href="https://patient.gotthetest.com/sign-up"
            class="button button-primary button-nav-main"
          >
            Sign up free
          </a>
        </div>
      </nav>
    </section>
    <div class="nav-mobile">
      <header class="nav-header">
        <Link class="nav-header-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button class="icon-button" type="button">
          <span class="icon-button-icon icon-cross"></span>
        </button>
      </header>
      <section class="nav-mobile-body">
        <a
          href="https://patient.gotthetest.com/sign-up"
          class="button button-primary button-mobile-menu"
        >
          Sign up free
        </a>
        <a
          href="https://patient.gotthetest.com/"
          class="button button-secondary button-mobile-menu"
        >
          Login
        </a>
        <ul class="nav-mobile-body-links">
          <li class="nav-link-mobile-menu">
            <Link class="nav-link" to="/products">
              <span class="nav-link-text">Products</span>
              <span class="icon-chevron-right nav-link-icon"></span>
            </Link>
          </li>
          <li class="nav-link-mobile-menu">
            <Link class="nav-link" to="/blog/">
              <span class="nav-link-text">Blog</span>
              <span class="icon-external-link nav-link-icon"></span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
    <div class="nav-mobile-overlay"></div>
    <div class="nav-shadow"></div>
  </div>
)

export default Header
