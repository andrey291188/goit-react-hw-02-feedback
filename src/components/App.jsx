import { Component } from 'react';
import Section from './SectionTitle/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}

export default App;
