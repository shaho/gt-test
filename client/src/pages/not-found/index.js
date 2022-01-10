import { Link } from "react-router-dom";

import PagesLayout from "../../components/pages-layout";
import { Main, SideBarOne, SideBarTwo } from "../styles";

function NotFound() {
  return (
    <PagesLayout>
      <SideBarOne className="col col-3"></SideBarOne>
      <Main className="col col-6">
        <h1>404 Page Not Found</h1>
        <br />
        <Link to="/">Go back to Home</Link>
      </Main>
      <SideBarTwo className="col col-3"></SideBarTwo>
    </PagesLayout>
  );
}

export default NotFound;
