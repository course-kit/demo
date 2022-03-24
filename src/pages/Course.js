import { Link, useParams } from 'react-router-dom'
import { useAsync } from 'react-async'
import { fetchCourse, fetchUser } from '../ck'
import Loading from '../components/Loading'
import LessonSummary from '../components/LessonSummary'
import CourseHeader from '../components/CourseHeader'
import Error from '../components/Error'
import Tour from '../components/Tour'

function Course() {
  const user = useAsync(fetchUser)
  let { courseId } = useParams()
  const { data, error, isPending } = useAsync({
    promiseFn: fetchCourse,
    courseId,
  })
  if (data) {
    const { course } = data
    const { title, lessons } = course
    return (
      <div className="Course page">
        <Tour page="Course" status={user.data.status} />
        <header>
          <p>
            <Link to={'/'}>Back to courses</Link>
          </p>
          <h1>{title}</h1>
          <CourseHeader course={course} />
        </header>
        <div>
          {lessons.map((lesson, index) => (
            <LessonSummary
              key={lesson.id}
              courseId={courseId}
              lesson={lesson}
              num={index + 1}
            />
          ))}
        </div>
      </div>
    )
  }
  if (error) {
    return <Error />
  }
  if (isPending) {
    return <Loading />
  }
}

export default Course
