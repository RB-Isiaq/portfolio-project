import { render, screen } from '@testing-library/react';

import Projects from '@/components/Projects/Projects';
import { TestId } from '@/components/Projects/constants';

describe('Projects component', () => {
  it('shows the Projects section in the document', () => {
    render(<Projects />);
    const ProjectsSection = screen.getByTestId(TestId.PROJECTS_ID);
    expect(ProjectsSection).toBeInTheDocument();
  });

  it('shows all my projects', () => {
    render(<Projects />);
    const projectsContainer = screen.getByTestId(TestId.PROJECTS_CONTAINER_ID);
    expect(projectsContainer).toBeInTheDocument();
  });
});
