import Image from "next/image";
import styles from "./About.module.scss";
import { about, tools } from "./constants";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h1>
        About <span>Me</span>
      </h1>
      <p>{about}</p>
      <h1 className={styles.tech}>Technologies</h1>
      <div className={styles.tools}>
        {tools.map((tool) => (
          <Image
            key={tool.id}
            src={tool.path}
            alt={tool.label}
            width={40}
            height={40}
            className={styles.tool}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
