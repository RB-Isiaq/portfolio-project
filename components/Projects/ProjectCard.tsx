import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import { IProject } from '@/interfaces';

const ProjectCard = ({
  title,
  description,
  imgPath,
  github,
  live,
  dataType,
}: IProject) => {
  return (
    <div className={styles.card} data-testid={dataType}>
      <div className="image">
        <Image
          src={imgPath}
          alt={title}
          width={300}
          height={250}
          className={styles.img}
        />
      </div>
      <div className={styles.projectInfo}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}> {description}</p>
        <div className="project-tech-tools">
          <a rel="noopener" href={live} target="_blank">
            Live
          </a>
          <a rel="noopener" href={github} target="_blank">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
