class CareerPaths {
  constructor() {
    this.careerPaths = [];
    this.adapter = new CareerPathAdapter();
    this.fetchAndLoadCareerPath();
  }

  fetchAndLoadCareerPath() {
    const careerPaths = this.adapter.getCareerPaths().then(json => {
      console.log(json);
    });
  }
}
