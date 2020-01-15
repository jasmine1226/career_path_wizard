class CareerPaths {
  constructor() {
    this.careerPaths = [];
    this.adapter = new CareerPathAdapter();
    this.fetchAndLoadCareerPath();
  }

  fetchAndLoadCareerPath() {
    const careerPaths = this.adapter
      .getCareerPaths()
      .then(json => {
        json.data.forEach(careerPath =>
          this.careerPaths.push(new CareerPath(careerPath))
        );
      })
      .then(() => this.render());
  }

  render() {
    const list = document.getElementById("career-path-container");
    list.innerHTML = this.careerPaths
      .map(path => `<li class="list-group-item">${path.name}</li>`)
      .join(" ");
  }
}
