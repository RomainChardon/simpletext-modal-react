import PropTypes from "prop-types"
import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(210,210,210, .5);
    z-index:2;
`

const Content = styled.div`
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`

const Close = styled.span`
    font-size: 16px;
    position: absolute;
    right: 8px;
    top: 4px;
    cursor: pointer;
`

function Modal({show, close, message, customStyle}) {

    if (!customStyle){
        customStyle = {
            "backgroundColor": "rgb(255,255,255)",
            "borderRadius": 5,
            "boder": "5px solid #ccc",
            "fontSize": 16,
            "height": "fit-content",
            "padding": "20px 50px",
            "width": "fit-content"
        }
    }

    return (
        <div>
            { show && (
                <Overlay onClick={close}>
                    <Content style={customStyle}>
                        <div>
                            <Close className="modal-close" onClick={close}>X</Close>
                            <span>{message}</span>
                        </div>
                    </Content>
                </Overlay>
            )}
        </div>
    )


}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    close:PropTypes.func.isRequired,
    message: PropTypes.string,
    customStyle: PropTypes.object,
}

export default Modal;