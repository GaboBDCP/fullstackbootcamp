import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  // const-definitions
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <p>
          Course name: {props.course}
        </p>
      </div>
    )
  }

  //destructuring props  
  const Content = (props) => {
    const {title} = props;
    const {exercises} = props;
    return (
      <div>
        <p>
          <Part title={title} exercises={exercises} />
        </p>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>
          Part: {props.title} <br />
          Exercises: {props.exercises}
        </p>
      </div>
    )
  }


  const Total = () => {
    return (
      <div>
        <p>
        <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
        </p>
      </div>
    )
  }



  return (
    <div>
      <Header course={course.name} />
      <Content part={"1"} title={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content part={"2"} title={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content part={"3"} title={course.parts[2].name} exercises={course.parts[2].exercises} />      
      <Total/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
