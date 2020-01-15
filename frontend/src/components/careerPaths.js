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
        console.log(this.careerPaths);
      })
      .then(() => this.render());
  }

  render() {
    const list = document.getElementById("career-path-container");
    this.careerPaths.forEach(careerPath => {
      const item = document.createElement("li");
      item.innerHTML = careerPath.name;
      item.classList.add("list-group-item");
      list.appendChild(item);
    });
  }
}
