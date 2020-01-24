class Courses {
  constructor(careerPath) {
    this.careerPath = careerPath;
    this.adapter = new CourseAdapter(this.careerPath);
    this.initBindingsAndEventListeners();
    this.fetchAndLoadCourses(careerPath);
  }

  initBindingsAndEventListeners() {
    this.courseForm = document.getElementById("new-course-form");
    this.courseTitle = document.getElementById("course-title");
    this.courseUrl = document.getElementById("course-url");
    this.courseForm.addEventListener("submit", this.createCourse.bind(this));
  }

  fetchAndLoadCourses(careerPath) {
    const courses = this.adapter
      .getCourses()
      .then(json => {
        json.data.map(course => {
          this.careerPath.courses.push(new Course(course));
        });
      })
      .then(() => this.careerPath.renderCourses());
  }

  createCourse(e) {
    e.preventDefault();
    const course = {
      title: this.courseTitle.value,
      url: this.courseUrl.value,
      career_path_id: this.careerPath.id
    };
    this.adapter
      .createCourse(course)
      .then(c => {
        this.careerPath.courses.push(new Course(c.data));
      })
      .then(() => this.careerPath.renderCourses());
  }
}
