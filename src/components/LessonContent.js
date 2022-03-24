import React from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import Vimeo from '@u-wave/react-vimeo'
import './LessonContent.css'
import FeatureDisabled from '../tour/FeatureDisabled'

function LessonContent(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const { html, meta } = props.lesson
  const { vimeoId } = meta
  function VideoEmbed() {
    if (vimeoId) {
      return <Vimeo video={meta.vimeoId} responsive />
    } else {
      return <div />
    }
  }
  async function completeAndContinue() {
    setIsOpen(true)
  }
  return (
    <div>
      <FeatureDisabled isOpen={modalIsOpen} closed={setIsOpen} />
      <div className="Content">
        <VideoEmbed />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        <button className="button primary icon" onClick={completeAndContinue}>
          <span>Complete and continue</span>
          <ChevronDoubleRightIcon />
        </button>
      </div>
    </div>
  )
}

export default LessonContent
