# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CareerPath.create (
  [
    {name: "Product Manager"},
    {name: "Program Manager"},
    {name: "Solution Architect"},
    {name: "Software Engineer"},
    {name: "Software Test Engineer"}
  ]
)

Course.create (
  [
    {title: "Amazon Leadership Principles", url: "https://www.youtube.com/watch?v=B-xdfQv3I1k"},
    {title: "AWS In 10 Minutes", url: "https://www.youtube.com/watch?v=r4YIdn2eTm4"},
    {title: "Introduction to Scrum", url: "https://www.youtube.com/watch?v=9TycLR0TqFA"},
    {title: "Software Testing", url: "https://www.youtube.com/watch?v=goaZTAzsLMk"},
    {title: "Introduction to Project Management", url: "https://www.youtube.com/watch?v=BOU1YP5NZVA"},
    {title: "The Amazon Playbook for Becoming a Rockstar PM", url: "https://www.youtube.com/watch?v=HT9k2510CeU"},
    {title: "How to Think Product Analytics in PM Interviews", url: "https://www.youtube.com/watch?v=k87SPgq-me4"}
  ]
)

CareerPathCourse.create(
  [
    {career_path_id: 1, course_id: 1},
    {career_path_id: 1, course_id: 3},
    {career_path_id: 1, course_id: 7},
    {career_path_id: 2, course_id: 1},
    {career_path_id: 2, course_id: 5},
    {career_path_id: 2, course_id: 6},
    {career_path_id: 3, course_id: 1},
    {career_path_id: 3, course_id: 2},
    {career_path_id: 3, course_id: 3},
    {career_path_id: 4, course_id: 1},
    {career_path_id: 4, course_id: 2},
    {career_path_id: 4, course_id: 3},
    {career_path_id: 5, course_id: 1},
    {career_path_id: 5, course_id: 2},
    {career_path_id: 5, course_id: 4}
  ]
)