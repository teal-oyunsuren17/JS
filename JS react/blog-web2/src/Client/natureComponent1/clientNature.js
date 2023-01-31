import "./client.css";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

export function ClientNature() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const navigate = useNavigate();
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
          <button onClick={() => navigate("help")}>HELP</button>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <button>
              {" "}
              <BsSearch />{" "}
            </button>
            <input placeholder="endees haina uu?" />
          </div>
          <div>
            {" "}
            <h1>Oyuka's personal blog</h1>{" "}
          </div>
          <div>
            <button>hetevch</button>
            <button>hadgalsan</button>
            <button>sags</button>
            <button>nevtreh</button>
          </div>
        </div>

        <div>
          <Dropdown
            as={ButtonGroup}
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <Button variant="dark" id="dropdown">
              Menu
            </Button>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                {" "}
                <div>hsdkhcsjdjhsdfgdg</div>{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button onClick={() => navigate("skin-care")}>Арьс арчилгаа</button>
          <button>Нүүр будалт</button>
          <button>Цэвэрлэгээ</button>
          <button>Шинэ</button>
          <button>Sale</button>
        </div>
      </header>
    </main>
  );
}
