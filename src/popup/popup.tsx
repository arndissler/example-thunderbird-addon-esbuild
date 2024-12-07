import styles from "./popup.module.css";

export const Popup = () => (
  <div className={styles.container}>
    <div className={styles.textWrapper}>
      If this example has helped you, please consider donating to{" "}
      <a href="https://www.paypal.com/donate?hosted_button_id=F4C4A93H2KFYA">
        support the author
      </a>
      .
    </div>
  </div>
);
