import React, { useState, useEffect } from "react";
import { themed } from "../HOC/themed";
import mockdataCourses from "../mockdata/courses";
import Course from "../components/Course";
import Swiper from "react-id-swiper";

const Courses = props => {
  const { classes } = props;
  const [filter, setFilter] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(mockdataCourses);
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  useEffect(() => {
    if (filter) {
      const filteredCoursesArray = mockdataCourses.filter(course =>
        course.keyword.includes(filter)
      );
      setFilteredCourses(filteredCoursesArray);
    }
  }, [filter]);

  return (
    <div className={classes.root}>
      <Swiper
        {...params}
        wrapperClass={classes.wrapper}
        containerClass={classes.container}
      >
        <div className={classes.slide}>
          <div
            className={classes.reactCourse}
            onClick={() => setFilter("react")}
          />
          <div
            className={classes.rubyCourse}
            onClick={() => setFilter("ruby")}
          />
          <div className={classes.goCourse} onClick={() => setFilter("go")} />
        </div>
        <div className={classes.slide}>
          <div className={classes.JSCourse} onClick={() => setFilter("js")} />
          <div
            className={classes.htmlCourse}
            onClick={() => setFilter("html")}
          />
          <div className={classes.cssCourse} onClick={() => setFilter("css")} />
        </div>
        <div className={classes.slide}>
          <div
            className={classes.otherCourse}
            onClick={() => setFilter("other")}
          />
          <div
            className={classes.nodeCourse}
            onClick={() => setFilter("node")}
          />
          <div
            className={classes.pythonCourse}
            onClick={() => setFilter("python")}
          />
        </div>
      </Swiper>
      <div className={classes.coursesGrid}>
        {filteredCourses.map(course => (
          <Course
            title={course.name}
            price={course.price}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default themed("views.Courses", Courses);
