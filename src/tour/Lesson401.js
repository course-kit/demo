const Lesson401 = [
  {
    target: '.LessonNoAccess',
    placement: 'bottom',
    disableBeacon: true,
    content: (
      <div>
        <p>
          Lesson content is restricted to users who are logged in and enrolled.
        </p>
        <p>
          This allows you to paywall your course and utilize user meta data to
          personalize the course.
        </p>
      </div>
    ),
    title: 'Paywall',
  },
  {
    title: 'Log in',
    target: '.button.auth',
    content: (
      <div>
        <p>
          Let's now log into this course using a test account. Click the button
          and use these credentials on the login page:
        </p>
        <p>
          <strong>Username:</strong> demo@test.com
          <br />
          <strong>Password:</strong> demo1234
        </p>
      </div>
    ),
  },
]

export default Lesson401
