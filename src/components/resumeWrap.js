
import React from 'react'
import ResumeInner from './resumeInner'

export default function resumeWrap({ title, innerCont, viewBox, path }) {
  return (
    <div className='resume-wrap'>
      <h3 className="title">
        <span>
          <svg viewBox={viewBox}>
            <path d={path} />
          </svg>
        </span>
        {title}
      </h3>
      {innerCont.map(obj => <ResumeInner
        name={obj.workName}
        period={obj.period}
        desc={obj.desc}
      />)}
    </div>
  )
}
