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
      this.selectCarerPath(this.careerPathId);
      this.fetchAndLoadCourses(this.careerPathId);
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

  selectCarerPath(careerPathId) {
    const id = document.getElementById("career-path-id");
    id.value = careerPathId;
  }

  fetchAndLoadCourses(careerPathId) {
    const careerPath = this.careerPaths.find(
      careerPath => careerPath.id === careerPathId
    );
    const courses = this.adapter
      .getCourses(careerPathId)
      .then(json => {
        json.data.map(course => {
          careerPath.courses.push(new Course(course));
        });
      })
      .then(() => careerPath.renderCourses());
  }

  render() {
    this.careerPathContainer.innerHTML = this.careerPaths
      .map(careerPath => careerPath.renderLi())
      .join(" ");
  }

  createCourse(e) {
    e.preventDefault();
    const course = {
      id: this.careerPathId,
      title: this.courseTitle.value,
      url: this.courseUrl.value
    };
    this.adapter.createCourse(course).then(course => {
      console.log(course);
    });
  }
}
