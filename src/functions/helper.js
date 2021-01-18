const getDepartmentOptions = (departments) => {
  return departments ? departments.map((d) => d.name) : [];
};

const getDescriptionOptions = (selected) => {
  return (selected && selected.tasks ? selected.tasks : []).concat(["Custom"]);
};

const getNurseOptions = (nurses) => {
  return nurses ? nurses.map((n) => n.name) : [];
};

const findDepartment = (departments, selected) => {
  return departments && departments.find((d) => d.name === selected);
};

const findNurse = (nurses, selected) => {
  return nurses && nurses.find((n) => n.name === selected);
};

const getDates = () => {};

const getTimes = () => {};

export default {
  getDepartmentOptions,
  getDescriptionOptions,
  getNurseOptions,
  findDepartment,
  findNurse,
};
