import Modal from "./Components/Modal.jsx";
import {useState} from "react";
import './assets/style.css'

function App() {
    const [show, setShow] = useState(false);

    const handleClickShow = () => {
        setShow(true);
    }

    return (
        <div className="demo-container">
            <header>
                <h1>SimpleText Modal React</h1>
                <p>A simple modal React component. To display simple text.</p>
                <div className="links">
                    <a href="https://github.com/RomainChardon/simpletext-modal-react/tree/main" target="_blank"
                       rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.npmjs.com/package/simpletext-modal-react" target="_blank"
                       rel="noopener noreferrer">npm</a>
                </div>
            </header>

            <main>
                <button onClick={handleClickShow}>
                    Open modal !
                </button>

                <Modal
                    show={show}
                    close={() => setShow(false)}
                    message="If Microsoft invented something that didn't crash, it would be a nail"
                />
            </main>

            <footer>
                <p>Créé par <a href="https://github.com/RomainChardon" target="_blank" rel="noopener noreferrer">Romain
                    Chardon</a></p>
            </footer>
        </div>
    )
}

export default App
