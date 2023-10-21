import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard';
import { TestId, projectTimeline } from './constants';

const Projects = () => {
  return (
    <section
      id="projects"
      className={styles.projects}
      data-testid={TestId.PROJECTS_ID}
    >
      <h1 className={styles.heading}>
        <span>My </span> Projects
      </h1>

      <div
        className={styles.container}
        data-testid={TestId.PROJECTS_CONTAINER_ID}
      >
        {projectTimeline.map((project) => (
          <ProjectCard
            key={project.id}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
            dataType={TestId.PROJECT_ID}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
