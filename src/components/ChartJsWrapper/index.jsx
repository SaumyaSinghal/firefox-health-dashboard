import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    // This div helps with canvas size changes
    // https://www.chartjs.org/docs/latest/general/responsive.html#important-note
    chartContainer: {
      // Two graphs side by side should fit on a 13" screen
      width: '48vw',
      // Do not let it squeeze too much and deform
      minWidth: '400px',
    },
    title: {
      margin: '1rem 0 0 0',
    },
};

const ChartJsWrapper = ({ classes, data, options, title, type = 'line' }) => (
  <div className={classes.chartContainer}>
    {title && <h2 className={classes.title}>{title}</h2>}
    <Chart
      type={type}
      data={data}
      height={80}
      options={options}
    />
  </div>
);

// The properties are to match ChartJs properties
ChartJsWrapper.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({
      datasets: PropTypes.arrayOf(
        PropTypes.shape({
          // There can be more properties than data and value,
          // however, we mainly care about these as a minimum requirement
          data: PropTypes.arrayOf(
            PropTypes.shape({
              x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.instanceOf(Date),
              ]).isRequired,
              y: PropTypes.number.isRequired,
            }),
          ),
          label: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    options: PropTypes.shape({}).isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
};

export default withStyles(styles)(ChartJsWrapper);
