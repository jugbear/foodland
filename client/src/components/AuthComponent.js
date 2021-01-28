import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import ShowUsers from "./ShowUsers";
import NotFound from "./NotFound";
import "../app.scss";
const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <div className="authholder">
      {!isLogin ? <SignInForm islogin={handleChange} /> : null}
      {!isLogin ?  <SignUpForm islogin={handleChange} /> : null}
      </div>
      <div className="users-table-holder">
        <h2 className="user-header">لیست کاربران</h2>

        {isLogin ? <ShowUsers islogin={handleChange} /> : <NotFound />}
        {isLogin ? <button className="submit-btn" onClick={handleChange}>خروج</button> :null}
      </div>
    </div>
  );
};
export default AuthComponent;
