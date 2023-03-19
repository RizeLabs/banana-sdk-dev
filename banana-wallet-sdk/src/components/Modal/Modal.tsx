import React, { useState } from "react";
import { styles } from "./style";

const Modal = (props: any) => {
  return (
    <div>
      {props.isVisible ? (
        <div>
          <styles.ModalViewer>{props.children}</styles.ModalViewer>
        </div>
      ) : (
        <div>
          <styles.ModalNotViewer>{props.children}</styles.ModalNotViewer>
        </div>
      )}
    </div>
  );
};

export default Modal;
