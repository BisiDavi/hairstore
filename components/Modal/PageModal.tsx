import React, { FC } from "react";
import { Modal } from "react-bootstrap";

interface PageModalProps {
    show: boolean;
    onHide: () => void;
    modalStyle: string;
    header: string;
}

const PageModal: FC<PageModalProps> = (props): JSX.Element => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            {...props}
            centered
            contentClassName={props.modalStyle}
        >
            <Modal.Header closeButton>
                <h1>{props.header}</h1>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
        </Modal>
    );
};

export default PageModal;
