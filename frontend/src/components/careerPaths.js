class CareerPaths {
  constructor() {
    this.careerPaths = [];
    this.adapter = new CareerPathAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadCareerPaths();
  }

  initBindingsAndEventListeners() {
    this.careerPathContainer = document.getElementById("career-path-container");
    this.courseForm = document.getElementById("new-course-form");
    this.courseTitle = document.getElementById("course-title");
    this.courseUrl = document.getElementById("course-url");
    this.careerPathContainer.addEventListener("click", event => {
      this.careerPathId = event.target.dataset.id;
      this.renderCourses(this.careerPathId);
    });
    this.courseForm.addEventListener("submit", this.createCourse.bind(this));
  }

  fetchAndLoadCareerPaths() {
    const careerPaths = this.adapter
      .getCareerPaths()
      .then(json => {
        json.data.forEach(careerPath =>
          this.careerPaths.push(new CareerPath(careerPath))
        );
      })
      .then(() => this.render());
  }

  selectCareerPath(careerPathId) {
    const id = document.getElementById("career-path-id");
    id.value = careerPathId;
  }

  renderCourses(careerPathId) {
    const careerPath = this.careerPaths.find(
      careerPath => careerPath.id === careerPathId
    );
    var courses = new Courses(careerPath);
  }

  render() {
    this.careerPathContainer.innerHTML = this.careerPaths
      .map(careerPath => careerPath.renderLi())
      .join(" ");
  }

  createCourse(e) {
    e.preventDefault();
    const course = {
      title: this.courseTitle.value,
      url: this.courseUrl.value,
      career_path_id: this.careerPathId
    };
    const careerPath = this.careerPaths.find(
      careerPath => careerPath.id === course.career_path_id
    );
    this.adapter
      .createCourse(course)
      .then(c => {
        careerPath.courses.push(new Course(c.data));
      })
      .then(() => careerPath.renderCourses());
  }
}
