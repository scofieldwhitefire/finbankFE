import { Logo } from "assets/img/logo";
import { useEffect, useState } from "react";
import "../assets/login/main.css";
import "../tailwind.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth, LastLoginp, login } from "features/users";
import MinLoading from "components/MinLoading";

const Login = () => {
  const dispatch = useDispatch();

  const { loading, isAuthenticated, registered } = useSelector(
    (state) => state.user
  );

  const [bgColor, setBgColor] = useState("#25B85D");
  const [version, setVersion] = useState("1.131.3");
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(!1);
  const [ch1, setCh1] = useState(!1);
  const [usernameData, setUsernameData] = useState();
  const [passwordData, setPasswordData] = useState();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    setUsernameData(document.getElementById("username"));
    setPasswordData(document.getElementById("password"));
  }, [ch1]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Show input error messages
  const showError = (input, message) => {
    //   const formControl = input.parentElement;
    //   //   log(formControl.children);
    //   formControl.children[1].classList.remove("error");
    //   formControl.children[1].classList.add("error");
    //   const small = formControl.querySelector("small");
    //   small.innerText = message;
    //   small.classList.add("error");
    //   small.classList.remove("success");
    setError(message);
    setHasError(!0);
  };

  const showSuccess = () => {
    setError("");
    setHasError(!1);
  };

  const { username, password } = formData;

  const $username = usernameData;
  const $password = passwordData;

  let cr = !1;

  //checkRequired fields
  const checkRequired = (inputArr) => {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        getFieldName(input) !== "Confirm_password"
          ? showError(input, `${getFieldName(input)} is required.`)
          : showError(input, `Password is required.`);
        cr = !1;
      } else {
        showSuccess(input);
        cr = !0;
      }
    });
  };

  //get FieldName
  const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    checkRequired([$password, $username]);
    let res;

    if (cr) {
      res = await dispatch(login({ username, password }));
      if (res?.meta?.requestStatus.toLowerCase() === "rejected") {
        try {
          if (res?.payload?.status === 0) {
            showError(null, res?.payload?.detail);
          } else if (res?.payload?.status === 401) {
            showError(
              null,
              `${res?.payload?.statusText}: ${res?.payload?.detail}.`
            );
          } else {
            showError(null, res?.payload?.detail);
          }
        } catch (err) {}
      } else if (res.meta.requestStatus.toLowerCase() === "fulfilled") {
        // <Navigate to="/account" />;
        const ress = await dispatch(LastLoginp());
        if(ress.meta.requestStatus.toLowerCase() === "fulfilled") window.location.href = "/account";
      }
    }
  };

  if (isAuthenticated) return <Navigate to="/account" />;

  return (
    <>
      <div className="form-body without-side vh-100">
        <div className="website-logo">
          <Link to="/">
            <div className="logo">
              <img className="logo-size" src={Logo.logo1} alt="" />
            </div>
          </Link>
        </div>
        <div className="row">
          <div className="img-holder" style={{ backgroundColor: `${bgColor}` }}>
            <div className="bg"></div>
            <div className="info-holder">
              <img src="images/graphic3.svg" alt="" />
            </div>
          </div>
          <div className="form-holder">
            <div className="form-content flex flex-col">
              <div className="form-items">
                <h3 className="flex items-center justify-center">Login</h3>
                {hasError && (
                  <h6 className="flex items-center justify-center pt-1 pb-3 text-[12px] text-red-600 italic">
                    {error}
                  </h6>
                )}
                <form onSubmit={onSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    placeholder="Username"
                    autoComplete="no"
                    onChange={onChange}
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={onChange}
                  />
                  <div className="form-button">
                    {!loading ? (
                      <button id="submit" type="submit" className="ibtn">
                        Login
                      </button>
                    ) : (
                      <span className="ibtn cursor-not-allowed">
                        processing . . .
                      </span>
                    )}
                    {loading && <MinLoading />}
                  </div>
                  <div className="form-button">
                    <Link
                      className={`hover:text-['${bgColor}'] hover:font-semibold`}
                      to="/"
                    >
                      Forgot your username?
                    </Link>{" "}
                    or{" "}
                    <Link
                      className={`hover:text-['${bgColor}'] hover:font-semibold`}
                      to="/"
                    >
                      Forget your password?
                    </Link>
                  </div>
                </form>
                <br />
                <h5 className="font-xs">
                  © 2022 FinBank Federal Credit Union{" "}
                </h5>
              </div>
              <h5 className="font-xs my-4 text-white">v{version} </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
