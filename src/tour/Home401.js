const Home401 = [
  {
    target: 'body',
    placement: 'center',
    title: 'Welcome!',
    content: (
      <div>
        <p>
          Welcome to this mini tour of <strong>CourseKit</strong>.
        </p>
        <p>
          CourseKit is a developer-first platform for creating online courses
          that gives complete freedom with design, UX, and content.
        </p>
        <p>
          This tour will use our <strong>React course template</strong> which is
          easy to extend or customize.
        </p>
      </div>
    ),
  },
  {
    target: '.course-summaries',
    title: 'Content',
    placement: 'bottom',
    content: (
      <div>
        <p>
          This site has two courses. These are created and configured in the{' '}
          <strong>CourseKit dashboard</strong>.
        </p>
        <p>
          Content is retrieved via the <strong>CourseKit API</strong> and then
          rendered in the page.
        </p>
      </div>
    ),
  },
  {
    title: 'User data',
    target: '.summary .title svg',
    content: (
      <div>
        <p>
          The CourseKit API also manages <strong>user data</strong> which helps
          to personalize the site.
        </p>
        <p>
          In a moment when you log in this flag will be checked to show your
          enrollment status.
        </p>
      </div>
    ),
  },
  {
    title: 'Courses',
    target: '.summary:first-child',
    content: (
      <div>
        <p>
          But first, we're going to see the contents of a course. Click on
          either one to continue the tour.
        </p>
      </div>
    ),
  },
]

export default Home401
