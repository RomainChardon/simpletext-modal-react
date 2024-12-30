import Modal from "./Components/Modal.jsx";
import {useState} from "react";

function App() {
    const [show, setShow] = useState(false);

    const handleClickShow = () => {
        setShow(true);
    }

    return (
      <div>
          <button onClick={handleClickShow}>
              show
          </button>

          <Modal
            show={show}
            close={() => setShow(false)}
            message="C'est le text du modal !"
          />
      </div>
    )
}

export default App
