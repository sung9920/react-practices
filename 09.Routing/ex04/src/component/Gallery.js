import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        <li>
          <Link to={"/"}>[Main]</Link>
        </li>
        <li>
          <NavLink className={'menu'} to={"/guestbook"}>[Guestbook]</NavLink>
        </li>
        <li>
          <Link to={"/gallery"}>[Gallery]</Link>
        </li>
      </ul>
    </div>
  );
}
