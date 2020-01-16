class CareerPath {
  constructor(courseJSON) {
    this.id = courseJSON.id;
    this.title = courseJSON.attributes.title;
    this.url = courseJSON.attributes.url;
  }

  render() {
    return `
    <p>${this.title}</p>
    <iframe width="560" height="315" src="${this.url}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}
