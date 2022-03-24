import { useAsync } from 'react-async'
import { fetchCourseSummaries, fetchUser } from '../ck'
import Loading from '../components/Loading'
import CourseSummary from '../components/CourseSummary'
import Error from '../components/Error'
import Tour from '../components/Tour'

function Home() {
  const user = useAsync(fetchUser)
  const { data, error, isPending } = useAsync(fetchCourseSummaries)
  if (data) {
    const { courses } = data
    return (
      <div className="Home page">
        <Tour page="Home" status={user.data.status} />
        <header>
          <h1>CourseKit React Template</h1>
        </header>
        <div className="course-summaries">
          {courses.map((course) => (
            <CourseSummary course={course} key={course.id} />
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

export default Home
