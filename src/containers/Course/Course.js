import React, { Component } from "react";

class Course extends Component {
  render() {
    console.log(this.props);

    const params = new URLSearchParams(window.location.search);
    const title = params.get("name");

    return (
      <div>
        <h1>{title}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
