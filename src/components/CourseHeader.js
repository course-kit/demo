import { Link } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import FeatureDisabled from '../tour/FeatureDisabled'
import React from 'react'

function CourseHeader(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const nextLessonPath = `/courses/${props.course.id}/lessons/${props.course.nextLessonId}`
  const isFirstLesson = props.course.lessons[0].id === props.course.nextLessonId
  if (props.course.enrolled) {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.course.html }} />
        <Link className="button primary icon" to={nextLessonPath}>
          <span>{isFirstLesson ? 'Get started' : 'Continue'}</span>
          <ChevronDoubleRightIcon />
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <button className="button primary icon" onClick={setIsOpen}>
          Enroll now
        </button>
        <FeatureDisabled isOpen={modalIsOpen} closed={setIsOpen} />
      </div>
    )
  }
}

export default CourseHeader
