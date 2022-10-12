import React from 'react'

const Buttons = () => {
    return (
        <div>
            <div className="controls">
                <div className="control active-btn" data-id="home">
                    <i className="fas fa-home" />
                </div>
                <div className="control" data-id="about">
                    <i className="fas fa-user" />
                </div>
                <div className="control" data-id="portfolio">
                    <i className="fas fa-briefcase" />
                </div>
                <div className="control" data-id="blogs">
                    <i className="far fa-newspaper" />
                </div>
                <div className="control" data-id="contact">
                    <i className="fas fa-envelope-open" />
                </div>
            </div>
         
        </div>
    )
}

export default Buttons