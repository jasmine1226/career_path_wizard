class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :url, :tags
end
