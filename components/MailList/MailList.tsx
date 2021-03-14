import React, { FC } from "react";
import { PageModal } from "../Modal";
import styles from "../../styles/Mailform.module.css";

interface MailingListProps {
    show: boolean;
    onHide: () => void;
}

const MailList: FC<MailingListProps> = ({ show, onHide }): JSX.Element => {
    return (
        <PageModal
            header="JOIN OUT MAILING LIST!"
            modalStyle={styles.pageModal}
            show={show}
            onHide={onHide}
        >
            <div className="mailinglist ">
                <p>
                    Be among the first to hear abou our discount sales, new
                    arrivals & more!
                </p>
                <form>
                    <input placeholder="Email" type="email" required />
                    <button type="submit">Subscribe</button>
                    <p>
                        By completing this form you are signing up to receive
                        our emails and can unsubscribe at any time
                    </p>
                </form>
            </div>
        </PageModal>
    );
};

export default MailList;
