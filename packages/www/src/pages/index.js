import React from "react";
import { Link } from "gatsby";

export default props => (
  <div>
    <h1>Our site</h1>
    <nav>
      <ul>
        <li>
          <Link to="/a">A</Link>
        </li>
        <li>
          <Link to="/b">B</Link>
        </li>
      </ul>
    </nav>
  </div>
);
