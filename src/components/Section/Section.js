import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={Styles.section}>
      <h2 className={Styles.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
