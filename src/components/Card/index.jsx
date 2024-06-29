import styles from "./index.module.css";

import Buttons from "../Buttons";
import Footer from "../Footer";

export default function Card({
  darkMode,
  image,
  name,
  role,
  site,
  email,
  linkedin,
  about,
  interests,
  twitter,
  facebook,
  instagram,
  github,
}) {
  const getDarkModeClass = (className) => (darkMode ? className : "");

  return (
    <div className={`${styles.card} ${getDarkModeClass(styles.darkCard)}`}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.body}>
        <h2 className={`${styles.name} ${getDarkModeClass(styles.darkName)}`}>
          {name}
        </h2>
        <h3 className={styles.role}>{role}</h3>
        <p
          className={`${styles.url} ${getDarkModeClass(styles.darkUrl)}`}
          onClick={() => {}}
        >
          {site}
        </p>
        <Buttons email={email} linkedin={linkedin} />
        <h4 className={`${styles.title} ${getDarkModeClass(styles.darkTitle)}`}>
          Sobre
        </h4>
        <p className={`${styles.text} ${getDarkModeClass(styles.darkText)}`}>
          {about}
        </p>
        <h4 className={`${styles.title} ${getDarkModeClass(styles.darkTitle)}`}>
          Interesses
        </h4>
        <p className={`${styles.text} ${getDarkModeClass(styles.darkText)}`}>
          {interests}
        </p>
      </div>
      <Footer
        darkMode={darkMode}
        facebook={facebook}
        github={github}
        instagram={instagram}
        twitter={twitter}
      />
    </div>
  );
}
