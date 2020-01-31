class CareerPath {
  constructor(careerPathJSON) {
    this.id = careerPathJSON.id;
    this.name = careerPathJSON.attributes.name;
    this.courseContainer = document.getElementById("course-container");
    this.courses = [];
    this.adapter = new CareerPathAdapter();
  }

  renderLi() {
    return `<li data-id=${this.id} class="list-group-item btn btn-default">${this.name}</li>`;
  }

  loadCourses() {
    this.courses = [];
    var courses = this.adapter
      .getCareerPath(this.id)
      .then(json => {
        json.included.map(c => this.courses.push(new Course(c)));
      })
      .then(() => new Courses(this))
      .catch(function(error) {
        alert(error.message);
      });
  }
}
