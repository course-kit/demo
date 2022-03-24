import { Link } from 'react-router-dom'
import { BookmarkIcon } from '@heroicons/react/outline'

function CourseSummary(props) {
  return (
    <section key={props.course.id} className="summary">
      <Link
        className="no-underline cursor-pointer"
        to={'/courses/' + props.course.id}
      >
        <div>
          <div className="title">
            <h2>{props.course.title}</h2>
            <BookmarkIcon className={props.course.enrolled ? 'enrolled' : ''} />
          </div>
          <p>{props.course.meta.description}</p>
        </div>
      </Link>
    </section>
  )
}

export default CourseSummary
