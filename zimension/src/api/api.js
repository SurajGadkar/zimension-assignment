export const getProjectById = (projects, id) => {
  return projects?.find((project) => Number(project.id) === Number(id));
};
