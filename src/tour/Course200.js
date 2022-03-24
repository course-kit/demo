const Course200 = [
  {
    title: 'Personalization',
    target: '.summary .title svg',
    content: (
      <div>
        <p>
          The course page can utilize user meta data for personalization. For
          example, showing course progress or completed lesson indicators.
        </p>
      </div>
    ),
    disableBeacon: true,
  },
  {
    target: '.button.primary',
    placement: 'left',
    content: (
      <div>
        <p>
          Click the Continue button which will take you to the next incomplete
          lesson.
        </p>
      </div>
    ),
    title: 'Reumse lesson',
  },
]

export default Course200
