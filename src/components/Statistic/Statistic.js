import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistic.module.css';

const Statistic = ({ label, value }) => (
  <li className={Styles.item}>
    <span className={Styles.label}>{label}</span>
    {label !== 'Positive feedback' ? (
      <div className={Styles.value}>{value}</div>
    ) : (
      <div className={Styles.value}>{value} &#37;</div>
    )}
  </li>
);
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default Statistic;
