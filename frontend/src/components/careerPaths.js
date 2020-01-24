class CareerPaths {
  constructor() {
    this.careerPaths = [];
    this.adapter = new CareerPathAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadCareerPaths();
  }

  initBindingsAndEventListeners() {
    this.careerPathContainer = document.getElementById("career-path-container");
    this.careerPathContainer.addEventListener("click", event => {
      this.careerPathId = event.target.dataset.id;
      this.renderCourses(this.careerPathId);
    });
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
}
