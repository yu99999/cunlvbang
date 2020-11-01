import React from "react"
import FeedbackCard from "./FeedbackCard"

const Feedback = (props) => {

  return (
    <div style={{padding: "14rem"}}>
      <FeedbackCard>

      </FeedbackCard>
    </div>
  )
}

export default React.memo(Feedback);