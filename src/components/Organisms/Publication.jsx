import React from 'react'

const Publication = ({author,title,content,date}) => {
  return (
    <article className="publication flex nowrap s-border-top s-mb-0 s-pt-4    ">
      <div className="publication__container">
        <h2 className="publication_title t3">{title}</h2>
        <span> <b>{author}</b> {date}</span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default Publication
