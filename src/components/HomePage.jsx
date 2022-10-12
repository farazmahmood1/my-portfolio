import React from 'react'

const HomePage = () => {
    return (
        <div>
            <header className="container header active" id="home">
                <div className="header-content">
                    <div className="left-header">
                        <div className="h-shape" />
                        <div className="image">
                            <img src="./public/img/hero.png" alt />
                        </div>
                    </div>
                    <div className="right-header">
                        <h1 className="name">
                            Hi, I'm <span>Faraz Mahmood. </span>
                            A Web Developer.
                        </h1>
                        <p>
                            React JS Developer with 1 year of experience, Responsive Websites, Coding, Designing and maintaining Databases to enhance the client experience. My primary skills are in Reactjs development with additional NodeJs. I seeking a position as a Front-end Developer to further enhance organizational worth by leveraging my skills and knowledge in Front-end.
                        </p>
                        <div className="btn-con">
                            <a href className="main-btn">
                                <span className="btn-text">Download CV</span>
                                <span className="btn-icon"><i className="fas fa-download" /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomePage