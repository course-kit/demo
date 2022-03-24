const Lesson200 = [
  {
    target: 'body',
    placement: 'center',
    content: (
      <div>
        <p>
          In this lesson, we've embedded a Vimeo video. However, CourseKit
          lessons can include any kind of content you like.
        </p>
        <p>
          Content is restricted to users who are logged in and enrolled. If you
          weren't logged in, the content on this page would not be viewable.
        </p>
      </div>
    ),
    title: 'Lesson page',
    disableBeacon: true,
  },
  {
    target: 'body',
    placement: 'center',
    hideBackButton: true,
    hideCloseButton: true,
    content: (
      <div>
        <p>
          This brings us to the end of the tour. Ready to try CourseKit for
          yourself?
        </p>
        <strong>
          <a href="https://coursekit.dev/pricing">Start CourseKit free trial</a>
        </strong>
      </div>
    ),
    title: 'Try CourseKit',
  },
]

export default Lesson200
