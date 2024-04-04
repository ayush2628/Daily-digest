import React from 'react'

const NewsItem = (props) => {

  let { title, desc, imageUrl, url, source, date } = props

  return (
    <div className="card my-3">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text"><small className="text-muted">By {source} on {date}</small></p>
        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-secondary">Read more</a>
      </div>
    </div>
  )
}
export default NewsItem