import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/solid'

function LessonSummary(props) {
  return (
    <section key={props.lesson.id} className="summary">
      <Link
        className="no-underline cursor-pointer"
        to={'/courses/' + props.courseId + '/lessons/' + props.lesson.id}
      >
        <div>
          <div className="title">
            <h2>
              {props.num}. {props.lesson.title}
            </h2>
            <CheckCircleIcon
              className={props.lesson.complete ? 'complete' : ''}
            />
          </div>
          <p>{props.lesson.meta.description}</p>
        </div>
      </Link>
    </section>
  )
}

export default LessonSummary
