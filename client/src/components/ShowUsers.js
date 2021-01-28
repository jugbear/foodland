import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowUsers = ({ islogin }) => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      setUsers(response.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>ایمیل</th>
          <th>سن</th>
          <th>جنسیت</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(users).map((user) => {
          return (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ShowUsers;
