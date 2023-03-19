import React, { useState, useEffect } from "react";
import { SignMessagePopup } from "../SignMessagePopup";
import { TransactionPopup } from "../TransactionPopup";
import { setup } from "goober";
import { Modal } from "../Modal";

const BananaProvider = (props: any) => {
  setup(React.createElement);
  useEffect(() => {
    window.addEventListener("userTransaction", handleTransactionPopup);
    window.addEventListener("userSign", handleMessagePopup);
    return () => {
      window.removeEventListener("userTransaction", handleTransactionPopup);
      window.removeEventListener("userSign", handleMessagePopup);
    };
  }, []);

  const handleTransactionPopup = () => {
    console.log("handle txn called ");
    setIsTransactionPopup(true);
  };

  const handleMessagePopup = () => {
    console.log("handle message called ");
    setIsMessageSignPopup(true);
  };

  const [isTransactionPopup, setIsTransactionPopup] = useState(false);
  const [isMessageSignPopup, setIsMessageSignPopup] = useState(false);

  return (
    <div>
      {props.children}
      <Modal isVisible={isTransactionPopup}>
        <SignMessagePopup changeVisibility={setIsTransactionPopup} />
      </Modal>
      <Modal isVisible={isMessageSignPopup}>
        <SignMessagePopup changeVisibility={setIsMessageSignPopup} />
      </Modal>
    </div>
  );
};

export default BananaProvider;
