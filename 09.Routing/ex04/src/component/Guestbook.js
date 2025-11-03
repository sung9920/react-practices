import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Guestbook() {
    const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
        // access denied 응답을 받은 경우
        // window.location.href = "/error/401";
        navigate("/error/401");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Guestbook</h1>
      <ul>
        <li>
          <Link to={"/"}>[Main]</Link>
        </li>
        <li>
          <NavLink to={"/guestbook"}>[Guestbook]</NavLink>
        </li>
        <li>
          <Link to={"/gallery"}>[Gallery]</Link>
        </li>
      </ul>
    </div>
  );
}
