import React, { useState } from "react";
import { styles } from "./style";

const Modal = (props: any) => {
  return (
    <div>
      {props.isVisible ? (
        <div>
          <styles.ModalViewer>{props.children}</styles.ModalViewer>
        </div>
      ) : 
        null
      }
    </div>
  );
};

export default Modal;
