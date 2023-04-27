import { Images } from "assets/dashboad/img";
import { Logo } from "assets/img/logo";
import DashboardHelmet from "components/DashboardHelmet";
import { useEffect, useState } from "react";
import "../../tailwind.css";
import "../../assets/dashboad/css/import.css";
import "../../assets/dashboad/css/main.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  Account,
  checkAuth,
  LastLoging,
  logout,
  supportChatg,
  supportChatc,
  supportChatp,
} from "features/users";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bar } from "react-chartjs-2";
import { WS_URL } from "config";
import { WS_PORT } from "config";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Aud } from "assets/audio";

const js = [
  { path: "dashboard/jquery/dist", file: "jquery.min.js" },
  { path: "dashboard/popper.js/dist/umd", file: "popper.min.js" },
  { path: "dashboard/moment", file: "moment.js" },
  { path: "dashboard/chart.js/dist", file: "Chart.min.js" },
  { path: "dashboard/select2/dist/js", file: "select2.full.min.js" },
  { path: "dashboard/jquery-bar-rating/dist", file: "jquery.barrating.min.js" },
  { path: "dashboard/ckeditor", file: "ckeditor.js" },
  { path: "dashboard/bootstrap-validator/dist", file: "validator.min.js" },
  { path: "dashboard/bootstrap-daterangepicker", file: "daterangepicker.js" },
  { path: "dashboard/ion.rangeSlider/js", file: "ion.rangeSlider.min.js" },
  { path: "dashboard/dropzone/dist", file: "dropzone.js" },
  { path: "dashboard/editable-table", file: "mindmup-editabletable.js" },
  { path: "dashboard/datatables.net/js", file: "jquery.dataTables.min.js" },
  {
    path: "dashboard/datatables.net-bs/js",
    file: "dataTables.bootstrap.min.js",
  },
  { path: "dashboard/fullcalendar/dist", file: "fullcalendar.min.js" },
  {
    path: "dashboard/perfect-scrollbar/js",
    file: "perfect-scrollbar.jquery.min.js",
  },
  { path: "dashboard/tether/dist/js", file: "tether.min.js" },
  { path: "dashboard/slick-carousel/slick", file: "slick.min.js" },
  { path: "dashboard/bootstrap/js/dist", file: "util.js" },
  { path: "dashboard/bootstrap/js/dist", file: "alert.js" },
  { path: "dashboard/bootstrap/js/dist", file: "button.js" },
  { path: "dashboard/bootstrap/js/dist", file: "carousel.js" },
  { path: "dashboard/bootstrap/js/dist", file: "collapse.js" },
  { path: "dashboard/bootstrap/js/dist", file: "dropdown.js" },
  { path: "dashboard/bootstrap/js/dist", file: "modal.js" },
  { path: "dashboard/bootstrap/js/dist", file: "tab.js" },
  { path: "dashboard/bootstrap/js/dist", file: "tooltip.js" },
  { path: "dashboard/bootstrap/js/dist", file: "popover.js" },
  { path: "dashboard/js", file: "demo_customizer.js" },
  { path: "dashboard/js", file: "main.js" },
];

// const client = new WebSocket(`ws://${url}:${port}/ws/message/${room}/`); //gets room_name from the state and connects to the backend server

const Homex = () => {
  const dispatch = useDispatch();
  const [audio] = useState(new Audio(Aud.bell));
  const [message, setMessage] = useState("");
  const { loading, isAuthenticated, user, account, last_login, chatInit } =
    useSelector((state) => state.user);
  const [ch, setCh] = useState(!0);
  const [current, setCurrent] = useState(account[0]);
  const [options, setOptions] = useState([]);
  const [amt, setAmt] = useState("0");

  // const [chat, setChat] = useState('chatInit');

  // client.onopen = () => {
  //   console.log(`Connected to Chat Room - ${room}`);
  // };
  // const ConnectWS = () => {};

  // client.onmessage = (message) => {
  //   const dataFromServer = JSON.parse(message.data);
  //   if (dataFromServer) {
  //     setChat({
  //       ...chat,
  //       messages: [
  //         ...chat.messages,
  //         {
  //           msg: dataFromServer.text,
  //           name: dataFromServer.sender,
  //           time: dataFromServer.time,
  //           type: dataFromServer.type,
  //         },
  //       ],
  //     });
  //   }
  // };

  const SendMessage = async (e) => {
    e.preventDefault();
    const chat_id = sessionStorage.getItem("chat_id");
    !chat_id && (await dispatch(supportChatp()));
    chat_id && (await dispatch(supportChatc({ message })));
    await dispatch(supportChatg());
    setMessage('')
  };

  const playNotification = () => {
    const x = setInterval(() => {
      audio.play();
      // }, 10000);
    }, 3500);
    setTimeout(() => {
      stopNotification();
      clearInterval(x);
      // }, 10000);
    }, 15000);
  };

  const stopNotification = () => {
    audio.pause();
  };


  // setInterval(() => {
  //   dispatch(supportChatg());
  // }, 3000);

  const AddScript = (x, y) => {
    if (!document.querySelector(`[src="/assets/${x}/${y}"]`)) {
      const script = document.createElement("script");
      script.src = `/assets/${x}/${y}`;
      script.async = !1;
      document.body.appendChild(script);
    }
  };

  const setInit = () => {
    setCurrent(account[0]);
    setOptions(account.filter((acct) => acct.account_no != current.account_no));
  };

  const init = async () => {
    await dispatch(Account());
    await dispatch(LastLoging());
    await dispatch(supportChatg());
    setInit();
  };

  const run = () => {
    if (chatInit?.messages?.length) {
      if (!chatInit.messages[chatInit.messages.length - 1]?.self)
        playNotification();
    }
  }

  const Remove = (x = null) => {
    try {
      const i = x !== null ? x : current.account_no;
      const l = i.length;
      const n = l - 4;
      return i.slice(n);
    } catch (err) {}
  };

  const Toast = (t, m) => {
    if (t === "success") {
      toast.success(m);
    } else if (t === "info") {
      toast.info(m);
    } else if (t === "error") {
      toast.error(m);
    } else if (t === "warn") {
      toast.warn(m);
    }
  };

  const onChange = (e) => {
    setAmt(e.target.value);
  };

  const onChange2 = (e) => {
    setMessage(e.target.value);
  };

  const changeCurrent = (x, y) => {
    setCurrent(x);
    setOptions(account.filter((acct) => acct.account_no != current.account_no));
    const eleq = document.getElementById(`menu-id`);
    eleq.click();
    // const t = setTimeout(() => {
    //   clearTimeout(t)
    // }, 100);
    // const tt = setTimeout(() => {
    //   const ele = document.getElementById(`d${y}`);
    //   ele.click();
    //   clearTimeout(tt);
    // }, 1000);
  };

  const barData = {
    labels: [],
    datasets: [
      {
        label: "Balance History",
        backgroundColor: "",
        borderColor: "",
        borderWidth: 1,
        hoverBackgroundColor: "",
        hoverBorderColor: "",
        data: [],
      },
    ],
  };

  useEffect(() => {
    for (let i = 0; i < js.length; i++) {
      AddScript(js[i].path, js[i].file);
    }
  }, [ch]);

  useEffect(() => {
    init();
  }, [ch]);
  
  useEffect(() => {
    setTimeout(() => {
      run();
    }, 3000);
  }, [chatInit]);

  const logoutMe = async () => {
    const res = await dispatch(logout());
    console.log(res?.payload?.status);
    console.log(res?.payload?.status === 200);
    // res?.payload?.status === 200 && window.location.href = "/login";
    // res?.payload?.status === 500 && show error toast;
  };

  if (!isAuthenticated && !loading && user === null)
    return <Navigate to="/login" />;

  return (
    <>
      <DashboardHelmet />
      <ToastContainer />
      <div className="all-wrapper solid-bg-all">
        <div className="top-bar color-scheme-bright">
          <div className="logo-w menu-size">
            <Link className="logo" to="/">
              <img src={Logo.logo1} />
            </Link>
          </div>
          <div className="fancy-selector-w">
            <div className="fancy-selector-current">
              <div className="fs-img">
                <img alt={current.account_no} src={Images.card1} />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">{current.account_type}</div>
                <div className="fs-sub">
                  <span>Balance:</span>
                  <strong>{current.balance.total_balance}</strong>
                </div>
              </div>
              <div className="fs-extra-info">
                <strong>{Remove()}</strong>
                <span>ending</span>
              </div>
              <div className="fs-selector-trigger" id="menu-id">
                <i className="os-icon os-icon-arrow-down4"></i>
              </div>
            </div>
            <div className="fancy-selector-options">
              {account.map((x, i) => (
                <div
                  onClick={() => changeCurrent(x, i)}
                  key={i}
                  className={`fancy-selector-option ${
                    x.account_no === current.account_no && "active"
                  }`}
                  id={`d${i}`}
                >
                  <div className="fs-img">
                    <img alt="" src={Images.card1} />
                  </div>
                  <div className="fs-main-info">
                    <div className="fs-name">{x.account_type}</div>
                    <div className="fs-sub">
                      <span>Balance:</span>
                      <strong>{x.account_no}</strong>
                    </div>
                  </div>
                  <div className="fs-extra-info">
                    <strong>{Remove(x.account_no)}</strong>
                    <span>ending</span>
                  </div>
                </div>
              ))}

              {/* <div className="fancy-selector-option active"> */}
              <div className="fancy-selector-actions text-right">
                <button
                  type="button"
                  onClick={() =>
                    Toast("error", "You can't add a new account at the moment.")
                  }
                  className="btn btn-primary"
                  href="#"
                >
                  <i className="os-icon os-icon-ui-22"></i>
                  <span>Add Account</span>
                </button>
              </div>
            </div>
          </div>
          <div className="top-menu-controls">
            <div className="element-search autosuggest-search-activator">
              <input placeholder="Start typing to search..." />
            </div>
            {/* <div className="messages-notifications os-dropdown-trigger os-dropdown-position-left"> */}
            {/* <i className="os-icon os-icon-mail-14"></i> */}
            {/* <div className="new-messages-count">12</div> */}
            {/* <div className="os-dropdown light message-list">
                <ul>
                  <li>
                    <a href="#">
                      <div className="user-avatar-w">
                        <img alt="" src={Images.avatar1} />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">John Mayers</h6>
                        <h6 className="message-title">Account Update</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="user-avatar-w">
                        <img alt="" src={Images.avatar2} />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">Phil Jones</h6>
                        <h6 className="message-title">Secutiry Updates</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="user-avatar-w">
                        <img alt="" src={Images.avatar3} />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">Bekky Simpson</h6>
                        <h6 className="message-title">Vacation Rentals</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="user-avatar-w">
                        <img alt="" src={Images.avatar4} />
                      </div>
                      <div className="message-content">
                        <h6 className="message-from">Alice Priskon</h6>
                        <h6 className="message-title">Payment Confirmation</h6>
                      </div>
                    </a>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}
            <div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-left">
              <i className="os-icon os-icon-ui-46"></i>
              {/* <div className="os-dropdown">
                <div className="icon-w">
                  <i className="os-icon os-icon-ui-46"></i>
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <i className="os-icon os-icon-ui-49"></i>
                      <span>Profile Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="os-icon os-icon-grid-10"></i>
                      <span>Billing Info</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="os-icon os-icon-ui-44"></i>
                      <span>My Invoices</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="os-icon os-icon-ui-15"></i>
                      <span>Cancel Account</span>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* <div className="logged-user-w px-[2px] lg:py-[0rem] px-[1rem]">
              <div className="logged-user-i">
                <div className="avatar-w">
                  <img alt="" src={Images.avatar1} />
                </div>
                <div className="logged-user-menu color-style-bright">
                  <div className="logged-user-avatar-info">
                    <div className="avatar-w">
                      <img alt="" src={Images.avatar1} />
                    </div>
                    <div className="logged-user-info-w">
                      <div className="logged-user-role">Welcome</div>
                      <div className="logged-user-name">Maria Gomez</div>
                    </div>
                  </div>
                  <div className="bg-icon">
                    <i className="os-icon os-icon-wallet-loaded"></i>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="os-icon os-icon-mail-01"></i>
                        <span>Incoming Mail</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="os-icon os-icon-user-male-circle2"></i>
                        <span>Profile Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="os-icon os-icon-coins-4"></i>
                        <span>Billing Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="os-icon os-icon-others-43"></i>
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={logoutMe}>
                        <i className="os-icon os-icon-signs-11"></i>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="search-with-suggestions-w">
          <div className="search-with-suggestions-modal">
            <div className="element-search">
              <input
                className="search-suggest-input"
                placeholder="Start typing to search..."
              />
              <div className="close-search-suggestions">
                <i className="os-icon os-icon-x"></i>
              </div>
            </div>
            <div className="search-suggestions-group">
              <div className="ssg-header">
                <div className="ssg-icon">
                  <div className="os-icon os-icon-box"></div>
                </div>
                <div className="ssg-name">Projects</div>
                <div className="ssg-info">24 Total</div>
              </div>
              <div className="ssg-content">
                <div className="ssg-items ssg-items-boxed">
                  <a className="ssg-item" href="#">
                    <div
                      className="item-media"
                      style={{ backgroundImage: `url(${Images.company6})` }}
                    ></div>
                    <div className="item-name">
                      Integ <span>ration</span> with API{" "}
                    </div>
                  </a>
                  <a className="ssg-item" href="#">
                    <div
                      className="item-media"
                      style={{ backgroundImage: `url(${Images.company7})` }}
                    ></div>
                    <div className="item-name">
                      Deve <span>lopm</span>ent Project{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="search-suggestions-group">
              <div className="ssg-header">
                <div className="ssg-icon">
                  <div className="os-icon os-icon-users"></div>
                </div>
                <div className="ssg-name">Customers</div>
                <div className="ssg-info">12 Total</div>
              </div>
              <div className="ssg-content">
                <div className="ssg-items ssg-items-list">
                  <a className="ssg-item" href="#">
                    <div
                      className="item-media"
                      style={{ backgroundImage: "url{Images.avatar1}" }}
                    ></div>
                    <div className="item-name">
                      John Ma <span>yer</span>s{" "}
                    </div>
                  </a>
                  <a className="ssg-item" href="#">
                    <div
                      className="item-media"
                      style={{ backgroundImage: "url{Images.avatar2}" }}
                    ></div>
                    <div className="item-name">
                      Th <span>omas</span> Mullier{" "}
                    </div>
                  </a>
                  <a className="ssg-item" href="#">
                    <div
                      className="item-media"
                      style={{ backgroundImage: "url{Images.avatar3}" }}
                    ></div>
                    <div className="item-name">
                      Kim C <span>olli</span>ns{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="search-suggestions-group">
              <div className="ssg-header">
                <div className="ssg-icon">
                  <div className="os-icon os-icon-folder"></div>
                </div>
                <div className="ssg-name">Files</div>
                <div className="ssg-info">17 Total</div>
              </div>
              <div className="ssg-content">
                <div className="ssg-items ssg-items-blocks">
                  <a className="ssg-item" href="#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-file-text"></i>
                    </div>
                    <div className="item-name">
                      Work <span>Not</span>e.txt{" "}
                    </div>
                  </a>
                  <a className="ssg-item" href="#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-film"></i>
                    </div>
                    <div className="item-name">
                      V <span>ideo</span>.avi{" "}
                    </div>
                  </a>
                  <a className="ssg-item" href="#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-database"></i>
                    </div>
                    <div className="item-name">
                      User <span>Tabl</span>e.sql{" "}
                    </div>
                  </a>
                  <a className="ssg-item" href="#">
                    <div className="item-icon">
                      <i className="os-icon os-icon-image"></i>
                    </div>
                    <div className="item-name">
                      wed <span>din</span>g.jpg{" "}
                    </div>
                  </a>
                </div>
                <div className="ssg-nothing-found">
                  <div className="icon-w">
                    <i className="os-icon os-icon-eye-off"></i>
                  </div>
                  <span>No files were found. Try changing your query...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-w">
          <div className="menu-mobile menu-activated-on-click color-scheme-dark">
            <div className="mm-logo-buttons-w">
              <Link className="mm-logo" t0="/">
                <img src={Logo.logo1} />
                {/* <span>Clean Admin</span> */}
              </Link>
              <div className="mm-buttons">
                <div className="content-panel-open">
                  <div className="os-icon os-icon-grid-circles"></div>
                </div>
                <div className="mobile-menu-trigger">
                  <div className="os-icon os-icon-hamburger-menu-1"></div>
                </div>
              </div>
            </div>
            <div className="menu-and-user">
              <ul className="main-menu">
                <li className="">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layout"></div>
                    </div>
                    <span>Accounts</span>
                  </a>
                </li>
                <li className="has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-layers"></div>
                    </div>
                    <span>Transfer</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Zelle</a>
                    </li>
                    <li>
                      <a href="#">Internal Transfer</a>
                    </li>
                    <li>
                      <a href="#">External Transfer </a>
                    </li>
                    <li>
                      <a href="#">Wire Transfer</a>
                    </li>
                  </ul>
                </li>
                <li className="has-sub-menu">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-package"></div>
                    </div>
                    <span>Payments</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Pay Bill</a>
                    </li>
                  </ul>
                </li>
                {/* <li className="has-sub-menu"> */}
                <li className="">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-file-text"></div>
                    </div>
                    <span>Products & Services</span>
                  </a>
                  {/* <ul className="sub-menu">
                    <li>
                      <a href="#">Invoice</a>
                    </li>
                    <li>
                      <a href="#">
                        Order Info{" "}
                        <strong className="badge badge-danger">New</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Property Listing{" "}
                        <strong className="badge badge-danger">New</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">Charts</a>
                    </li>
                  </ul> */}
                </li>
                <li className="">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-life-buoy"></div>
                    </div>
                    <span>Branches & ATMs</span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-mail"></div>
                    </div>
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <div className="icon-w">
                      <div className="os-icon os-icon-users"></div>
                    </div>
                    <span>Help</span>
                  </a>
                </li>
              </ul>
              {/* <div className="mobile-menu-magic">
                <h4>Light Admin</h4>
                <p>Clean Bootstrap 4 Template</p>
                <div className="btn-w">
                  <a
                    className="btn btn-white btn-rounded"
                    href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin"
                    target="_blank"
                  >
                    Purchase Now
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="menu-w color-scheme-light color-style-transparent menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
            <div className="top-menu-controls">
              <div className="flex flex-col justify-center items-center py-4 px-2 text-black border-bottom border-gray">
                <p>
                  <span className="text-slate-600">Routing Number: </span>
                  7298371092
                </p>
                <h6 className="text-[14px] pt-2">
                  <span className="text-slate-600">Last Session:</span>{" "}
                  {last_login?.last_login}
                </h6>
              </div>
            </div>
            {/* <h1 className="menu-page-header">Page Header</h1> */}
            <ul className="main-menu">
              {/* <li className="sub-header">
                <span>Menus</span>
              </li> */}
              <li className="selected">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-layout"></div>
                  </div>
                  <span>Accounts</span>
                </a>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-layout"></div>
                  </div>
                  <span>Transfers</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Transfers</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-layout"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Zelle</a>
                      </li>
                      <li>
                        <a href="#">Internal Transfer</a>
                      </li>
                      <li>
                        <a href="#">External Transfer</a>
                      </li>
                      <li>
                        <a href="#">Wire Transfer</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-layout"></div>
                  </div>
                  <span>Payments</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Payments</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-layout"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Pay Bill </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sub-header">
                <span>Services</span>
              </li>
              {/* <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-mail"></div>
                  </div>
                  <span>Emails</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Emails</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-mail"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Welcome Email</a>
                      </li>
                      <li>
                        <a href="#">Order Confirmation</a>
                      </li>
                      <li>
                        <a href="#">Payment Due</a>
                      </li>
                      <li>
                        <a href="#">Forgot Password</a>
                      </li>
                      <li>
                        <a href="#">Activate Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-users"></div>
                  </div>
                  <span>Users</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Users</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-users"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Big Profile</a>
                      </li>
                      <li>
                        <a href="#">Compact Profile</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-edit-32"></div>
                  </div>
                  <span>Forms</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Forms</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-edit-32"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Regular Forms</a>
                      </li>
                      <li>
                        <a href="#">Form Validation</a>
                      </li>
                      <li>
                        <a href="#">Form Wizard</a>
                      </li>
                      <li>
                        <a href="#">File Uploads</a>
                      </li>
                      <li>
                        <a href="#">Wisiwig Editor</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-grid"></div>
                  </div>
                  <span>Tables</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Tables</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-grid"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Regular Tables</a>
                      </li>
                      <li>
                        <a href="#">Data Tables</a>
                      </li>
                      <li>
                        <a href="#">Editable Tables</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-zap"></div>
                  </div>
                  <span>Icons</span>
                </a>
                <div className="sub-menu-w">
                  <div className="sub-menu-header">Icons</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-zap"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">
                          Simple Line Icons
                        </a>
                      </li>
                      <li>
                        <a href="#">Feather Icons</a>
                      </li>
                      <li>
                        <a href="#">Themefy Icons</a>
                      </li>
                      <li>
                        <a href="#">Picons Thin</a>
                      </li>
                      <li>
                        <a href="#">Dripicons</a>
                      </li>
                      <li>
                        <a href="#">Eightyshades</a>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Entypo</a>
                      </li>
                      <li>
                        <a href="#">Font Awesome</a>
                      </li>
                      <li>
                        <a href="#">
                          Foundation Icon Font
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Metrize Icons
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Picons Social
                        </a>
                      </li>
                      <li>
                        <a href="#">Batch Icons</a>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Dashicons</a>
                      </li>
                      <li>
                        <a href="#">Typicons</a>
                      </li>
                      <li>
                        <a href="#">
                          Weather Icons
                        </a>
                      </li>
                      <li>
                        <a href="#">Light Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
              <li className="sub-header">
                <span>More</span>
              </li>
              <li className="has-sub-menu">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-package"></div>
                  </div>
                  <span>Products & Services</span>
                </a>
                {/* <div className="sub-menu-w">
                  <div className="sub-menu-header">Products & Services</div>
                  <div className="sub-menu-icon">
                    <i className="os-icon os-icon-package"></i>
                  </div>
                  <div className="sub-menu-i">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Email Application</a>
                      </li>
                      <li>
                        <a href="#">
                          Support Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#">Tickets Index</a>
                      </li>
                      <li>
                        <a href="#">
                          Crypto Dashboard{" "}
                          <strong className="badge badge-danger">New</strong>
                        </a>
                      </li>
                      <li>
                        <a href="#">Projects List</a>
                      </li>
                      <li>
                        <a href="#">
                          Banking{" "}
                          <strong className="badge badge-danger">New</strong>
                        </a>
                      </li>
                    </ul>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Chat Application</a>
                      </li>
                      <li>
                        <a href="#">
                          To Do Application{" "}
                          <strong className="badge badge-danger">New</strong>
                        </a>
                      </li>
                      <li>
                        <a href="#">Popup Chat</a>
                      </li>
                      <li>
                        <a href="#">CRM Pipeline</a>
                      </li>
                      <li>
                        <a href="#">
                          Property Listing{" "}
                          <strong className="badge badge-danger">New</strong>
                        </a>
                      </li>
                      <li>
                        <a href="#">Calendar</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </li>
              <li className="">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-file-text"></div>
                  </div>
                  <span>Branches & ATMs</span>
                </a>
              </li>
              <li className="">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-life-buoy"></div>
                  </div>
                  <span>Contact Us</span>
                </a>
              </li>
              <li className="">
                <a href="#">
                  <div className="icon-w">
                    <div className="os-icon os-icon-life-buoy"></div>
                  </div>
                  <span>Help</span>
                </a>
              </li>
            </ul>
            {/* <div className="side-menu-magic">
              <h4>Light Admin</h4>
              <p>Clean Bootstrap 4 Template</p>
              <div className="btn-w">
                <a
                  className="btn btn-white btn-rounded"
                  href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin"
                  target="_blank"
                >
                  Purchase Now
                </a>
              </div>
            </div> */}
          </div>
          <div className="content-w">
            <div className="content-i">
              <div className="content-box">
                <div className="element-wrapper compact pt-4">
                  <div className="element-actions">
                    <a
                      onClick={() =>
                        Toast(
                          "error",
                          "You can't add a new account at the moment."
                        )
                      }
                      className="btn btn-primary btn-md"
                      href="#"
                    >
                      <i className="os-icon os-icon-ui-22"></i>
                      <span>Add Account</span>
                    </a>
                    <a
                      onClick={() =>
                        Toast("error", "You can't make payment at the moment.")
                      }
                      className="btn btn-success btn-md"
                      href="#"
                    >
                      <i className="os-icon os-icon-grid-10"></i>
                      <span>Make Payment</span>
                    </a>
                  </div>
                  <h6 className="element-header">Account Overview</h6>
                  <div className="element-box-tp">
                    <div className="row">
                      <div className="col-lg-7 col-xxl-6">
                        <div className="element-balances flex flex-col lg:flex-row ">
                          <div className="balance hidden-mobilel">
                            <div className="balance-title">Total Balance</div>
                            <div
                              className={`balance-value ${
                                current?.balance?.total_balance?.includes(
                                  "-$"
                                ) && "danger"
                              }`}
                            >
                              <span>{current.balance.total_balance}</span>
                              {/* <span className="trending trending-down-basic">
                                <span>%12</span>
                                <i className="os-icon os-icon-arrow-2-down"></i>
                              </span> */}
                            </div>
                            <div className="balance-link">
                              <a
                                onClick={() =>
                                  Toast(
                                    "warn",
                                    "Server down, \nTry again in a moment."
                                  )
                                }
                                className="btn btn-link btn-underlined"
                                href="#"
                              >
                                <span>View Statement</span>
                                <i className="os-icon os-icon-arrow-right4"></i>
                              </a>
                            </div>
                          </div>
                          <div className="balance">
                            <div className="balance-title">
                              Available Balance
                            </div>
                            <div className="balance-value">
                              {current.balance.available_balance}
                            </div>
                            {/* <div className="balance-link">
                              <a
                                className="btn btn-link btn-underlined"
                                href="#"
                              >
                                <span>Request Increase</span>
                                <i className="os-icon os-icon-arrow-right4"></i>
                              </a>
                            </div> */}
                          </div>
                          <div className="balance">
                            <div className="balance-title">Due Balance</div>
                            <div
                              className={`balance-value ${
                                current.balance.due_balance !== "$0.00" &&
                                "danger"
                              }`}
                            >
                              {current.balance.due_balance}
                            </div>
                            <div className="balance-link">
                              <a
                                className="btn btn-link btn-underlined btn-gold"
                                href="#"
                              >
                                <span>Pay Now</span>
                                <i className="os-icon os-icon-arrow-right4"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-xxl-6">
                        <div className="alert alert-warning borderless">
                          <h5 className="alert-heading">
                            Refer Friends. Get Rewarded
                          </h5>
                          <p>
                            You can earn: 15,000 Membership Rewards points for
                            each approved referral – up to 55,000 Membership
                            Rewards points per calendar year.
                          </p>
                          <div className="alert-btn">
                            <a
                              onClick={() =>
                                Toast(
                                  "warn",
                                  "Server down, \nTry again in a moment."
                                )
                              }
                              className="btn btn-white-gold"
                              href="#"
                            >
                              <i className="os-icon os-icon-ui-92"></i>
                              <span>Send Referral</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7 col-xxl-6">
                    <div className="element-wrapper">
                      <div className="element-box">
                        <div className="element-actions">
                          <div className="form-group">
                            <select className="form-control form-control-sm">
                              <option defaultValue>Last 30 days</option>
                              <option>This Week</option>
                              <option>This Month</option>
                              <option>Today</option>
                            </select>
                          </div>
                        </div>
                        <h5 className="element-box-header">Balance History</h5>
                        <div className="el-chart-w">
                          <canvas
                            data-chart-data="13,28,19,24,43,49,40,35,42,46"
                            data-chart-date="13,28,19,24,43,49,40,35,42,46"
                            height="90"
                            id="liteLineChartV3"
                            width="300"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-xxl-6">
                    <div className="element-wrapper">
                      <div className="element-box">
                        <form>
                          <h5 className="element-box-header">Withdraw Money</h5>
                          <div className="row">
                            <div className="col-sm-5">
                              <div className="form-group">
                                <label className="lighter" htmlFor="">
                                  Select Amount
                                </label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                  <input
                                    className="form-control"
                                    placeholder="Enter Amount..."
                                    value={amt}
                                    onChange={onChange}
                                  />
                                  <div className="input-group-append">
                                    <div className="input-group-text">USD</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-7">
                              <div className="form-group">
                                <label className="lighter" htmlFor="">
                                  Transfer to
                                </label>
                                <select className="form-control">
                                  {current.external_accounts.length ? (
                                    current.external_accounts.map((x, i) => (
                                      <option
                                        key={i}
                                        value={`${x.name}-${x.account_no}`}
                                      >
                                        {x.name} {x.account_no}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">No account</option>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-buttons-w text-right compact">
                            {current?.can_add_account && (
                              <a className="btn btn-grey" href="#">
                                <i className="os-icon os-icon-ui-22"></i>
                                <span>Add Account</span>
                              </a>
                            )}
                            <a
                              onClick={() =>
                                Toast(
                                  "error",
                                  "You are not allowed to transfer to this account at the moment."
                                )
                              }
                              className="btn btn-primary"
                              href="#"
                            >
                              <span>Transfer</span>
                              <i className="os-icon os-icon-grid-18"></i>
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element-wrapper">
                  <h6 className="element-header">Recent Transactions</h6>
                  <div className="element-box-tp">
                    <div className="table-responsive">
                      {current.history.length ? (
                        <table className="table table-padded">
                          <thead>
                            <tr>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Description</th>
                              <th className="text-center">Category</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {current.history.length &&
                              current.history.map((x, i) => (
                                <tr key={i}>
                                  <td className="nowrap">
                                    <span
                                      className={`status-pill smaller ${
                                        x.status.toLowerCase() === "received"
                                          ? "green"
                                          : x.status.toLowerCase() ===
                                            "complete"
                                          ? "green"
                                          : x.status.toLowerCase() === "pending"
                                          ? "yellow"
                                          : x.status.toLowerCase() ===
                                            "declined"
                                          ? "red"
                                          : ""
                                      }`}
                                    ></span>
                                    <span>{x.status}</span>
                                  </td>
                                  <td>
                                    <span>{x.date}</span>
                                    {/* <span>Today</span>
                                <span className="smaller lighter">1:52am</span> */}
                                  </td>
                                  <td className="cell-with-media">
                                    <span>{x.description}</span>
                                  </td>
                                  <td className="text-center">
                                    <span className="">{x.category}</span>
                                  </td>
                                  <td className="text-right bolder nowrap">
                                    <span
                                      className={`text-${
                                        x.credit ? "success" : "danger"
                                      }`}
                                    >
                                      {`${x.credit ? "+" : "-"} ${x.amount}`}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      ) : (
                        <span className="flex items-center justify-center">
                          No Recent Transactions
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className="floated-colors-btn second-floated-btn">
                  <div className="os-toggler-w">
                    <div className="os-toggler-i">
                      <div className="os-toggler-pill"></div>
                    </div>
                  </div>
                  <span>Dark </span>
                  <span>Colors</span>
                </div> */}
                {/* <div className="floated-customizer-btn third-floated-btn">
                  <div className="icon-w">
                    <i className="os-icon os-icon-ui-46"></i>
                  </div>
                  <span>Customizer</span>
                </div> */}
                {/* <div className="floated-customizer-panel">
                  <div className="fcp-content">
                    <div className="close-customizer-btn">
                      <i className="os-icon os-icon-x"></i>
                    </div>
                    <div className="fcp-group">
                      <div className="fcp-group-header">Menu Settings</div>
                      <div className="fcp-group-contents">
                        <div className="fcp-field">
                          <label htmlFor="">Menu Position</label>
                          <select className="menu-position-selector">
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                            <option value="top">Top</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label htmlFor="">Menu Style</label>
                          <select className="menu-layout-selector">
                            <option value="compact">Compact</option>
                            <option value="full">Full</option>
                            <option value="mini">Mini</option>
                          </select>
                        </div>
                        <div className="fcp-field with-image-selector-w">
                          <label htmlFor="">With Image</label>
                          <select className="with-image-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label htmlFor="">Menu Color</label>
                          <div className="fcp-colors menu-color-selector">
                            <div className="color-selector menu-color-selector color-bright selected"></div>
                            <div className="color-selector menu-color-selector color-dark"></div>
                            <div className="color-selector menu-color-selector color-light"></div>
                            <div className="color-selector menu-color-selector color-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fcp-group">
                      <div className="fcp-group-header">Sub Menu</div>
                      <div className="fcp-group-contents">
                        <div className="fcp-field">
                          <label htmlFor="">Sub Menu Style</label>
                          <select className="sub-menu-style-selector">
                            <option value="flyout">Flyout</option>
                            <option value="inside">Inside/Click</option>
                            <option value="over">Over</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label htmlFor="">Sub Menu Color</label>
                          <div className="fcp-colors">
                            <div className="color-selector sub-menu-color-selector color-bright selected"></div>
                            <div className="color-selector sub-menu-color-selector color-dark"></div>
                            <div className="color-selector sub-menu-color-selector color-light"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fcp-group">
                      <div className="fcp-group-header">Other Settings</div>
                      <div className="fcp-group-contents">
                        <div className="fcp-field">
                          <label htmlFor="">Full Screen?</label>
                          <select className="full-screen-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label htmlFor="">Show Top Bar</label>
                          <select className="top-bar-visibility-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label htmlFor="">Above Menu?</label>
                          <select className="top-bar-above-menu-selector">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="fcp-field">
                          <label htmlFor="">Top Bar Color</label>
                          <div className="fcp-colors">
                            <div className="color-selector top-bar-color-selector color-bright selected"></div>
                            <div className="color-selector top-bar-color-selector color-dark"></div>
                            <div className="color-selector top-bar-color-selector color-light"></div>
                            <div className="color-selector top-bar-color-selector color-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="floated-chat-btn">
                  <i className="os-icon os-icon-mail-07"></i>
                  <span>Chat</span>
                </div>
                {!chatInit?.messages?.length && (
                  <div className="floated-chat-w">
                    <div className="floated-chat-i">
                      <div className="chat-close">
                        <i className="os-icon os-icon-close"></i>
                      </div>
                      <div className="chat-head bg-green-200 rounded-top">
                        <div className="user-w with-status status-green">
                          <div className="user-name">
                            <h6 className="user-title">
                              Welcome to FinBank CU Support
                            </h6>
                            <div className="user-role">
                              An agent would be assigned to you shortly.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-messages">
                        <div className="date-break">
                          Type your message to begin
                        </div>
                        <div className="date-break hidden">
                          If no response after 10 - 20 Minutes
                          <br />
                          You can message us on{" "}
                          <a
                            className="underline text-blue hover:text-[#25b85d]"
                            href="https://t.me/finbankcu"
                            target="_blank"
                          >
                            Telegram
                          </a>
                        </div>
                      </div>
                      <div className="chat-controls flex">
                        <input
                          className="message-input"
                          placeholder="Type your message here..."
                          id="message"
                          value={message}
                          onChange={onChange2}
                          autoComplete="false"
                        />
                        <button
                          onClick={SendMessage}
                          className="sendBtn bg-green-400 text-white py-2 px-2 rounded-full w-[80px] mt-2 hover:bg-green-500"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {chatInit?.messages?.length && (
                  <div className="floated-chat-w">
                    <div className="floated-chat-i">
                      <div className="chat-close">
                        <i className="os-icon os-icon-close"></i>
                      </div>
                      {chatInit?.agent?.name !== "" ? (
                        <div className="chat-head">
                          <div
                            className={`user-w with-status status-${
                              chatInit?.agent?.is_online ? "green" : "red"
                            }`}
                          >
                            <div className="user-avatar-w">
                              <div className="user-avatar">
                                <img
                                  alt=""
                                  src={
                                    chatInit?.agent?.img === 1
                                      ? Images.avatar1
                                      : chatInit?.agent?.img === 2
                                      ? Images.avatar2
                                      : chatInit?.agent?.img === 3
                                      ? Images.avatar3
                                      : chatInit?.agent?.img === 4
                                      ? Images.avatar4
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                            <div className="user-name">
                              <h6 className="user-title">
                                {chatInit?.agent?.name}
                              </h6>
                              <div className="user-role">
                                {chatInit?.agent?.position}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="chat-head bg-green-200 rounded-top">
                          <div className="user-w with-status status-green">
                            <div className="user-name">
                              <h6 className="user-title">
                                Welcome to FinBank CU Support
                              </h6>
                              <div className="user-role">
                                An agent would be assigned to you shortly.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="chat-messages">
                        {/* <div className="date-break">Mon 10:20am</div> */}
                        {chatInit?.messages.map(
                          (x,i) =>
                            !chatInit.messages?.blocked && (
                              <div
                                key={x.message_id}
                                className={`message ${
                                  x?.self
                                    ? "self"
                                    : ""
                                }`}
                              >
                                <div className="message-content">
                                  {x.message}
                                </div>
                              </div>
                            )
                        )}
                        {chatInit?.agent?.name === "" && (
                          <div className="date-break">
                            If you get no reply after 10 - 20 Minutes
                            <br />
                            You can message us on{" "}
                            <a
                              className="underline text-blue hover:text-[#25b85d]"
                              href="https://t.me/finbankcu"
                              target="_blank"
                            >
                              Telegram
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="chat-controls flex">
                        <input
                          className="message-input"
                          placeholder="Type your message here..."
                          id="message"
                          value={message}
                          onChange={onChange2}
                          autoComplete="false"
                        />
                        <button
                          onClick={SendMessage}
                          className="sendBtn bg-green-400 text-white py-2 px-2 rounded-full w-[80px] mt-2 hover:bg-green-500"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                      {/* add below later */}
                      {/* <div className="chat-extra">
                        <a href="#">
                          <span className="extra-tooltip">Attach Document</span>
                          <i className="os-icon os-icon-documents-07"></i>
                        </a>
                        <a href="#">
                          <span className="extra-tooltip">Insert Photo</span>
                          <i className="os-icon os-icon-others-29"></i>
                        </a>
                        <a href="#">
                          <span className="extra-tooltip">Upload Video</span>
                          <i className="os-icon os-icon-ui-51"></i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="display-type"></div>
      </div>
    </>
  );
};

export default Homex;
