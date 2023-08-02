
import Notification from 'components/Notification/Notification.jsx';
import css from './section.module.css';

const Section = ({ children }) => {
  const { good, neutral, bad } = children[1].props
  console.log();
  return (
    <section>
      <h2 className={css.title_feedback}>Please leave feedback</h2>
      {children[0]}
      <h2 className={css.title_feedback}>Statistics</h2>
      {(good || neutral || bad) ? children[1] : <Notification />}
    </section>
  );
};

export default Section;
