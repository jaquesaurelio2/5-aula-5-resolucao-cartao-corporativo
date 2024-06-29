import styles from "./index.module.css";
import TwitterIcon from "../../../public/images/twitter.svg";
import FacebookIcon from "../../../public/images/facebook.svg";
import InstagramIcon from "../../../public/images/instagram.svg";
import GitgubIcon from "../../../public/images/github.svg";

export default function Footer({
  twitter,
  facebook,
  instagram,
  github,
  darkMode,
}) {
  const darkModeClass = darkMode ? styles.darkFooter : "";
  return (
    <div className={`${styles.footer} ${darkModeClass}`}>
      {twitter && <img onClick={() => {}} src={TwitterIcon} alt="twitter" />}
      {facebook && <img onClick={() => {}} src={FacebookIcon} alt="facebook" />}
      {instagram && (
        <img onClick={() => {}} src={InstagramIcon} alt="instagram" />
      )}
      {github && <img onClick={() => {}} src={GitgubIcon} alt="github" />}
    </div>
  );
}
