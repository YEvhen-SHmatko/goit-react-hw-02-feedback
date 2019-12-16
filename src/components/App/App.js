import React, { Component } from 'react';
// import shortid from 'shortid';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const { goodId, neutralId, badId } = this.handleIds;
    const total = this.countTotalFeedback();
    const percentage = Number(
      this.countPositiveFeedbackPercentage().toFixed(0),
    );
    return (
      <>
        <Section
          // className={SectionStyles}
          title="Please leave feedback"
        >
          <FeedbackOptions
            // className={FeedbackOptionsStyles}
            options={this.state}
            onLeaveFeedback={this.handleBtnClick}
          />
          {this.countTotalFeedback() < 1 ? (
            <Notification
              // className={NotificationStyles}
              message="No feedback given"
            />
          ) : (
            <Statistics
              // className={StatisticsStyles}
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </>
    );
  }
}
