import Comp2 from "./Comp2"
import propTypes from 'prop-types'


const Student = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <Comp2 name= {props.name} />
    </div>
  )
}

Student.propTypes = {
  name: propTypes.string,
  age : propTypes.number
}

// Student.defaultProps = {
//   name: "name",
//   age : 0
// }

export default Student
