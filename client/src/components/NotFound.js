import React from "react";
import logo from './empty.png'

const NotFound = () => {
  return (
    <div>
      <img className='not-image' alt='not found' src={logo} />
      <p style={{textAlign:'center'}}>لطفا برای مشاهده لیست کاربران وارد شوید</p>
    </div>
  );
};
export default NotFound;
