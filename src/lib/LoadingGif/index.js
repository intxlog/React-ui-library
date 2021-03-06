import React from 'react'
// import PropTypes from 'prop-types'

//import css
import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class LoadingGif extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <svg width='150' height='150' viewBox='0 0 210 210' xmlns='http://www.w3.org/2000/svg'>
          <path d='M105,209 C76.9270199,209 50.6162055,197.819766 31.2215006,178.298934 C11.991353,158.943729 1,132.836116 1,105 C1,47.562386 47.562386,1 105,1 C162.437614,1 209,47.562386 209,105 C209,162.437614 162.437614,209 105,209 Z M105,201 C158.019336,201 201,158.019336 201,105 C201,51.980664 158.019336,9 105,9 C51.980664,9 9,51.980664 9,105 C9,130.701706 19.1408752,154.78919 36.8966592,172.660443 C54.8045328,190.684775 79.0796926,201 105,201 Z' fill='#cccccc'></path>
          <path d='M105,209 C162.437614,209 209,162.437614 209,105 C209,47.562386 162.437614,1 105,1 C47.562386,1 1,47.562386 1,105 C1,107.209139 2.790861,109 5,109 C7.209139,109 9,107.209139 9,105 C9,51.980664 51.980664,9 105,9 C158.019336,9 201,51.980664 201,105 C201,158.019336 158.019336,201 105,201 C102.790861,201 101,202.790861 101,205 C101,207.209139 102.790861,209 105,209 Z' fill='#7f7f7f'>
            <animateTransform
              attributeType='xml'
              attributeName='transform'
              type='rotate'
              from='0 105 105'
              to='360 105 105'
              dur='1.1s'
              repeatCount='indefinite'
            />
          </path>
        </svg>
      </div>
    )
  }
}

// //rules for props being passed in
// Example.propTypes = {
//
// }
//
// // Specifies the default values for props:
// Example.defaultProps = {
//
// }

//maintain the name for documentation purposes
LoadingGif.displayName = 'LoadingGif'

export default LoadingGif