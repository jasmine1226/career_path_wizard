class CareerPath {
  constructor(careerPathJSON) {
    this.id = careerPathJSON.id;
    this.name = careerPathJSON.attributes.name;
  }

  renderLi() {
    return `<li class="list-group-item">${this.name}</li>`;
  }
}
