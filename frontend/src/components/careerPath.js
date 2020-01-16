class CareerPath {
  constructor(careerPathJSON) {
    this.id = careerPathJSON.id;
    this.name = careerPathJSON.attributes.name;
    this.courses = [];
  }

  renderLi() {
    return `<li data-id=${this.id} class="list-group-item">${this.name}</li>`;
  }

  renderCourses() {
    var courseContainer = document.getElementById("course-container");
    courseContainer.innerHTML = this.courses.map(course => course.render());
  }
}
