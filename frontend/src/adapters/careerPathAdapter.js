class CareerPathAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/career_paths/";
  }

  getCareerPaths() {
    return fetch(this.baseURL).then(res => res.json());
  }

  getCareerPath(id) {
    return fetch(this.baseURL + id).then(res => res.json());
  }
}
