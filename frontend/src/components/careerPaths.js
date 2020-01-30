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
      var careerPath = this.careerPaths.find(
        careerPath => careerPath.id === event.target.dataset.id
      );
      careerPath.loadCourses();
    });
  }

  fetchAndLoadCareerPaths() {
    var careerPaths = this.adapter
      .getCareerPaths()
      .then(json => {
        json.data.forEach(careerPath =>
          this.careerPaths.push(new CareerPath(careerPath))
        );
      })
      .then(() => this.render())
      .catch(function(error) {
        alert(error.message);
      });
  }

  render() {
    this.careerPathContainer.innerHTML = this.careerPaths
      .map(careerPath => careerPath.renderLi())
      .join(" ");
  }
}
