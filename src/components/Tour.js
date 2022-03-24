import ReactJoyride from 'react-joyride'
import { useState } from 'react'
import './Tour.css'
import Home200 from '../tour/Home200'
import Course200 from '../tour/Course200'
import Lesson200 from '../tour/Lesson200'
import Home401 from '../tour/Home401'
import Course401 from '../tour/Course401'
import Lesson401 from '../tour/Lesson401'

const data = {
  Home200,
  Home401,
  Course200,
  Course401,
  Lesson200,
  Lesson401,
}

const styles = {
  options: {
    arrowColor: '#fff',
    backgroundColor: '#fff',
    primaryColor: '#f04',
    textColor: '#333',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    beaconSize: 36,
    zIndex: 100,
  },
}

const locale = {
  back: 'Back',
  close: 'Close',
  last: 'Okay',
  next: 'Next',
  open: 'Open the dialog',
  skip: 'Skip',
}

function Tour(props) {
  const key = props.page + props.status
  const [steps] = useState(data[key])
  if (steps.length) {
    return (
      <ReactJoyride
        steps={steps}
        continuous={true}
        styles={styles}
        locale={locale}
        disableCloseOnEsc={true}
        hideCloseButton={true}
        showProgress={true}
      />
    )
  } else {
    return <div />
  }
}

export default Tour
