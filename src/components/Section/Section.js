import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={Styles.section}>
    <h2 className={Styles.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
