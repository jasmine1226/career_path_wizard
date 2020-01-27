class CareerPath {
  constructor(careerPathJSON) {
    this.id = careerPathJSON.id;
    this.name = careerPathJSON.attributes.name;
    this.courses = [];
  }

  renderLi() {
    return `<li data-id=${this.id} class="list-group-item btn btn-default">${this.name}</li>`;
  }

  loadCourses() {
    var courses = new Courses(this);
  }
}
