import styles from "./index.module.css";
import MailIcon from "../../../public/images/mail.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";

export default function Buttons({ email, linkedin }) {
  const getFullClass = (value) => (!value ? styles.full : "");

  return (
    <div className={styles.buttons}>
      {email && (
        <button
          className={`${styles.button} ${styles.primary} ${getFullClass(
            linkedin
          )}`}
          onClick={() => {}}
        >
          <img className={styles.icon} src={MailIcon} alt="mail icon" />
          Email
        </button>
      )}

      {linkedin && (
        <button
          className={`${styles.button} ${styles.secondary} ${getFullClass(
            email
          )}`}
          onClick={() => {}}
        >
          <img className={styles.icon} src={LinkedinIcon} alt="linkedin icon" />
          Linkedin
        </button>
      )}
    </div>
  );
}
