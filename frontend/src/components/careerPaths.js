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
        return json.data.forEach(careerPath => {
          this.careerPaths.push({
            id: careerPath.id,
            career_track: careerPath.attributes.career_track
          });
        });
      })
      .then(() => this.render());
  }

  render() {
    const careerPathContainer = document.getElementById(
      "career-path-container"
    );
    const list = document.createElement("ul");
    list.classList.add("list-group");
    this.careerPaths.forEach(careerPath => {
      const item = document.createElement("li");
      item.innerHTML = careerPath.career_track;
      item.classList.add("list-group-item");
      list.appendChild(item);
    });
    careerPathContainer.appendChild(list);
  }
}
