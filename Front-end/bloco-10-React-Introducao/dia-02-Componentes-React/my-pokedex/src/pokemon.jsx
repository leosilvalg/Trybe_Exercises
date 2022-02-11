import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className=" border-4 border-slate-600 flex w-80 h-40 items-center min-w-25 mx-10 my-10 rounded-md justify-around">
        <div>
          <p>{`Name: ${name}` }</p>
          <p>{ `Type: ${type}` }</p>
          <p>{ `Weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        </div>
          <img className="w-40" src={ image } alt="" />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    measurement: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
}


export default Pokemon;