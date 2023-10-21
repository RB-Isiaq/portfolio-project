import { render, screen } from '@testing-library/react';

import Projects from '@/components/Projects/Projects';
import { TestId } from '@/components/Projects/constants';

describe('Projects component', () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it('shows the Projects section in the document', () => {
    const ProjectsSection = screen.getByTestId(TestId.PROJECTS_ID);
    expect(ProjectsSection).toBeInTheDocument();
  });

  it('shows all my projects', () => {
    const projectsContainer = screen.getByTestId(TestId.PROJECTS_CONTAINER_ID);
    const project = screen.getAllByTestId(TestId.PROJECT_ID);
    expect(projectsContainer).toBeInTheDocument();
  });
});
