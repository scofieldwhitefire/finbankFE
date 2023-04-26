import { useEffect } from "react";
import { useState } from "react";
import { Images } from "../assets/img/image";
import { Logo } from "../assets/img/logo";
import Loading from "../components/Loading";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const js = [
  { path: "js", file: "jquery.mina7a0.js" },
  { path: "js", file: "jquery-migrate.mind617.js" },
  { path: "plugins/contact-form-7/includes/js", file: "index42f0.js" },
  { path: "js", file: "core.min3f14.js" },
  {
    path: "themes/finbank/assets/vendors/bootstrap/js",
    file: "bootstrap.bundle.min431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/bxslider",
    file: "jquery.bxslider.min431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/circleType",
    file: "jquery.circleType431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/circleType",
    file: "jquery.lettering.min431f.js",
  },
  { path: "themes/finbank/assets/vendors/isotope", file: "isotope431f.js" },
  {
    path: "themes/finbank/assets/vendors/jquery-appear",
    file: "jquery.appear.min431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/jquery-magnific-popup",
    file: "jquery.magnific-popup.min431f.js",
  },
  { path: "themes/finbank/assets/vendors/jquery-ui", file: "jquery-ui431f.js" },
  {
    path: "themes/finbank/assets/vendors/nice-select",
    file: "jquery.nice-select.min431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/odometer",
    file: "odometer.min431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/owl-carousel",
    file: "owl.carousel.min431f.js",
  },
  { path: "themes/finbank/assets/vendors/swiper", file: "swiper.min431f.js" },
  { path: "themes/finbank/assets/vendors/vegas", file: "vegas.min431f.js" },
  { path: "themes/finbank/assets/vendors/wnumb", file: "wNumb.min431f.js" },
  { path: "themes/finbank/assets/vendors/wow", file: "wow431f.js" },
  {
    path: "themes/finbank/assets/vendors/extra-scripts",
    file: "jquery.paroller.min431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/language-switcher",
    file: "jquery.polyglot.language.switcher431f.js",
  },
  { path: "themes/finbank/assets/vendors/aos", file: "aos431f.js" },
  {
    path: "themes/finbank/assets/vendors/extra-scripts",
    file: "agenav431f.js",
  },
  {
    path: "themes/finbank/assets/vendors/round-progress-bar",
    file: "knob431f.js",
  },
  { path: "themes/finbank/assets/js", file: "custom6a4d.js" },
  { path: "js", file: "comment-reply.min6a4d.js" },
];

const Home = () => {
  const [load, setLoad] = useState(!0);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      setLoad(!1);
    }, 1500);
  });

  const [ch, setCh] = useState(!0);

  const AddScript = (x, y) => {
    if (!document.querySelector(`[src="/assets/${x}/${y}"]`)) {
      const script = document.createElement("script");
      script.src = `/assets/${x}/${y}`;
      script.async = !1;
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    for (let i = 0; i < js.length; i++) {
      AddScript(js[i].path, js[i].file);
    }
  }, [ch]);
  return (
    <>
      {load && <Loading />}

      <Helmet>
        <body className="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-162 menu-layer elementor-default elementor-kit-9 elementor-page elementor-page-162" />
      </Helmet>

      <div className="page-wrapper">
        <header className="main-header main-header-style2">
          {/* <!--Start Main Header Top--> */}
          <div className="main-header-style2__top">
            <div className="auto-container">
              <div className="outer-box">
                {/* <!--Start Main Header Top Left--> */}
                <div className="main-header-style2__top-left">
                  <div className="notification-box">
                    <div className="icon">
                      <span className="icon-notification"></span>
                    </div>
                    <p>
                      {" "}
                      Get upto 4%* on our Savings Account Balances with Finbank.{" "}
                      <a href="#">
                        <span className="icon-right-arrow"></span>
                      </a>
                    </p>
                  </div>
                </div>
                {/* <!--End Main Header Top Left--> */}
                {/* <!--Start Main Header Top Right--> */}
                <div className="main-header-style2__top-right">
                  <div className="header-menu-style1">
                    <ul>
                      <li
                        id="menu-item-462"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-462"
                      >
                        <a
                          title="Careers"
                          href="#"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Careers
                        </a>
                      </li>
                      <li
                        id="menu-item-463"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-463"
                      >
                        <a
                          title="Faq’s"
                          href="#"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Faq’s
                        </a>
                      </li>
                      <li
                        id="menu-item-461"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-461"
                      >
                        <a
                          title="Business"
                          href="#"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Business
                        </a>
                      </li>
                      <li
                        id="menu-item-464"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-464"
                      >
                        <a
                          title="Rewards"
                          href="#"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="box-search-style1">
                    <a href="#" className="search-toggler">
                      <span className="icon-search"></span> Search{" "}
                    </a>
                  </div>
                </div>
                {/* <!--End Main Header Top Right--> */}
              </div>
            </div>
          </div>
          {/* <!--End Main Header Top--> */}
          <nav className="main-menu main-menu-style2">
            <div className="main-menu__wrapper clearfix">
              <div className="container">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu-style2-left">
                    <div className="logo-box-style2">
                      <Link href="/" title="Finbank">
                        <img src={Logo.logo2} alt="logo" />
                      </Link>
                    </div>
                    <div className="looking-banking-box looking-banking-box--style2">
                      <div className="icon">
                        <span className="icon-map"></span>
                      </div>
                      <div className="select-box clearfix">
                        <p>Address</p> 12 Red Rose, LA 90010
                      </div>
                    </div>
                  </div>
                  <div className="main-menu-style2-right">
                    <div className="main-menu-box">
                      <a href="#" className="mobile-nav__toggler">
                        <i className="icon-menu"></i>
                      </a>
                      <ul className="main-menu__list">
                        <li
                          id="menu-item-376"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-376 dropdown"
                        >
                          <a
                            title="Banks"
                            href="#"
                            data-toggle="dropdown1"
                            className="hvr-underline-from-left1"
                            aria-expanded="false"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Banks
                          </a>
                          <ul role="menu" className="submenu">
                            <li
                              id="menu-item-377"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-377 dropdown"
                            >
                              <a title="Checking Accounts" href="#">
                                Checking Accounts
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-438"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-438"
                                >
                                  <a title="Free Checking" href="#">
                                    Free Checking
                                  </a>
                                </li>
                                <li
                                  id="menu-item-437"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-437"
                                >
                                  <a title="HSA Checking" href="#">
                                    HSA Checking
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-378"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-378 dropdown"
                            >
                              <a title="Savings Accounts" href="#">
                                Savings Accounts
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-460"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-460"
                                >
                                  <a title="Primary Savings" href="#">
                                    Primary Savings
                                  </a>
                                </li>
                                <li
                                  id="menu-item-459"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-459"
                                >
                                  <a title="Advantage Savings" href="#">
                                    Advantage Savings
                                  </a>
                                </li>
                                <li
                                  id="menu-item-458"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-458"
                                >
                                  <a title="Money Market Savings" href="#">
                                    Money Market Savings
                                  </a>
                                </li>
                                <li
                                  id="menu-item-457"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-457"
                                >
                                  <a title="Member Described Savings" href="#">
                                    Member Described Savings
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-379"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 dropdown"
                            >
                              <a title="Retirement Accounts" href="#">
                                Retirement Accounts
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-406"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"
                                >
                                  <a title="Certificate IRA" href="#">
                                    Certificate IRA
                                  </a>
                                </li>
                                <li
                                  id="menu-item-408"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"
                                >
                                  <a title="Money Market IRA" href="#">
                                    Money Market IRA
                                  </a>
                                </li>
                                <li
                                  id="menu-item-409"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-409"
                                >
                                  <a title="Savings IRA" href="#">
                                    Savings IRA
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-379"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 dropdown"
                            >
                              <a title="Specialty Accounts" href="#">
                                Specialty Accounts
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-406"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"
                                >
                                  <a
                                    title="Coverdell Education Savings"
                                    href="#"
                                  >
                                    Coverdell Education Savings
                                  </a>
                                </li>
                                <li
                                  id="menu-item-408"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"
                                >
                                  <a title="Fiduciary Accounts" href="#">
                                    Fiduciary Accounts
                                  </a>
                                </li>
                                <li
                                  id="menu-item-409"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-409"
                                >
                                  <a title="Totten Accounts" href="#">
                                    Totten Accounts
                                  </a>
                                </li>
                                <li
                                  id="menu-item-402"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"
                                >
                                  <a title="Trust Accounts" href="#">
                                    Trust Accounts
                                  </a>
                                </li>
                                <li
                                  id="menu-item-404"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"
                                >
                                  <a title="UTMA Custodial Accounts" href="#">
                                    UTMA Custodial Accounts
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-379"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 dropdown"
                            >
                              <a title="Business Services" href="#">
                                Business Services
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-406"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"
                                >
                                  <a title="Free Business Checking" href="#">
                                    Free Business Checking
                                  </a>
                                </li>
                                <li
                                  id="menu-item-408"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"
                                >
                                  <a title="Business Savings" href="#">
                                    Business Savings
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-376"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-376 dropdown"
                        >
                          <a
                            title="Loans"
                            href="#"
                            data-toggle="dropdown1"
                            className="hvr-underline-from-left1"
                            aria-expanded="false"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Loans
                          </a>
                          <ul role="menu" className="submenu">
                            <li
                              id="menu-item-377"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-377 dropdown"
                            >
                              <a title="Vehicle Loans" href="#">
                                Vehicle Loans
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-438"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-438"
                                >
                                  <a title="Auto Loans" href="#">
                                    Auto Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-437"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-437"
                                >
                                  <a title="Auto Refinance Loans" href="#">
                                    Auto Refinance Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-436"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-436"
                                >
                                  <a title="Antique Auto Loans" href="#">
                                    Antique Auto Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-435"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-435"
                                >
                                  <a title="Motorcycle Loans" href="#">
                                    Motorcycle Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-434"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-434"
                                >
                                  <a
                                    title="Recreational Vehicle Loans"
                                    href="#"
                                  >
                                    Recreational Vehicle Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-433"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-433"
                                >
                                  <a title="Boat Loans" href="#">
                                    Boat Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-432"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-432"
                                >
                                  <a title="Mobility Vehicle Loans" href="#">
                                    Mobility Vehicle Loans
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-378"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-378 dropdown"
                            >
                              <a title="Mortgages" href="#">
                                Mortgages
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-460"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-460"
                                >
                                  <a title="Home Mortgage Loans" href="#">
                                    Home Mortgage Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-459"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-459"
                                >
                                  <a title="Refinance Your Mortgage" href="#">
                                    Refinance Your Mortgage
                                  </a>
                                </li>
                                <li
                                  id="menu-item-458"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-458"
                                >
                                  <a title="Home Equity Loans" href="#">
                                    Home Equity Loans
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-379"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 dropdown"
                            >
                              <a title="Personal Loans" href="#">
                                Personal Loans
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-406"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"
                                >
                                  <a title="Personal Loans" href="#">
                                    Personal Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-408"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"
                                >
                                  <a title="Credit Builder Loans" href="#">
                                    Credit Builder Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-409"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-409"
                                >
                                  <a title="Saving Secured Loans" href="#">
                                    Saving Secured Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-402"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"
                                >
                                  <a title="Quick Loans" href="#">
                                    Quick Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-404"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"
                                >
                                  <a title="Energy Efficiency Loans" href="#">
                                    Energy Efficiency Loans
                                  </a>
                                </li>
                                <li
                                  id="menu-item-404"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"
                                >
                                  <a title="Access Loans" href="#">
                                    Access Loans
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-376"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-376 dropdown"
                        >
                          <a
                            title="Services"
                            href="#"
                            data-toggle="dropdown1"
                            className="hvr-underline-from-left1"
                            aria-expanded="false"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Services
                          </a>
                          <ul role="menu" className="submenu">
                            <li
                              id="menu-item-377"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-377 dropdown"
                            >
                              <a title="Fee Free Services" href="#">
                                Fee Free Services
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-438"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-438"
                                >
                                  <a title="All Accounts" href="#">
                                    All Accounts
                                  </a>
                                </li>
                                <li
                                  id="menu-item-437"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-437"
                                >
                                  <a title="Monthly FICO® Score" href="#">
                                    Monthly FICO® Score
                                  </a>
                                </li>
                                <li
                                  id="menu-item-436"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-436"
                                >
                                  <a
                                    title="Text Alerts & Notification"
                                    href="#"
                                  >
                                    Text Alerts & Notification
                                  </a>
                                </li>
                                <li
                                  id="menu-item-435"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-435"
                                >
                                  <a title="eStatements" href="#">
                                    eStatements
                                  </a>
                                </li>
                                <li
                                  id="menu-item-434"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-434"
                                >
                                  <a title="Notary Service" href="#">
                                    Notary Service
                                  </a>
                                </li>
                                <li
                                  id="menu-item-433"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-433"
                                >
                                  <a title="Signature Guarantee" href="#">
                                    Signature Guarantee
                                  </a>
                                </li>
                                <li
                                  id="menu-item-433"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-433"
                                >
                                  <a title="Deposit Verification" href="#">
                                    Deposit Verification
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-378"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-378 dropdown"
                            >
                              <a title="Premium Services" href="#">
                                Premium Services
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-460"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-460"
                                >
                                  <a title="Visa® Gift Cards" href="#">
                                    Visa® Gift Cards
                                  </a>
                                </li>
                                <li
                                  id="menu-item-459"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-459"
                                >
                                  <a title="Skip-A-Payment Program" href="#">
                                    Skip-A-Payment Program
                                  </a>
                                </li>
                                <li
                                  id="menu-item-458"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-458"
                                >
                                  <a title="GAP Advantage Insurance" href="#">
                                    GAP Advantage Insurance
                                  </a>
                                </li>
                                <li
                                  id="menu-item-457"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-457"
                                >
                                  <a
                                    title="Mechanical Breakdown Insurance"
                                    href="#"
                                  >
                                    Mechanical Breakdown Insurance
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-379"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-379 dropdown"
                            >
                              <a title="Additional Services" href="#">
                                Additional Services
                              </a>
                              <ul role="menu" className="submenu">
                                <li
                                  id="menu-item-406"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"
                                >
                                  <a title="Financial Relief Programs" href="#">
                                    Financial Relief Programs
                                  </a>
                                </li>
                                <li
                                  id="menu-item-408"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"
                                >
                                  <a title="Identity Theft Hotline" href="#">
                                    Identity Theft Hotline
                                  </a>
                                </li>
                                <li
                                  id="menu-item-409"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-409"
                                >
                                  <a title="CUDL Auto Buying Program" href="#">
                                    CUDL Auto Buying Program
                                  </a>
                                </li>
                                <li
                                  id="menu-item-402"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"
                                >
                                  <a
                                    title="Payment Protection Insurance"
                                    href="#"
                                  >
                                    Payment Protection Insurance
                                  </a>
                                </li>
                                <li
                                  id="menu-item-404"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"
                                >
                                  <a title="Tax Refund Direct Deposit" href="#">
                                    Tax Refund Direct Deposit
                                  </a>
                                </li>
                                <li
                                  id="menu-item-404"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"
                                >
                                  <a title="Online Balance Transfers" href="#">
                                    Online Balance Transfers
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-403"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-403"
                        >
                          <a
                            title="Offers"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Offers
                          </a>
                        </li>
                        <li
                          id="menu-item-403"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-403"
                        >
                          <a
                            title="Get In Touch"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Get In Touch
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-btn-one">
                      <a href="#">Make Payment</a>
                    </div>
                    <div className="header-logon-box">
                      <div className="icon">
                        <span className="icon-home-button"></span>
                      </div>
                      {!isAuthenticated ? (
                        <div className="select-box style-two">
                          <Link to="/login"> Login </Link>
                        </div>
                      ) : (
                        <div className="select-box style-two">
                          <Link to="/account"> Dashboard </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="stricky-header stricky-header--style2 stricked-menu main-menu">
          <div className="sticky-header__content"></div>
          {/* <!-- /.sticky-header__content --> */}
        </div>
        {/* <!-- /.stricky-header --> */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler"></div>
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="fas fa-plus"></i>
            </span>
            <div className="logo-box">
              <Link href="/" title="Finbank">
                <img src={Logo.logo1} alt="logo" />
              </Link>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:info@finbanckcu.com">info@finbanckcu.com</a>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:+1(213) 290 1904">+1(213) 290 1904</a>
              </li>
            </ul>
            <div className="mobile-nav__social">
              <a
                href="https://www.facebook.com/"
                className="fab fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram"
              ></a>
              <a
                href="https://www.pinterest.com/"
                className="fab fa-pinterest"
              ></a>
              <a href="https://www.twitter.com/" className="fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler"></div>
          <div className="search-popup__content">
            <form action="http://fastwpdemo.com/newwp/finbank/">
              <label htmlFor="search" className="sr-only">
                search here
              </label>
              <input
                type="text"
                id="search"
                name="s"
                placeholder="Search Here..."
              />
              <button
                type="submit"
                aria-label="search submit"
                className="thm-btn"
              >
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="162"
          className="elementor elementor-162"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-25aab20 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="25aab20"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1f2d5ec"
                data-id="1f2d5ec"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-851c139 elementor-widget elementor-widget-finbank_banner_v2"
                    data-id="851c139"
                    data-element_type="widget"
                    data-widget_type="finbank_banner_v2.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Main Slider Start--> */}
                      <section
                        className="main-slider main-slider-style2"
                        id="home"
                      >
                        <div
                          className="swiper-container thm-swiper__slider"
                          data-swiper-options='{"slidesPerView": 1, "loop": true,
                        "effect": "fade",
                        "pagination": {
                        "el": "#main-slider-pagination",
                        "type": "bullets",
                        "clickable": true
                        },
                        "navigation": {
                        "nextEl": "#main-slider__swiper-button-next",
                        "prevEl": "#main-slider__swiper-button-prev"
                        },
                        "autoplay": {
                        "delay": 5000
                        }}'
                        >
                          <div className="swiper-wrapper">
                            {/* <!--Start Single Swiper Slide--> */}
                            <div className="swiper-slide">
                              <div className="content-layer">
                                <div className="main-slider-content">
                                  <div className="main-slider-content__inner">
                                    <div className="big-title">
                                      <h2>
                                        Providing <br /> the best future <br />{" "}
                                        for your best <br /> living.{" "}
                                      </h2>
                                    </div>
                                    <div className="text">
                                      <p>
                                        Don’t just make a deposit, make an
                                        investment today.
                                      </p>
                                    </div>
                                    <div className="btns-box">
                                      <a className="btn-one" href="#">
                                        <span className="txt">Read More</span>
                                      </a>
                                      <a className="btn-one style2" href="#">
                                        <span className="txt">
                                          Check Eligibility
                                        </span>
                                      </a>
                                    </div>
                                    <div className="bottom-text">
                                      <p>
                                        <span>*</span> In a free hour, when our
                                        power.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="image-layer"
                                style={{
                                  backgroundImage: `url(${Images.slidev2})`,
                                }}
                              >
                                {/* <!--Start Slide Single Features--> */}
                                <div className="slide-single-features one">
                                  <span className="icon-accept"></span>
                                  <h3>From 6.65% p.a</h3>
                                </div>
                                {/* <!--End Slide Single Features--> */}
                                {/* <!--Start Slide Single Features--> */}
                                <div className="slide-single-features two">
                                  <span className="icon-accept"></span>
                                  <h3>High Repayment Tenure </h3>
                                </div>
                                {/* <!--End Slide Single Features--> */}
                              </div>
                            </div>
                            {/* <!--End Single Swiper Slide--> */}
                            {/* <!--Start Single Swiper Slide--> */}
                            <div className="swiper-slide">
                              <div className="content-layer">
                                <div className="main-slider-content">
                                  <div className="main-slider-content__inner">
                                    <div className="big-title">
                                      <h2>
                                        Prestige bank <br /> makes access to{" "}
                                        <br /> savings fast &amp; <br /> simple.{" "}
                                      </h2>
                                    </div>
                                    <div className="text">
                                      <p>
                                        We help businesses and customers achieve
                                        more.
                                      </p>
                                    </div>
                                    <div className="btns-box">
                                      <a className="btn-one" href="#">
                                        <span className="txt">Read More</span>
                                      </a>
                                      <a className="btn-one style2" href="#">
                                        <span className="txt">
                                          Check Eligibility
                                        </span>
                                      </a>
                                    </div>
                                    <div className="bottom-text">
                                      <p>
                                        <span>*</span> In a free hour, when our
                                        power.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="image-layer"
                                style={{
                                  backgroundImage: `url(${Images.slidev2_2})`,
                                }}
                              >
                                {/* <!--Start Slide Single Features--> */}
                                <div className="slide-single-features one">
                                  <span className="icon-accept"></span>
                                  <h3>6.5k Personal Account</h3>
                                </div>
                                {/* <!--End Slide Single Features--> */}
                                {/* <!--Start Slide Single Features--> */}
                                <div className="slide-single-features two">
                                  <span className="icon-accept"></span>
                                  <h3>14.2k Corporate Account </h3>
                                </div>
                                {/* <!--End Slide Single Features--> */}
                              </div>
                            </div>
                            {/* <!--End Single Swiper Slide--> */}
                            {/* <!--Start Single Swiper Slide--> */}
                            <div className="swiper-slide">
                              <div className="content-layer">
                                <div className="main-slider-content">
                                  <div className="main-slider-content__inner">
                                    <div className="big-title">
                                      <h2>
                                        Bank with <br /> the happiest <br />{" "}
                                        employees in the <br /> country.{" "}
                                      </h2>
                                    </div>
                                    <div className="text">
                                      <p>
                                        We help businesses and customers achieve
                                        more.
                                      </p>
                                    </div>
                                    <div className="btns-box">
                                      <a className="btn-one" href="#">
                                        <span className="txt">Read More</span>
                                      </a>
                                      <a className="btn-one style2" href="#">
                                        <span className="txt">
                                          Check Eligibility
                                        </span>
                                      </a>
                                    </div>
                                    <div className="bottom-text">
                                      <p>
                                        <span>*</span> In a free hour, when our
                                        power.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="image-layer"
                                style={{
                                  backgroundImage: `url(${Images.slidev2_3})`,
                                }}
                              >
                                {/* <!--Start Slide Single Features--> */}
                                <div className="slide-single-features one">
                                  <span className="icon-accept"></span>
                                  <h3>86 Branches In Country</h3>
                                </div>
                                {/* <!--End Slide Single Features--> */}
                                {/* <!--Start Slide Single Features--> */}
                                <div className="slide-single-features two">
                                  <span className="icon-accept"></span>
                                  <h3>1.6k On Role Employees </h3>
                                </div>
                                {/* <!--End Slide Single Features--> */}
                              </div>
                            </div>
                            {/* <!--End Single Swiper Slide--> */}
                            {/* <!-- If we need navigation buttons --> */}
                            <div className="main-slider__nav main-slider__nav--style2">
                              <div
                                className="swiper-button-prev"
                                id="main-slider__swiper-button-next"
                              >
                                <i className="icon-chevron left"></i>
                              </div>
                              <div
                                className="swiper-button-next"
                                id="main-slider__swiper-button-prev"
                              >
                                <i className="icon-chevron right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--Main Slider End--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f4b7a54 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="f4b7a54"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-65e402c"
                data-id="65e402c"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-8879c50 elementor-widget elementor-widget-finbank_corporate_banking"
                    data-id="8879c50"
                    data-element_type="widget"
                    data-widget_type="finbank_corporate_banking.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Individual Corporate Banking area--> */}
                      <section
                        className="individual-corporate-banking-area"
                        id="services"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="individual-banking">
                                <div
                                  className="individual-banking-bg"
                                  style={{
                                    backgroundImage: `url(${Images.individual})`,
                                  }}
                                ></div>
                                <div className="individual-banking__inner">
                                  <div className="sec-title">
                                    <h2>Banking for Individuals</h2>
                                    <div className="sub-title">
                                      <p>
                                        Offers a wide range of personal banking
                                        services.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="individual-banking__inner-content">
                                    <ul>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v1}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Savings &amp; <br /> CDs{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v1_2}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Online &amp; <br /> Mobile{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v1_3}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Cosumer <br /> Loan{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v1_4}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Invest &amp; <br /> Insure{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v1_5}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Credit &amp; <br /> Debit Cards{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking more-services">
                                          <div className="more-service-box">
                                            <a href="#">
                                              <span className="icon-add"></span>
                                            </a>
                                            <h3>More Service</h3>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="corporate-banking">
                                <div
                                  className="corporate-banking-bg"
                                  style={{
                                    backgroundImage: `url(${Images.corporate})`,
                                  }}
                                ></div>
                                <div className="corporate-banking__inner">
                                  <div className="sec-title">
                                    <h2>Banking for Corporate</h2>
                                    <div className="sub-title">
                                      <p>
                                        High end banking solutions to large
                                        corporate.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="corporate-banking__inner-content">
                                    <ul>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking single-features-of-banking--style2">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v2}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Commercial <br /> C/A{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking single-features-of-banking--style2">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v2_2}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Online &amp; <br /> Mobile{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking single-features-of-banking--style2">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v2_3}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Business <br /> Loan{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking single-features-of-banking--style2">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v2_4}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Invest &amp; <br /> Insure{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking single-features-of-banking--style2">
                                          <div className="icon-holder">
                                            <img
                                              decoding="async"
                                              src={Images.bankingfeatures_v2_5}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <h3>
                                            <a href="#">
                                              Cash <br /> Management{" "}
                                            </a>
                                          </h3>
                                          <div className="btn-box">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                      <li>
                                        {/* <!--Start Single Features Of Banking--> */}
                                        <div className="single-features-of-banking single-features-of-banking--more-services">
                                          <div className="more-service-box">
                                            <a href="#">
                                              <span className="icon-add"></span>
                                            </a>
                                            <h3>More Service</h3>
                                          </div>
                                        </div>
                                        {/* <!--End Single Features Of Banking--> */}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Individual Corporate Banking area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-cab0f9a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="cab0f9a"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-60e90df"
                data-id="60e90df"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-ac57a00 elementor-widget elementor-widget-finbank_emi_calculator"
                    data-id="ac57a00"
                    data-element_type="widget"
                    data-widget_type="finbank_emi_calculator.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start EMI Calculator Area--> */}
                      <section className="emi-calculator-style2-area">
                        <div className="container">
                          <div className="sec-title text-center">
                            <h2>Flexible EMI Calculator Online</h2>
                            <div className="sub-title">
                              <p>
                                Easily calculate your equated monthly instalment
                                online.
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="emi-calculator-tab emi-calculator-tab--style2">
                                <div className="emi-calculator-tab__button">
                                  <div
                                    className="emi-calculator-tab__button--bg"
                                    style={{
                                      backgroundImage: `url(${Images.emicalculator})`,
                                    }}
                                  ></div>
                                  <ul className="tabs-button-box">
                                    <li
                                      data-tab="#home-loan1"
                                      className="tab-btn-item active-btn-item"
                                    >
                                      <div className="icon-box">
                                        <span className="icon- icon-loan-1"></span>
                                        <div className="overlay-text">
                                          <p>Home Loan</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li
                                      data-tab="#home-loan2"
                                      className="tab-btn-item "
                                    >
                                      <div className="icon-box">
                                        <span className="icon- icon-loan-2"></span>
                                        <div className="overlay-text">
                                          <p>Personal Loan</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li
                                      data-tab="#home-loan3"
                                      className="tab-btn-item "
                                    >
                                      <div className="icon-box">
                                        <span className="icon- icon-car-loan"></span>
                                        <div className="overlay-text">
                                          <p>Vehicle Loan</p>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="emi-calculator-tab-content-box-outer">
                                  {/* <!--Start Tabs Content Box--> */}
                                  <div className="tabs-content-box">
                                    {/* <!--Tab--> */}
                                    <div
                                      className="tab-content-box-item tab-content-box-item-active"
                                      id="home-loan1"
                                    >
                                      <div className="emi-calculator-tab-content-box-item">
                                        <div className="range-box">
                                          <div className="row">
                                            <div className="col-lg-12 column">
                                              <div className="price-range-box">
                                                <div className="inner">
                                                  <h4>Loan Amount</h4>
                                                  <div className="price-range-slider"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="property-amount"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="price-range-slider-amount">
                                                    $0
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-12 column">
                                              <div className="loan-term-range-box">
                                                <div className="inner">
                                                  <h4>
                                                    Loan Term{" "}
                                                    <span>(Years)</span>
                                                  </h4>
                                                  <div className="loan-term-range-slider"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="loan-term-range"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="loan-term-range-amount">
                                                    0Yrs
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-12 column">
                                              <div className="interest-rate-range-box">
                                                <div className="inner">
                                                  <h4>Interest Rate</h4>
                                                  <div className="interest-rate-range-slider"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="interest-rate-range"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="interest-rate-range-amount">
                                                    0%
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="emi-calculator-output-box clearfix">
                                          <div className="left-box">
                                            <div className="top">
                                              <div className="icon">
                                                <span className="icon- icon-loan-3"></span>
                                              </div>
                                              <div className="inner-title">
                                                <h3>Your Monthly EMI</h3>
                                                <h2 className="monthlyemi">
                                                  <span>$</span>0
                                                </h2>
                                              </div>
                                            </div>
                                            <div className="btns-box">
                                              <a className="btn-one" href="#">
                                                <span className="txt">
                                                  Apply Online
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="right-box">
                                            <ul>
                                              <li>
                                                <div className="inner">
                                                  <div className="icon">
                                                    <span className="icon-right-arrow"></span>
                                                  </div>
                                                  <div className="text">
                                                    <a href="#">
                                                      Interest Amount
                                                    </a>
                                                    <p className="totalemi">
                                                      $0
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="inner">
                                                  <div className="icon">
                                                    <span className="icon-right-arrow"></span>
                                                  </div>
                                                  <div className="text">
                                                    <a href="#">
                                                      Total Amount Payable
                                                    </a>
                                                    <p className="totalemi">
                                                      $0
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <!--Tab--> */}
                                    <div
                                      className="tab-content-box-item "
                                      id="home-loan2"
                                    >
                                      <div className="emi-calculator-tab-content-box-item">
                                        <div className="range-box">
                                          <div className="row">
                                            <div className="col-lg-12 column">
                                              <div className="price-range-box">
                                                <div className="inner">
                                                  <h4>Loan Amount</h4>
                                                  <div className="price-range-slider price-range-slider2"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="property-amount property-amount2"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="price-range-slider-amount2">
                                                    $0
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-12 column">
                                              <div className="loan-term-range-box">
                                                <div className="inner">
                                                  <h4>
                                                    Loan Term{" "}
                                                    <span>(Years)</span>
                                                  </h4>
                                                  <div className="loan-term-range-slider loan-term-range-slider2"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="loan-term-range loan-term-range2"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="loan-term-range-amount2">
                                                    0Yrs
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-12 column">
                                              <div className="interest-rate-range-box">
                                                <div className="inner">
                                                  <h4>Interest Rate</h4>
                                                  <div className="interest-rate-range-slider interest-rate-range-slider2"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="interest-rate-range interest-rate-range2"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="interest-rate-range-amount2">
                                                    0%
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="emi-calculator-output-box clearfix">
                                          <div className="left-box">
                                            <div className="top">
                                              <div className="icon">
                                                <span className="icon- icon-loan-3"></span>
                                              </div>
                                              <div className="inner-title">
                                                <h3>Your Monthly EMI</h3>
                                                <h2 className="monthlyemi2">
                                                  <span>$</span>0
                                                </h2>
                                              </div>
                                            </div>
                                            <div className="btns-box">
                                              <a className="btn-one" href="#">
                                                <span className="txt">
                                                  Apply Online
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="right-box">
                                            <ul>
                                              <li>
                                                <div className="inner">
                                                  <div className="icon">
                                                    <span className="icon-right-arrow"></span>
                                                  </div>
                                                  <div className="text">
                                                    <a href="#">
                                                      Interest Amount
                                                    </a>
                                                    <p className="totalemi2">
                                                      $0
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="inner">
                                                  <div className="icon">
                                                    <span className="icon-right-arrow"></span>
                                                  </div>
                                                  <div className="text">
                                                    <a href="#">
                                                      Total Amount Payable
                                                    </a>
                                                    <p className="totalemi2">
                                                      $0
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <!--Tab--> */}
                                    <div
                                      className="tab-content-box-item "
                                      id="home-loan3"
                                    >
                                      <div className="emi-calculator-tab-content-box-item">
                                        <div className="range-box">
                                          <div className="row">
                                            <div className="col-lg-12 column">
                                              <div className="price-range-box">
                                                <div className="inner">
                                                  <h4>Loan Amount</h4>
                                                  <div className="price-range-slider price-range-slider3"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="property-amount property-amount3"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="price-range-slider-amount3">
                                                    $0
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-12 column">
                                              <div className="loan-term-range-box">
                                                <div className="inner">
                                                  <h4>
                                                    Loan Term{" "}
                                                    <span>(Years)</span>
                                                  </h4>
                                                  <div className="loan-term-range-slider loan-term-range-slider3"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="loan-term-range loan-term-range3"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="loan-term-range-amount3">
                                                    0Yrs
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-12 column">
                                              <div className="interest-rate-range-box">
                                                <div className="inner">
                                                  <h4>Interest Rate</h4>
                                                  <div className="interest-rate-range-slider interest-rate-range-slider3"></div>
                                                  <div className="range-input">
                                                    <div className="input">
                                                      <input
                                                        type="text"
                                                        className="interest-rate-range interest-rate-range3"
                                                        name="field-name"
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="right-box">
                                                  <h5 className="interest-rate-range-amount3">
                                                    0%
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="emi-calculator-output-box clearfix">
                                          <div className="left-box">
                                            <div className="top">
                                              <div className="icon">
                                                <span className="icon- icon-loan-3"></span>
                                              </div>
                                              <div className="inner-title">
                                                <h3>Your Monthly EMI</h3>
                                                <h2 className="monthlyemi3">
                                                  <span>$</span>0
                                                </h2>
                                              </div>
                                            </div>
                                            <div className="btns-box">
                                              <a className="btn-one" href="#">
                                                <span className="txt">
                                                  Apply Online
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="right-box">
                                            <ul>
                                              <li>
                                                <div className="inner">
                                                  <div className="icon">
                                                    <span className="icon-right-arrow"></span>
                                                  </div>
                                                  <div className="text">
                                                    <a href="#">
                                                      Interest Amount
                                                    </a>
                                                    <p className="totalemi3">
                                                      $0
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="inner">
                                                  <div className="icon">
                                                    <span className="icon-right-arrow"></span>
                                                  </div>
                                                  <div className="text">
                                                    <a href="#">
                                                      Total Amount Payable
                                                    </a>
                                                    <p className="totalemi3">
                                                      $0
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!--End Tabs Content Box--> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End EMI Calculator Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-8c3c463 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="8c3c463"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-625512c"
                data-id="625512c"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-7633986 elementor-widget elementor-widget-finbank_wealth_secure_v2"
                    data-id="7633986"
                    data-element_type="widget"
                    data-widget_type="finbank_wealth_secure_v2.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Wealth Secure Area--> */}
                      <section className="wealth-secure-style2-area">
                        <div className="container">
                          <div className="sec-title">
                            <h2>Grow Your Wealth Secure</h2>
                            <div className="sub-title">
                              <p>
                                Don’t just make a deposit, make an investment
                                today.
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <span className="initx" id="no"></span>
                              <div
                                className="owl-carousel owl-theme thm-owl__carousel wealth-secure-carousel owl-nav-style-one"
                                data-owl-options='{
                                        "loop": true,
                                        "autoplay": true,
                                        "margin": 20,
                                        "nav": true,
                                        "dots": false,
                                        "smartSpeed": 500,
                                        "autoplayTimeout": 10000,
                                        "navText": ["
                                          <span className=`left icon-right-arrow`></span>","
                                          <span className=`right icon-right-arrow`></span>"],
                                        "responsive": {
                                                "0": {
                                                    "items": 1
                                                },
                                                "768": {
                                                    "items": 2
                                                },
                                                "992": {
                                                    "items": 3
                                                },
                                                "1200": {
                                                    "items": 4
                                                }
                                            }
                                        }'
                              >
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        loading="lazy"
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure1}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Trade FX</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      Beguiled and demoralized by charms
                                      pleasure of the ...
                                    </p>
                                    <ul>
                                      <li>Debt Mutual Funds </li>
                                      <li>Money Market Funds </li>
                                      <li>Balanced Funds </li>
                                      <li>Monthly Income Plans</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure2}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Multi Currency a/c</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      Cases are perfectly simple &#038; easy to
                                      distinguish ...
                                    </p>
                                    <ul>
                                      <li>Futures Market </li>
                                      <li>Forward Market </li>
                                      <li>Swap Market </li>
                                      <li>Debt Mutual Funds</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure3}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Mutual Funds</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      The claims off duty or the obligations
                                      business ...
                                    </p>
                                    <ul>
                                      <li>NPS </li>
                                      <li>Public PF </li>
                                      <li>Employee PF </li>
                                      <li>Swap Market</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure4}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Pension Scheme</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      Demoralized and beguiled by charms
                                      pleasure of the ...
                                    </p>
                                    <ul>
                                      <li>10+ Currencies </li>
                                      <li>Transaction Costs </li>
                                      <li>Money Market Funds </li>
                                      <li>Balanced Funds</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure1}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Trades FX</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      Beguiled and demoralized by charms
                                      pleasure of the ...
                                    </p>
                                    <ul>
                                      <li>Debt Mutual Funds </li>
                                      <li>Money Market Funds </li>
                                      <li>Balanced Funds </li>
                                      <li>Monthly Income Plans</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure2}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Multi Curriency a/c</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      Cases are perfectly simple &#038; easy to
                                      distinguish ...
                                    </p>
                                    <ul>
                                      <li>Futures Market </li>
                                      <li>Forward Market </li>
                                      <li>Swap Market </li>
                                      <li>Debt Mutual Funds</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure3}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Mutual Fund</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      The claims off duty or the obligations
                                      business ...
                                    </p>
                                    <ul>
                                      <li>NPS </li>
                                      <li>Public PF </li>
                                      <li>Employee PF </li>
                                      <li>Swap Market</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                                {/* <!--Start Single Wealth Secure Box Style2--> */}
                                <div className="single-wealth-secure-box single-wealth-secure-box--style2">
                                  <div className="img-box">
                                    <div className="img-box-inner">
                                      <img
                                        width="250"
                                        height="270"
                                        src={Images.wealthsecure4}
                                        className="attachment-finbank_250x270 size-finbank_250x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        <a href="#">Pension Schemes</a>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="text-box">
                                    <p>
                                      Demoralized and beguiled by charms
                                      pleasure of the ...
                                    </p>
                                    <ul>
                                      <li>10+ Currencies </li>
                                      <li>Transaction Costs </li>
                                      <li>Money Market Funds </li>
                                      <li>Balanced Funds</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--End Single Wealth Secure Box Style2--> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Wealth Secure Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-c4b6c38 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="c4b6c38"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba1c8ce"
                data-id="ba1c8ce"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-a6fd7e4 elementor-widget elementor-widget-finbank_our_clients"
                    data-id="a6fd7e4"
                    data-element_type="widget"
                    data-widget_type="finbank_our_clients.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Partner Area--> */}
                      <section className="partner-area">
                        <div className="container">
                          <div className="partner-area__sec-title">
                            <h3>Corporate Partnership With</h3>
                          </div>
                          <div className="brand-content">
                            <div
                              className="owl-carousel owl-theme thm-owl__carousel partner-carousel"
                              data-owl-options='{
                                    "loop": false,
                                    "autoplay": true,
                                    "margin": 25,
                                    "nav": false,
                                    "dots": false,
                                    "smartSpeed": 500,
                                    "autoplayTimeout": 10000,
                                    "navText": ["
                                      <span className=`fa fa-angle-left`></span>",
                                      "<span className=`fa fa-angle-right`></span>"],
                                    "responsive": {
                                            "0": {
                                                "items": 1
                                            },
                                            "768": {
                                                "items": 3
                                            },
                                            "992": {
                                                "items": 4
                                            },
                                            "1200": {
                                                "items": 6
                                            }
                                        }
                                    }'
                            >
                              {/* <!--Start Single Partner Logo Box--> */}
                              <div className="single-partner-logo-box">
                                <a href="#">
                                  <img
                                    decoding="async"
                                    src={Images.brand1_1}
                                    alt="Awesome Image"
                                  />
                                </a>
                              </div>
                              {/* <!--End Single Partner Logo Box--> */}
                              {/* <!--Start Single Partner Logo Box--> */}
                              <div className="single-partner-logo-box">
                                <a href="#">
                                  <img
                                    decoding="async"
                                    src={Images.brand1_2}
                                    alt="Awesome Image"
                                  />
                                </a>
                              </div>
                              {/* <!--End Single Partner Logo Box--> */}
                              {/* <!--Start Single Partner Logo Box--> */}
                              <div className="single-partner-logo-box">
                                <a href="#">
                                  <img
                                    decoding="async"
                                    src={Images.brand1_3}
                                    alt="Awesome Image"
                                  />
                                </a>
                              </div>
                              {/* <!--End Single Partner Logo Box--> */}
                              {/* <!--Start Single Partner Logo Box--> */}
                              <div className="single-partner-logo-box">
                                <a href="#">
                                  <img
                                    decoding="async"
                                    src={Images.brand1_4}
                                    alt="Awesome Image"
                                  />
                                </a>
                              </div>
                              {/* <!--End Single Partner Logo Box--> */}
                              {/* <!--Start Single Partner Logo Box--> */}
                              <div className="single-partner-logo-box">
                                <a href="#">
                                  <img
                                    decoding="async"
                                    src={Images.brand1_5}
                                    alt="Awesome Image"
                                  />
                                </a>
                              </div>
                              {/* <!--End Single Partner Logo Box--> */}
                              {/* <!--Start Single Partner Logo Box--> */}
                              <div className="single-partner-logo-box">
                                <a href="#">
                                  <img
                                    decoding="async"
                                    src={Images.brand1_6}
                                    alt="Awesome Image"
                                  />
                                </a>
                              </div>
                              {/* <!--End Single Partner Logo Box--> */}
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Partner Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-98fb3a6 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="98fb3a6"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9e08693"
                data-id="9e08693"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-601e003 elementor-widget elementor-widget-finbank_emergency_service_v2"
                    data-id="601e003"
                    data-element_type="widget"
                    data-widget_type="finbank_emergency_service_v2.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Service Request Area--> */}
                      <section className="service-request-area">
                        <div className="container">
                          <div className="row service-request-area__inner">
                            <div className="col-xl-5 width100">
                              <div className="service-request-content-one">
                                <div
                                  className="service-request-content-one-bg"
                                  style={{
                                    backgroundImage: `url(${Images.servicerequestcontent})`,
                                  }}
                                ></div>
                                <div className="service-request-content-one__title">
                                  <div className="sec-title">
                                    <h2>
                                      Emergency <br /> Service Request{" "}
                                    </h2>
                                    <div className="sub-title">
                                      <p>
                                        List of our banking service &amp; query
                                        requests all in one place.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-7 width100">
                              <div className="service-request-content-two">
                                <div
                                  className="service-request-content-two-bg"
                                  style={{
                                    backgroundImage: `url(${Images.servicerequestconten2})`,
                                  }}
                                ></div>
                                <div className="service-request-content-two__inner">
                                  <ul className="row">
                                    {/* <!--Start Single Service Request Content Box--> */}
                                    <li className="col-xl-4">
                                      <div className="single-service-request-content-box">
                                        <div className="static-content">
                                          <div className="icon">
                                            <img
                                              decoding="async"
                                              src={Images.thmicon1}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <div className="more-btn">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                          <div className="inner-title">
                                            <h3>Credit &amp; Debit Card</h3>
                                            <h4>Service</h4>
                                          </div>
                                        </div>
                                        <div className="overlay-content">
                                          <div className="title">
                                            <h3>Credit &amp; Debit Card</h3>
                                          </div>
                                          <ul>
                                            <li>Block Debit / ATM Card</li>
                                            <li>Generate Debit Card Pin Num</li>
                                            <li>Unlock Debit / ATM Card</li>
                                            <li>
                                              Reissue Lost Debit / ATM Card
                                            </li>
                                            <li>Block Credit Card</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    {/* <!--End Single Service Request Content Box--> */}
                                    {/* <!--Start Single Service Request Content Box--> */}
                                    <li className="col-xl-4">
                                      <div className="single-service-request-content-box">
                                        <div className="static-content">
                                          <div className="icon">
                                            <img
                                              decoding="async"
                                              src={Images.thmicon2}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <div className="more-btn">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                          <div className="inner-title">
                                            <h3>Mobile &amp; Internet</h3>
                                            <h4>Banking</h4>
                                          </div>
                                        </div>
                                        <div className="overlay-content">
                                          <div className="title">
                                            <h3>Mobile &amp; Internet</h3>
                                          </div>
                                          <ul>
                                            <li>Unlock Debit / ATM Card</li>
                                            <li>
                                              Reissue Lost Debit / ATM Card
                                            </li>
                                            <li>Block Credit Card</li>
                                            <li>Block Debit / ATM Card</li>
                                            <li>Generate Debit Card Pin Num</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    {/* <!--End Single Service Request Content Box--> */}
                                    {/* <!--Start Single Service Request Content Box--> */}
                                    <li className="col-xl-4">
                                      <div className="single-service-request-content-box">
                                        <div className="static-content">
                                          <div className="icon">
                                            <img
                                              decoding="async"
                                              src={Images.thmicon3}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <div className="more-btn">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                          <div className="inner-title">
                                            <h3>Account Details</h3>
                                            <h4>Changing</h4>
                                          </div>
                                        </div>
                                        <div className="overlay-content">
                                          <div className="title">
                                            <h3>Account Details</h3>
                                          </div>
                                          <ul>
                                            <li>Unlock Debit / ATM Card</li>
                                            <li>
                                              Reissue Lost Debit / ATM Card
                                            </li>
                                            <li>Block Debit / ATM Card</li>
                                            <li>Generate Debit Card Pin Num</li>
                                            <li>Block Credit Card</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    {/* <!--End Single Service Request Content Box--> */}
                                    {/* <!--Start Single Service Request Content Box--> */}
                                    <li className="col-xl-4">
                                      <div className="single-service-request-content-box">
                                        <div className="static-content">
                                          <div className="icon">
                                            <img
                                              decoding="async"
                                              src={Images.thmicon4}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <div className="more-btn">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                          <div className="inner-title">
                                            <h3>Cheque / DD</h3>
                                            <h4>Service</h4>
                                          </div>
                                        </div>
                                        <div className="overlay-content">
                                          <div className="title">
                                            <h3>Cheque / DD</h3>
                                          </div>
                                          <ul>
                                            <li>Generate Debit Card Pin Num</li>
                                            <li>Block Debit / ATM Card</li>
                                            <li>Unlock Debit / ATM Card</li>
                                            <li>
                                              Reissue Lost Debit / ATM Card
                                            </li>
                                            <li>Block Credit Card</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    {/* <!--End Single Service Request Content Box--> */}
                                    {/* <!--Start Single Service Request Content Box--> */}
                                    <li className="col-xl-4">
                                      <div className="single-service-request-content-box">
                                        <div className="static-content">
                                          <div className="icon">
                                            <img
                                              decoding="async"
                                              src={Images.thmicon5}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <div className="more-btn">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                          <div className="inner-title">
                                            <h3>Online Payments</h3>
                                            <h4>Related</h4>
                                          </div>
                                        </div>
                                        <div className="overlay-content">
                                          <div className="title">
                                            <h3>Online Payments</h3>
                                          </div>
                                          <ul>
                                            <li>
                                              Reissue Lost Debit / ATM Card
                                            </li>
                                            <li>Block Debit / ATM Card</li>
                                            <li>Generate Debit Card Pin Num</li>
                                            <li>Unlock Debit / ATM Card</li>
                                            <li>Block Credit Card</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    {/* <!--End Single Service Request Content Box--> */}
                                    {/* <!--Start Single Service Request Content Box--> */}
                                    <li className="col-xl-4">
                                      <div className="single-service-request-content-box">
                                        <div className="static-content">
                                          <div className="icon">
                                            <img
                                              decoding="async"
                                              src={Images.thmicon6}
                                              alt="Awesome Image"
                                            />
                                          </div>
                                          <div className="more-btn">
                                            <a href="#">
                                              <span className="icon-right-arrow"></span>
                                            </a>
                                          </div>
                                          <div className="inner-title">
                                            <h3>Cyber Security</h3>
                                            <h4>Alerts</h4>
                                          </div>
                                        </div>
                                        <div className="overlay-content">
                                          <div className="title">
                                            <h3>Cyber Security</h3>
                                          </div>
                                          <ul>
                                            <li>Unlock Debit / ATM Card</li>
                                            <li>Block Debit / ATM Card</li>
                                            <li>Generate Debit Card Pin Num</li>
                                            <li>
                                              Reissue Lost Debit / ATM Card
                                            </li>
                                            <li>Block Credit Card</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    {/* <!--End Single Service Request Content Box--> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Service Request Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-9370080 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="9370080"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e79e5a"
                data-id="5e79e5a"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-6d3dd32 elementor-widget elementor-widget-finbank_locker_facility"
                    data-id="6d3dd32"
                    data-element_type="widget"
                    data-widget_type="finbank_locker_facility.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Locker Facility Area--> */}
                      <section className="locker-facility-area">
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="locker-facility-highlights">
                                <div className="single-box ">
                                  <div className="icon">
                                    <span className="icon-checkbox-mark"></span>
                                  </div>
                                  <p>Choose your locker sizes</p>
                                </div>
                                <div className="single-box two">
                                  <div className="icon">
                                    <span className="icon-checkbox-mark"></span>
                                  </div>
                                  <p>Book from anywhere</p>
                                </div>
                                <div className="single-box three">
                                  <div className="icon">
                                    <span className="icon-checkbox-mark"></span>
                                  </div>
                                  <p>Facility of Nomination</p>
                                </div>
                                <div className="img-box">
                                  <div className="inner">
                                    <img
                                      decoding="async"
                                      className="float-bob-y"
                                      src={Images.lockerfacility}
                                      alt="Awesome Image"
                                    />
                                    <div className="icon">
                                      <span className="icon-protection">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                        <span className="path5"></span>
                                        <span className="path6"></span>
                                        <span className="path7"></span>
                                        <span className="path8"></span>
                                        <span className="path9"></span>
                                        <span className="path10"></span>
                                        <span className="path11"></span>
                                        <span className="path12"></span>
                                        <span className="path13"></span>
                                        <span className="path14"></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4">
                              <div className="locker-facility-text-box">
                                <div className="sec-title">
                                  <h2>
                                    Best Locker <br /> Facility For Your <br />{" "}
                                    Valuables{" "}
                                  </h2>
                                </div>
                                <div className="text-box">
                                  <p>
                                    Perfectly simple and easy to distinguish. In
                                    a free hour when our power off choices is
                                    untrammelled best pleasure is to be welcomed
                                    every pleasures to be welcomed every
                                    avoided.
                                  </p>
                                </div>
                                <div className="btns-box">
                                  <a className="btn-one" href="#">
                                    <span className="txt">Online Booking</span>
                                  </a>
                                </div>
                                <div className="faq-question-btn">
                                  <div className="icon">
                                    <span className="icon-faq"></span>
                                  </div>
                                  <p>Have queries? Click below link</p>
                                  <a href="#">
                                    <span className="icon-right-arrow"></span>
                                    faq’s{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Locker Facility Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-bf1c45b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="bf1c45b"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b66eec9"
                data-id="b66eec9"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-60223b8 elementor-widget elementor-widget-finbank_interesting_numbers"
                    data-id="60223b8"
                    data-element_type="widget"
                    data-widget_type="finbank_interesting_numbers.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Facts Area--> */}
                      <section className="facts-area">
                        <div
                          className="facts-area-bg"
                          style={{
                            backgroundImage: `url(${Images.factsareabg})`,
                          }}
                        ></div>
                        <div className="container">
                          <div className="sec-title text-center">
                            <h2>Few Interesting Numbers</h2>
                            <div className="sub-title">
                              <p>Numbers that speak about banking service.</p>
                            </div>
                          </div>
                          <div className="row">
                            {/* <!--Start Single Fact Box--> */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                              <div className="single-fact-box">
                                <div className="icon">
                                  <span className="icon-bank">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                    <span className="path5"></span>
                                    <span className="path6"></span>
                                    <span className="path7"></span>
                                    <span className="path8"></span>
                                    <span className="path9"></span>
                                    <span className="path10"></span>
                                    <span className="path11"></span>
                                    <span className="path12"></span>
                                    <span className="path13"></span>
                                    <span className="path14"></span>
                                    <span className="path15"></span>
                                    <span className="path16"></span>
                                  </span>
                                </div>
                                <div className="text">
                                  <h3>Our Network</h3>
                                  <p>86 Branches around the country</p>
                                </div>
                              </div>
                            </div>
                            {/* <!--End Single Fact Box--> */}
                            {/* <!--Start Single Fact Box--> */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                              <div className="single-fact-box">
                                <div className="icon">
                                  <span className="icon-expert">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </span>
                                </div>
                                <div className="text">
                                  <h3>Customers</h3>
                                  <p>More than 1.5 illion customers</p>
                                </div>
                              </div>
                            </div>
                            {/* <!--End Single Fact Box--> */}
                            {/* <!--Start Single Fact Box--> */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                              <div className="single-fact-box">
                                <div className="icon">
                                  <span className="icon-human">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                    <span className="path5"></span>
                                    <span className="path6"></span>
                                    <span className="path7"></span>
                                    <span className="path8"></span>
                                    <span className="path9"></span>
                                    <span className="path10"></span>
                                    <span className="path11"></span>
                                    <span className="path12"></span>
                                    <span className="path13"></span>
                                    <span className="path14"></span>
                                    <span className="path15"></span>
                                  </span>
                                </div>
                                <div className="text">
                                  <h3>Employee</h3>
                                  <p>1.6k professional employees</p>
                                </div>
                              </div>
                            </div>
                            {/* <!--End Single Fact Box--> */}
                            {/* <!--Start Single Fact Box--> */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                              <div className="single-fact-box">
                                <div className="icon">
                                  <span className="icon-money-bag">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </span>
                                </div>
                                <div className="text">
                                  <h3>Loans Disbursed</h3>
                                  <p>45.6 Cr loans for 258 customers</p>
                                </div>
                              </div>
                            </div>
                            {/* <!--End Single Fact Box--> */}
                          </div>
                        </div>
                      </section>
                      {/* <!--End Facts Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-01d7f79 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="01d7f79"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-96c890e"
                data-id="96c890e"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-7c44539 elementor-widget elementor-widget-finbank_our_feature_v2"
                    data-id="7c44539"
                    data-element_type="widget"
                    data-widget_type="finbank_our_feature_v2.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Features Style4 Area--> */}
                      <section className="features-style4-area">
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-4">
                              <div className="features-style4-title-box">
                                <div className="sec-title">
                                  <h2>
                                    Finbank CU
                                    <br /> Super Savings <br /> a/c in 5 Mins{" "}
                                  </h2>
                                  <div className="sub-title">
                                    <p>
                                      Blinded by desire that they cannot foresee
                                      pain &amp; trouble that are bound.
                                    </p>
                                  </div>
                                </div>
                                <div className="btns-box">
                                  <a className="btn-one" href="#">
                                    <span className="txt">Open an Account</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3">
                              <div className="app-screen">
                                <img
                                  decoding="async"
                                  src={Images.appscreen}
                                  alt="Awesome Image"
                                />
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="account-creation-step">
                                <ul>
                                  <li>
                                    <div className="single-step">
                                      <div className="counting">01</div>
                                      <div className="text-box">
                                        <h3>Submit Documents</h3>
                                        <p>
                                          Perfectly simple &amp; easy to
                                          distinguish of choice is prevents.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="single-step">
                                      <div className="counting">02</div>
                                      <div className="text-box">
                                        <h3>KYC Verification</h3>
                                        <p>
                                          Claims off duty or the obligations it
                                          will pleasures be repudiated.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="single-step">
                                      <div className="counting">03</div>
                                      <div className="text-box">
                                        <h3>Open an a/c &amp; Deposit</h3>
                                        <p>
                                          Demoralized by charms pleasure of the
                                          they cannot and trouble.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Features Style4 Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f318cd5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="f318cd5"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d1ab52a"
                data-id="d1ab52a"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-d00cff9 elementor-widget elementor-widget-finbank_exciting_offers"
                    data-id="d00cff9"
                    data-element_type="widget"
                    data-widget_type="finbank_exciting_offers.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Offers Area--> */}
                      <section className="offers-area">
                        <div className="container">
                          <div className="sec-title text-center">
                            <h2>Exciting Offers For You</h2>
                            <div className="sub-title">
                              <p>
                                Enjoy exclusive deals &amp; offers with our
                                bank.
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-4">
                              {/* <!--Start Single Offer Box--> */}
                              <div className="single-offer-box">
                                <div className="top">
                                  <div className="offer-logo">
                                    <img
                                      decoding="async"
                                      src={Images.offerlogo1}
                                      alt="Awesome Image"
                                    />
                                  </div>
                                  <div className="date-box">
                                    <p>Till: 25th Jun’22</p>
                                  </div>
                                </div>
                                <div className="category">
                                  <h4>Medical</h4>
                                  <div className="border-box"></div>
                                </div>
                                <h3>Get 10% Cashback on Xfinity Restuarant.</h3>
                                <div className="bottom">
                                  <div className="btn-box">
                                    <a href="#">
                                      <span className="icon-right-arrow"></span>
                                      Know More{" "}
                                    </a>
                                  </div>
                                  <div className="share-btn">
                                    <a href="#">
                                      <span className="icon-share"></span>Share{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* <!--End Single Offer Box--> */}
                              {/* <!--Start Single Offer Box--> */}
                              <div className="single-offer-box">
                                <div className="top">
                                  <div className="offer-logo">
                                    <img
                                      decoding="async"
                                      src={Images.offerlogo2}
                                      alt="Awesome Image"
                                    />
                                  </div>
                                  <div className="date-box">
                                    <p>Till: 10th Jul’22</p>
                                  </div>
                                </div>
                                <div className="category">
                                  <h4>Entertainment</h4>
                                  <div className="border-box"></div>
                                </div>
                                <h3>Get 25% Cashback on Brex Restuarant.</h3>
                                <div className="bottom">
                                  <div className="btn-box">
                                    <a href="#">
                                      <span className="icon-right-arrow"></span>
                                      Know More{" "}
                                    </a>
                                  </div>
                                  <div className="share-btn">
                                    <a href="#">
                                      <span className="icon-share"></span>Share{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* <!--End Single Offer Box--> */}
                            </div>
                            <div className="col-xl-4">
                              <div className="subscribe-box-style1">
                                <div className="icon">
                                  <img
                                    decoding="async"
                                    src={Images.subscribe}
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="inner-title">
                                  <h3>Subscribe Us</h3>
                                  <p>Subscribe us &amp; Stay updated.</p>
                                </div>
                                <div className="subscribe-form-style1">
                                  <form
                                    id="mc4wp-form-1"
                                    className="mc4wp-form mc4wp-form-190"
                                    method="post"
                                    data-id="190"
                                    data-name=""
                                  >
                                    <div className="mc4wp-form-fields">
                                      <div className="input-box">
                                        <input
                                          type="email"
                                          name="EMAIL"
                                          placeholder="Email address"
                                          required
                                        />
                                        <div className="inner-icon">
                                          <i className="far fa-envelope-open"></i>
                                        </div>
                                      </div>
                                      <button className="btn-one" type="submit">
                                        <span className="txt">Subscribe</span>
                                      </button>
                                    </div>
                                  </form>
                                  {/* <!-- / Mailchimp for WordPress Plugin --> */}
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4">
                              {/* <!--Start Single Offer Box--> */}
                              <div className="single-offer-box">
                                <div className="top">
                                  <div className="offer-logo">
                                    <img
                                      decoding="async"
                                      src={Images.offerlogo2}
                                      alt="Awesome Image"
                                    />
                                  </div>
                                  <div className="date-box">
                                    <p>Till: 28th Jun’22</p>
                                  </div>
                                </div>
                                <div className="category">
                                  <h4>Dining</h4>
                                  <div className="border-box"></div>
                                </div>
                                <h3>Get 30% Cashback on Sysco Restuarant.</h3>
                                <div className="bottom">
                                  <div className="btn-box">
                                    <a href="#">
                                      <span className="icon-right-arrow"></span>
                                      Know More{" "}
                                    </a>
                                  </div>
                                  <div className="share-btn">
                                    <a href="#">
                                      <span className="icon-share"></span>Share{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* <!--End Single Offer Box--> */}
                              {/* <!--Start Single Offer Box--> */}
                              <div className="single-offer-box">
                                <div className="top">
                                  <div className="offer-logo">
                                    <img
                                      decoding="async"
                                      src={Images.offerlogo1}
                                      alt="Awesome Image"
                                    />
                                  </div>
                                  <div className="date-box">
                                    <p>Till: 10th Jul’22</p>
                                  </div>
                                </div>
                                <div className="category">
                                  <h4>Medical</h4>
                                  <div className="border-box"></div>
                                </div>
                                <h3>Get 18% Cashback on Laren Restuarant.</h3>
                                <div className="bottom">
                                  <div className="btn-box">
                                    <a href="#">
                                      <span className="icon-right-arrow"></span>
                                      Know More{" "}
                                    </a>
                                  </div>
                                  <div className="share-btn">
                                    <a href="#">
                                      <span className="icon-share"></span>Share{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* <!--End Single Offer Box--> */}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="view-all-offer-btn">
                                <a href="#">
                                  <span className="icon-right-arrow"></span>View
                                  All Offers{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Offers Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-8fb8d4f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="8fb8d4f"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9ac5b5f"
                data-id="9ac5b5f"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-863b4d7 elementor-widget elementor-widget-finbank_latest_news"
                    data-id="863b4d7"
                    data-element_type="widget"
                    data-widget_type="finbank_latest_news.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Blog Style1 Area--> */}
                      <section className="blog-style1-area" id="news">
                        <div className="container">
                          <div className="sec-title">
                            <h2>Latest From News Room</h2>
                            <div className="sub-title">
                              <p>
                                Our blog post provides you all the updates &amp;
                                guides.
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div
                                className="owl-carousel owl-theme thm-owl__carousel blog-style1-carousel owl-nav-style-one"
                                data-owl-options='{
                                    "loop": true,
                                    "autoplay": true,
                                    "margin": 30,
                                    "nav": true,
                                    "dots": false,
                                    "smartSpeed": 500,
                                    "autoplayTimeout": 10000,
                                    "navText": ["
                                      <span className=`left icon-right-arrow`></span>","
                                      <span className=`right icon-right-arrow`></span>"],
                                    "responsive": {
                                            "0": {
                                                "items": 1
                                            },
                                            "768": {
                                                "items": 1
                                            },
                                            "992": {
                                                "items": 2
                                            },
                                            "1200": {
                                                "items": 3
                                            }
                                        }
                                    }'
                              >
                                {/* <!--Start Single blog Style1--> */}
                                <div
                                  className="single-blog-style1 wow fadeInUp"
                                  data-wow-delay="00ms"
                                  data-wow-duration="1500ms"
                                >
                                  <div className="img-holder">
                                    <div className="inner">
                                      <img
                                        width="350"
                                        height="270"
                                        src={Images.blogv3_1}
                                        className="attachment-finbank_350x270 size-finbank_350x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                      <div className="overlay-icon">
                                        <a href="#">
                                          <span className="icon-right-arrow"></span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="category-date-box">
                                      <div className="category">
                                        <span className="icon-play-button-1"></span>
                                        <h5>
                                          <a href="#" rel="category tag">
                                            Banking
                                          </a>
                                        </h5>
                                      </div>
                                      <div className="date">
                                        <h5>September 16, 2022</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-holder">
                                    <h3 className="blog-title">
                                      <a href="#">
                                        How Non-US Citizens can Open a Bank
                                        Account
                                      </a>
                                    </h3>
                                    <div className="bottom">
                                      <div className="meta-box">
                                        <ul className="meta-info">
                                          <li>
                                            <span className="icon-clock"></span>
                                            <a href="#">Posted : 6:17 pm</a>
                                          </li>
                                          <li>
                                            <span className="icon-comment"></span>
                                            <a href="2022/09/16/how-non-us-citizens-can-open-a-bank-account/index.html#comments">
                                              0 Comments
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="share-btn">
                                        <a href="#">
                                          <span className="icon-share"></span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--End Single blog Style1--> */}
                                {/* <!--Start Single blog Style1--> */}
                                <div
                                  className="single-blog-style1 wow fadeInUp"
                                  data-wow-delay="00ms"
                                  data-wow-duration="1500ms"
                                >
                                  <div className="img-holder">
                                    <div className="inner">
                                      <img
                                        width="350"
                                        height="270"
                                        src={Images.blogv3_2}
                                        className="attachment-finbank_350x270 size-finbank_350x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                      <div className="overlay-icon">
                                        <a href="#">
                                          <span className="icon-right-arrow"></span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="category-date-box">
                                      <div className="category">
                                        <span className="icon-play-button-1"></span>
                                        <h5>
                                          <a href="#" rel="category tag">
                                            Press Release
                                          </a>
                                        </h5>
                                      </div>
                                      <div className="date">
                                        <h5>September 16, 2022</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-holder">
                                    <h3 className="blog-title">
                                      <a href="#">
                                        Board Approves Capital Raise of Rs. 2000
                                        Crores
                                      </a>
                                    </h3>
                                    <div className="bottom">
                                      <div className="meta-box">
                                        <ul className="meta-info">
                                          <li>
                                            <span className="icon-clock"></span>
                                            <a href="#">Posted : 6:15 pm</a>
                                          </li>
                                          <li>
                                            <span className="icon-comment"></span>
                                            <a href="2022/09/16/board-approves-capital-raise-of-rs-2000-crores/index.html#comments">
                                              0 Comments
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="share-btn">
                                        <a href="#">
                                          <span className="icon-share"></span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--End Single blog Style1--> */}
                                {/* <!--Start Single blog Style1--> */}
                                <div
                                  className="single-blog-style1 wow fadeInUp"
                                  data-wow-delay="00ms"
                                  data-wow-duration="1500ms"
                                >
                                  <div className="img-holder">
                                    <div className="inner">
                                      <img
                                        width="350"
                                        height="270"
                                        src={Images.blogv3_3}
                                        className="attachment-finbank_350x270 size-finbank_350x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                      <div className="overlay-icon">
                                        <a href="#">
                                          <span className="icon-right-arrow"></span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="category-date-box">
                                      <div className="category">
                                        <span className="icon-play-button-1"></span>
                                        <h5>
                                          <a href="#" rel="category tag">
                                            Finance
                                          </a>
                                        </h5>
                                      </div>
                                      <div className="date">
                                        <h5>September 16, 2022</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-holder">
                                    <h3 className="blog-title">
                                      <a href="#">
                                        The National Avg Interest Rate for
                                        Savings Accounts
                                      </a>
                                    </h3>
                                    <div className="bottom">
                                      <div className="meta-box">
                                        <ul className="meta-info">
                                          <li>
                                            <span className="icon-clock"></span>
                                            <a href="#">Posted : 6:13 pm</a>
                                          </li>
                                          <li>
                                            <span className="icon-comment"></span>
                                            <a href="2022/09/16/the-national-avg-interest-rate-for-savings-accounts/index.html#comments">
                                              3 Comments
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="share-btn">
                                        <a href="#">
                                          <span className="icon-share"></span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--End Single blog Style1--> */}
                                {/* <!--Start Single blog Style1--> */}
                                <div
                                  className="single-blog-style1 wow fadeInUp"
                                  data-wow-delay="00ms"
                                  data-wow-duration="1500ms"
                                >
                                  <div className="img-holder">
                                    <div className="inner">
                                      <img
                                        width="350"
                                        height="270"
                                        src={Images.blogv3_4}
                                        className="attachment-finbank_350x270 size-finbank_350x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                      <div className="overlay-icon">
                                        <a href="#">
                                          <span className="icon-right-arrow"></span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="category-date-box">
                                      <div className="category">
                                        <span className="icon-play-button-1"></span>
                                        <h5>
                                          <a href="#" rel="category tag">
                                            Banking
                                          </a>
                                        </h5>
                                      </div>
                                      <div className="date">
                                        <h5>September 16, 2022</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-holder">
                                    <h3 className="blog-title">
                                      <a href="#">
                                        Non-US Citizens can Open a Bank Account
                                      </a>
                                    </h3>
                                    <div className="bottom">
                                      <div className="meta-box">
                                        <ul className="meta-info">
                                          <li>
                                            <span className="icon-clock"></span>
                                            <a href="#">Posted : 6:11 pm</a>
                                          </li>
                                          <li>
                                            <span className="icon-comment"></span>
                                            <a href="2022/09/16/non-us-citizens-can-open-a-bank-account/index.html#comments">
                                              0 Comments
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="share-btn">
                                        <a href="#">
                                          <span className="icon-share"></span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--End Single blog Style1--> */}
                                {/* <!--Start Single blog Style1--> */}
                                <div
                                  className="single-blog-style1 wow fadeInUp"
                                  data-wow-delay="00ms"
                                  data-wow-duration="1500ms"
                                >
                                  <div className="img-holder">
                                    <div className="inner">
                                      <img
                                        width="350"
                                        height="270"
                                        src={Images.blogv3_5}
                                        className="attachment-finbank_350x270 size-finbank_350x270 wp-post-image"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                      />
                                      <div className="overlay-icon">
                                        <a href="#">
                                          <span className="icon-right-arrow"></span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="category-date-box">
                                      <div className="category">
                                        <span className="icon-play-button-1"></span>
                                        <h5>
                                          <a href="#" rel="category tag">
                                            Press Release
                                          </a>
                                        </h5>
                                      </div>
                                      <div className="date">
                                        <h5>September 16, 2022</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-holder">
                                    <h3 className="blog-title">
                                      <a href="#">
                                        Small Steps to Build Your Better Future
                                      </a>
                                    </h3>
                                    <div className="bottom">
                                      <div className="meta-box">
                                        <ul className="meta-info">
                                          <li>
                                            <span className="icon-clock"></span>
                                            <a href="#">Posted : 6:06 pm</a>
                                          </li>
                                          <li>
                                            <span className="icon-comment"></span>
                                            <a href="2022/09/16/small-steps-to-build-your-better-future/index.html#comments">
                                              0 Comments
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="share-btn">
                                        <a href="#">
                                          <span className="icon-share"></span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--End Single blog Style1--> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Blog Style1 Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-605d79e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="605d79e"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-798365e"
                data-id="798365e"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-98a7037 elementor-widget elementor-widget-finbank_awards_and_achivements"
                    data-id="98a7037"
                    data-element_type="widget"
                    data-widget_type="finbank_awards_and_achivements.default"
                  >
                    <div className="elementor-widget-container">
                      {/* <!--Start Awards Achivements Area--> */}
                      <section className="awards-achivements-area">
                        <div className="container">
                          <div className="sec-title text-center">
                            <h2>Awards &amp; Major Achievements</h2>
                            <div className="sub-title">
                              <p>Outstanding performance and achievements.</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-4">
                              <div className="awards-achivements-left-box">
                                {/* <!--Start single awards achivements box --> */}
                                <div className="single-awards-achivements-box">
                                  <div className="top">
                                    <div className="icon">
                                      <img
                                        decoding="async"
                                        src={Images.award1}
                                        alt="Awesome Image"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        Bank of the Year <br /> Europe{" "}
                                      </h3>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <span>Year</span>
                                      <b>:</b> 2020-2021
                                    </li>
                                    <li>
                                      <span>Award by</span>
                                      <b>:</b> Los Vegas Business Time
                                    </li>
                                  </ul>
                                </div>
                                {/* <!--End single awards achivements box --> */}
                                {/* <!--Start single awards achivements box --> */}
                                <div className="single-awards-achivements-box">
                                  <div className="top">
                                    <div className="icon">
                                      <img
                                        decoding="async"
                                        src={Images.award1}
                                        alt="Awesome Image"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        Best Private Bank <br /> Award{" "}
                                      </h3>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <span>Year</span>
                                      <b>:</b> 2017-2018
                                    </li>
                                    <li>
                                      <span>Award by</span>
                                      <b>:</b> Los Vegas Business Time
                                    </li>
                                  </ul>
                                </div>
                                {/* <!--End single awards achivements box --> */}
                              </div>
                            </div>
                            <div className="col-xl-4">
                              <div className="awards-img-box">
                                <div className="round-box"></div>
                                <div className="shape1">
                                  <img
                                    decoding="async"
                                    src={Images.trophyshape1}
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="shape2">
                                  <img
                                    decoding="async"
                                    src={Images.trophyshape2}
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="inner">
                                  <img
                                    decoding="async"
                                    src={Images.trophy}
                                    alt="Awesome Image"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4">
                              <div className="awards-achivements-right-box">
                                {/* <!--Start single awards achivements box --> */}
                                <div className="single-awards-achivements-box">
                                  <div className="top">
                                    <div className="icon">
                                      <img
                                        decoding="async"
                                        src={Images.award1}
                                        alt="Awesome Image"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        Bank of the Year <br /> Europe{" "}
                                      </h3>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <span>Year</span>
                                      <b>:</b> 2018-2019
                                    </li>
                                    <li>
                                      <span>Award by</span>
                                      <b>:</b> Los Vegas Business Time
                                    </li>
                                  </ul>
                                </div>
                                {/* <!--End single awards achivements box --> */}
                                {/* <!--Start single awards achivements box --> */}
                                <div className="single-awards-achivements-box">
                                  <div className="top">
                                    <div className="icon">
                                      <img
                                        decoding="async"
                                        src={Images.award1}
                                        alt="Awesome Image"
                                      />
                                    </div>
                                    <div className="inner-title">
                                      <h3>
                                        Best Commercial <br /> Bank Award{" "}
                                      </h3>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <span>Year</span>
                                      <b>:</b> 2014-2015
                                    </li>
                                    <li>
                                      <span>Award by</span>
                                      <b>:</b> Los Vegas Business Time
                                    </li>
                                  </ul>
                                </div>
                                {/* <!--End single awards achivements box --> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* <!--End Awards Achivements Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="clearfix"></div>
        {/* <!--Start footer area --> */}
        <footer className="footer-area footer-area--style2">
          {/* <!--Start Footer Top--> */}
          <div className="footer-top-style2">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="footer-top-style2__left-content">
                    {/* <!--Start Our Company Info--> */}
                    <div className="our-company-info">
                      <div className="footer-logo-style1">
                        <Link href="/">
                          <img src={Logo.footerLogo1} alt="Footer Logo" />
                        </Link>
                      </div>
                      <div className="bottom-text2">
                        <p>
                          ABA Routing Number: <b>210331225</b> <br />
                          NMLS# 468814
                        </p>
                        <div className="btn-box">
                          <a href="#">
                            <span className="icon-right-arrow"></span> More
                            About Us{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!--End Our Company Info--> */}
                    {/* <!--Start Footer Top Left Content Inner--> */}
                    <div className="footer-top-style2__left-content-inner">
                      <ul>
                        <li
                          id="menu-item-1380"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1380"
                        >
                          <a
                            title="Care"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Care
                          </a>
                        </li>
                        <li
                          id="menu-item-1381"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1381"
                        >
                          <a
                            title="Community"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Community
                          </a>
                        </li>
                        <li
                          id="menu-item-1383"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1383"
                        >
                          <a
                            title="Purpose"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Purpose
                          </a>
                        </li>
                        <li
                          id="menu-item-1384"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1384"
                        >
                          <a
                            title="Careers"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Careers
                          </a>
                        </li>
                        <li
                          id="menu-item-1385"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1385"
                        >
                          <a
                            title="Newsroom"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Newsroom
                          </a>
                        </li>
                        <li
                          id="menu-item-1386"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1386"
                        >
                          <a
                            title="Cashback"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Cashback
                          </a>
                        </li>
                        <li
                          id="menu-item-1387"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1387"
                        >
                          <a
                            title="Accessibility"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Accessibility
                          </a>
                        </li>
                        <li
                          id="menu-item-1389"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1389"
                        >
                          <a
                            title="Faq’s"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Faq’s
                          </a>
                        </li>
                        <li
                          id="menu-item-1391"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1391"
                        >
                          <a
                            title="Get In Touch"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Get In Touch
                          </a>
                        </li>
                        <li
                          id="menu-item-1392"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1392"
                        >
                          <a
                            title="Testimonials"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Testimonials
                          </a>
                        </li>
                        <li
                          id="menu-item-1393"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1393"
                        >
                          <a
                            title=""
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Travel & Hotel
                          </a>
                        </li>
                        <li
                          id="menu-item-1394"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1394"
                        >
                          <a
                            title="Rewards"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Rewards
                          </a>
                        </li>
                        <li
                          id="menu-item-1397"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1397"
                        >
                          <a
                            title="Privacy"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Privacy
                          </a>
                        </li>
                        <li
                          id="menu-item-1398"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1398"
                        >
                          <a
                            title="Fraud &#038; security"
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Fraud &#038; security
                          </a>
                        </li>
                        <li
                          id="menu-item-1399"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1399"
                        >
                          <a
                            title="Terms &#038; conditions "
                            href="#"
                            className="hvr-underline-from-left1"
                            data-scroll
                            data-options="easing: easeOutQuart"
                          >
                            Terms &#038; conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!--End Footer Top Left Content Inner--> */}
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="footer-top-style2__right-content">
                    <div className="footer-contact-info-style">
                      <ul>
                        <li>
                          <div className="icon">
                            <span className="icon-map"></span>
                          </div>
                          <div className="text">
                            <h3>Corporate Branch</h3>
                            <p>
                              Huntington Park <br />
                              California
                              <br />
                              USA
                              <br />
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-phone-call"></span>
                          </div>
                          <div className="text">
                            <h3>Help Desk</h3>
                            <p>
                              Call to:{" "}
                              <a href="tel:+1(213) 290 1904">
                                +1(213) 290 1904
                              </a>
                            </p>
                            <p>
                              Send a Mail:{" "}
                              <a href="mailto:support@finbankcu.com">
                                support@finbankcu.com
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="find-nearest-branch-box">
                      <div className="top-outer">
                        <div className="top">
                          <div className="icon">
                            <span className="icon-bank-1"></span>
                          </div>
                          <div className="inner-title">
                            <h3>
                              Over 86 Branch, <br /> Find Your Nearest One{" "}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="form-box1">
                        <div className="zip-form">
                          <div
                            role="form"
                            className="wpcf7"
                            id="wpcf7-f1379-o1"
                            lang="en-US"
                            dir="ltr"
                          >
                            <div className="screen-reader-response">
                              <p
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                              ></p>
                              <ul></ul>
                            </div>
                            <form
                              method="post"
                              className="wpcf7-form init"
                              data-status="init"
                            >
                              <p>
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="number-349"
                                >
                                  <input
                                    type="number"
                                    name="number-349"
                                    className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number"
                                    id="zip"
                                    aria-invalid="false"
                                    placeholder="Enter Zip Code..."
                                  />
                                </span>
                                <button type="submit">
                                  <i className="icon-right-arrow"></i>Find{" "}
                                </button>
                              </p>
                              <div
                                className="wpcf7-response-output"
                                aria-hidden="true"
                              ></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Footer Top--> */}
          <div className="footer-bottom-style2">
            <div className="container">
              <div className="bottom-inner">
                <div className="footer-menu">
                  <ul>
                    <li
                      id="menu-item-466"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-466"
                    >
                      <a
                        title="About Us"
                        href="#"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        About Us
                      </a>
                    </li>
                    <li
                      id="menu-item-465"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-465"
                    >
                      <a
                        title="All Accounts"
                        href="#"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        All Accounts
                      </a>
                    </li>
                    <li
                      id="menu-item-468"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-468"
                    >
                      <a
                        title="Secured"
                        href="#"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        Secured
                      </a>
                    </li>
                    <li
                      id="menu-item-467"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-467"
                    >
                      <a
                        title="NRI Account"
                        href="#"
                        className="hvr-underline-from-left1"
                        data-scroll
                        data-options="easing: easeOutQuart"
                      >
                        NRI Account
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="scrool-top-btn-style2">
                  <a
                    href="#"
                    data-target="html"
                    className="scroll-to-target scroll-to-top--style2"
                  >
                    <i className="icon-diagonal-arrow"></i>Back to Top{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!--End footer area--> */}
        {/* <!--Scroll to top--> */}
        <a
          href="#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <i className="icon-chevron"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
