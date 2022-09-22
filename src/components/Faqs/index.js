// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faqs">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
