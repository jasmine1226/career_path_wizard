class Courses {
  constructor(careerPath) {
    this.careerPath = careerPath;
    this.adapter = new CourseAdapter(this.careerPath);
    this.initBindingsAndEventListeners();
    this.renderCourses();
  }

  initBindingsAndEventListeners() {
    this.courseForm = document.getElementById("new-course-form");
    this.courseTitle = document.getElementById("course-title");
    this.courseUrl = document.getElementById("course-url");
    this.courseContainer = document.getElementById("course-container");
    this.courseForm.addEventListener("submit", this.createCourse.bind(this));
  }

  createCourse(e) {
    e.preventDefault();
    const course = {
      title: this.courseTitle.value,
      url: this.courseUrl.value
    };
    this.adapter
      .createCourse(course)
      .then(c => {
        var course = new Course(c.data);
        if (this.careerPath.courses.find(c => c.url === course.url)) {
          alert("There is a duplicate course! This course will not be added.");
        } else {
          this.careerPath.courses.push(course);
        }
      })
      .then(() => this.renderCourses());
  }

  renderCourses() {
    var courseRows = this.careerPath.courses
      .map(course => course.render())
      .join(" ");
    this.courseContainer.innerHTML = `
      <table>
        <thead>
          <th scope="column">Title</th>
          <th scope="column">URL</th>
        </thead>
        <tbody id="course-table-body">
          ${courseRows}
        </tbody>
      </table>
    `;
  }
}
