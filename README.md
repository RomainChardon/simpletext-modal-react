# simpletext-modal-react

> Modal for Project 14 OpenClassrooms

[![NPM](https://img.shields.io/npm/v/simpletext-modal-react.svg)](https://www.npmjs.com/package/simpletext-modal-react)

## About

A simple modal React component. For display simple text
Keep the default theme or chose your modal style.

Show demo : [demo.romainchardon.fr](https://demo.romainchardon.fr/simpletext/)

[Github](https://github.com/RomainChardon/simpletext-modal-react) /
[Website](https://www.romainchardon.fr)

## Install

```bash
npm install --save simpletext-modal-react
```

## Usage 

```jsx
import React, {useState} from "react";

// Import simpletext-modal
import {Modal} from "simpletext-modal-react";

function Exemple() {
    // Set State
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    const handleClickShowModal = () => {
        setShow(true); // Set true for dispay modal
        setMessage('Exemple message !'); // Add your message
    }

    // If you want to create a custom modal style
    const customStyle = styled.div`
        background: green;
    `

    return (
        <div>
            <button onClick={handleClickShowModal}>
                show modal
            </button>
            </div>
            // Usage Modal component
            <Modal
                show={show}
                close={() => setShow(false)}
                message={message}
                customStyle={customStyle} // optional
            />
        </div>
    )
}

export default Exemple;
```
