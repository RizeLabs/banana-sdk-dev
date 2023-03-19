const sendTransactionPopup = () => {
    const transactionEvent = new CustomEvent("userTransaction", { detail: { newState: "new value" } });
    window.dispatchEvent(transactionEvent);
}

export { sendTransactionPopup }