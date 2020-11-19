import React, { cloneElement } from "react"
import PropTypes from "prop-types"

export default class Credit extends React.Component {
  render() {
    return (
      <div className="credit">Based on the original <a href="https://swagger.io/tools/swagger-ui/" alt="Swagger UI">Swagger-UI</a></div>
    );
  }
}

Credit.propTypes = {
  getComponent: PropTypes.func.isRequired,
}
