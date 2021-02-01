import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

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
    const {part} = props;
    const {title} = props;
    const {excersises} = props;
    return (
      <div>
        <p>
          <Part part={part} title={title} excersises={excersises} />
        </p>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>
          part={props.part} = {props.title} <br />
          excersises{props.part}={props.excersises}
        </p>
      </div>
    )
  }


  const Total = () => {
    return (
      <div>
        <p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </p>
      </div>
    )
  }



  return (
    <div>
      <Header course={course} />
      <Content part={"1"} title={part1} excersises={exercises1} />
      <Content part={"2"} title={part2} excersises={exercises2} />
      <Content part={"3"} title={part3} excersises={exercises3} />      
      <Total/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
