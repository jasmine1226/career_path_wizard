class CourseAdapter {
  constructor(careerPath) {
    this.careerPathId = careerPath.id;
    this.baseURL = "http://localhost:3000/api/v1/career_paths/";
  }

  getCourses() {
    return fetch(this.baseURL + this.careerPathId + "/courses").then(res =>
      res.json()
    );
  }

  createCourse(courseInfo) {
    var course = {
      title: courseInfo.title,
      url: courseInfo.url,
      career_path_id: this.careerPathId
    };
    return fetch(this.baseURL + this.careerPathId + "/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(course)
    }).then(res => res.json());
  }
}
