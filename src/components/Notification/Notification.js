import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div>
      <h2 className={Styles.title}>{message}</h2>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
