class CareerPathAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1";
  }

  getCareerPaths() {
    return fetch(this.baseURL + "/career_paths").then(res => res.json());
  }

  getCareerPath(id) {
    return fetch(this.baseURL + "/career_paths/" + id).then(res => res.json());
  }

  getCourses(id) {
    return fetch(this.baseURL + "/career_paths/" + id + "/courses").then(res =>
      res.json()
    );
  }

  createCourse() {}
}
