import PropTypes from "prop-types";

const Options = ({updateFeedback, resetFeedback, totalFeedback}) =>{
    return (
        <div>
            <button type="button"
            onClick={()=> updateFeedback("good")}
            >Good</button>
            <button type="button"
            onClick={()=> updateFeedback("neutral")}
            >Neutral</button>
            <button type="button"
            onClick={()=> updateFeedback("bad")}
            >Bad</button>
        {totalFeedback > 0 ? (
            <button type="button"
            onClick={()=> resetFeedback()}
            >Reset</button>) : null}
            
            
        </div>
    )
}
Options.propTypes = {
    updateFeedback: PropTypes.func.isRequired,
    resetFeedback: PropTypes.func.isRequired,
    totalFeedback: PropTypes.number.isRequired,
  }

  export default Options;
    