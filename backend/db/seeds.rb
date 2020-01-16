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
    {title: "Amazon Leadership Principles", url: "https://www.youtube.com/embed/B-xdfQv3I1k"},
    {title: "AWS In 10 Minutes", url: "https://www.youtube.com/embed/r4YIdn2eTm4"},
    {title: "Introduction to Scrum", url: "https://www.youtube.com/embed/9TycLR0TqFA"},
    {title: "Software Testing", url: "https://www.youtube.com/embed/goaZTAzsLMk"},
    {title: "Introduction to Project Management", url: "https://www.youtube.com/embed/BOU1YP5NZVA"},
    {title: "The Amazon Playbook for Becoming a Rockstar PM", url: "https://www.youtube.com/embed/HT9k2510CeU"},
    {title: "How to Think Product Analytics in PM Interviews", url: "https://www.youtube.com/embed/k87SPgq-me4"}
  ]
)