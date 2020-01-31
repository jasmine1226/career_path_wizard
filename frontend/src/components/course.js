class Course {
  constructor(courseJSON) {
    this.id = courseJSON.id;
    this.title = courseJSON.attributes.title;
    this.url = courseJSON.attributes.url;
  }

  render() {
    return `
    <tr>
      <td>${this.title}</td>
      <td><a href="${this.url}">${this.url}</a></td>
    </tr>`;
  }
}
