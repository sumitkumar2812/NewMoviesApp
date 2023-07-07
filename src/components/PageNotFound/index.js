import {Link} from 'react-router-dom'

import './index.css'

const PageNotFound = () => (
  <>
    <div className="not-found-container">
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>
      <div className="button-position">
        <Link to="/">
          <button className="go_to_button" type="button">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default PageNotFound
