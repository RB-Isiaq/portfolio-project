import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard';
import { projectTimeline } from './constants';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.heading}>
        <span>My </span> Projects
      </h1>

      <div className={styles.container}>
        {projectTimeline.map((project) => (
          <ProjectCard
            key={project.id}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
