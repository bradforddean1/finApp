import React from 'react';
import './Chart.css'
import PropTypes from 'prop-types'

/**
 *
 *@component
 */
function Chart(props) {
    return (
        <div className='Chart'>
        {/* content goes here */}
        </div>
    );
}

Chart.propTypes = {
  /**
   * Example prop
   */
  example: PropTypes.string.isRequired,
}

Chart.defaultProps = {}

export default Chart;
