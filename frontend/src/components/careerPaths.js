class CareerPaths {
  constructor() {
    this.careerPaths = [];
    this.adapter = new CareerPathAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadCareerPaths();
  }

  initBindingsAndEventListeners() {
    this.careerPathContainer = document.getElementById("career-path-container");
    this.careerPathContainer.addEventListener("onmouseover", function(event) {
      console.log(event.target);
      // add active class to li
    });
    this.careerPathContainer.addEventListener("click", e =>
      this.fetchAndLoadCourses(e)
    );
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

  fetchAndLoadCourses(e) {
    const careerPathId = e.target.dataset.id;
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
}
