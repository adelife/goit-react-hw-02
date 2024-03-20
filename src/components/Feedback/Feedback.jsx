import PropTypes from "prop-types";


const Feedback= ({feedback, total, positive}) => {
    return (<div>
    <div>Good: {feedback.good}</div>
    <div>Neutral: {feedback.neutral}</div>
    <div>Bad: {feedback.bad}</div>
    <div>Total: {total}</div>
    <dir>Positive: {positive}%</dir>
        </div>

    )
}

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
      }).isRequired,
      total: PropTypes.number.isRequired,
      positive: PropTypes.number.isRequired,
}

export default Feedback;