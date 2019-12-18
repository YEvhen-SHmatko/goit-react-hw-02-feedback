import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistic.module.css';

export default function Statistic({ label, value }) {
  return (
    <li className={Styles.item}>
      <span className={Styles.label}>{label}</span>
      {label !== 'Positive feedback' ? (
        <div className={Styles.value}>{value}</div>
      ) : (
        <div className={Styles.value}>{value} &#37;</div>
      )}
    </li>
  );
}
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
