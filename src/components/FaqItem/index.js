// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isFaqs: false,
  }

  TaggleBtn = () => {
    this.setState(prevState => ({isFaqs: !prevState.isFaqs}))
  }

  render() {
    const {isFaqs} = this.state
    const {details} = this.props
    const {questionText, answerText, id} = details
    return (
      <li>
        <div className="title-btn-container">
          <h1 className="ansr">{questionText}</h1>
          <button type="button" onClick={this.TaggleBtn}>
            {isFaqs ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {isFaqs && (
          <div className="answerText-container">
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
