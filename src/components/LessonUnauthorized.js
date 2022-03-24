function LessonUnauthorized(props) {
  return (
    <div className="LessonNoAccess">
      <div>
        Please{' '}
        <span
          className="underline cursor-pointer"
          onClick={props.user.loginRedirect}
        >
          log in
        </span>{' '}
        or enroll to view this lesson.
      </div>
    </div>
  )
}

export default LessonUnauthorized
