import React, { Component } from 'react'

const NewsItems = (props) => {
    let { title, description, imgUrl, newsUrl } = props;
    return (
        <div>
            <div className="card" >
                <img src={!imgUrl ? "https://www.oregonlive.com/resizer/Qqkkt1MREPAz_AMSpu_RYoAvVzs=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/CZHOY3JBVJE2HGNHLRJI76DKO4.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More </a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems