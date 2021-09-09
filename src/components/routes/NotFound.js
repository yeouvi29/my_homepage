import { Link } from "react-router-dom";

import Card from "./../../UI/Card";

const NotFound = () => {
  return (
    <Card>
      <h1>Page Not Found.</h1>
      <Link to="/">
        <h3>Go back to home</h3>
      </Link>
    </Card>
  );
};

export default NotFound;
