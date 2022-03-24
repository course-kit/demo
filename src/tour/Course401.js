const Course401 = [
  {
    target: 'body',
    placement: 'center',
    content: (
      <div>
        <p>
          In this template, courses have their own dedicated page showing course
          info, lesson summaries, etc.
        </p>
        <p>
          Again, all this content is configured in the dashboard and fetched via
          the API.
        </p>
      </div>
    ),
    title: 'Course page',
  },
  {
    target: '.button.primary',
    placement: 'left',
    content: (
      <div>
        <p>
          You can enroll a user into a course with the CourseKit API using
          whatever flow suits your needs.
        </p>
        <p>
          For example, you could link this button to a Stripe checkout and
          enroll the student in a callback once they've paid.
        </p>
      </div>
    ),
    title: 'Enrollment',
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

export default Course401
