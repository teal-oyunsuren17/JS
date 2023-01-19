import "./client.css";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ClientHelp } from "./clientHelp";

export function Client() {
  return (
    <main>
      <header>
        <div className="contactHeader">
          <div className="contactDiv d-flex">
            <p>
              <HiOutlinePhone /> 95457909
            </p>
            <p>
              <MdOutlineMailOutline />
              p.oyunsuren0129@gmail.com
            </p>
          </div>
          <div>
            {" "}
            <Link to={"/help"}>
              {" "}
              <ClientHelp />{" "}
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
}
