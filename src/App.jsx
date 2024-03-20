import { useState , useEffect} from 'react'
import Description from './components/Description/Descriotion'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'


function App() {
  
  const[feedback, setFeedback] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  )

  useEffect(() => {
    const stringFeedback = localStorage.getItem("feedback")
    if(stringFeedback){
      setFeedback(JSON.parse(stringFeedback))
      console.log(stringFeedback);
    }
  },[]) 

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType] : prevFeedback[feedbackType] +1
    }))
   }

 

const totalFeedback = feedback.good + feedback.neutral + feedback.bad
const prosentFeedback = Math.round((feedback.good / totalFeedback) * 100)
const resetFeedback = ()=>{
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0
  })
}
useEffect(() => {
  localStorage.setItem("feedback", JSON.stringify(feedback))
}, [feedback])




  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={prosentFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App
