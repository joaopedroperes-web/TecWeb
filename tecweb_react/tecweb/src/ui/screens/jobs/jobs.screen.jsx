import { Navbar } from '../../components/navbar/navbar.component'
import { useNavigate } from 'react-router'
import './jobs.css'
import facebookLogo from '../../../assets/images/svg/job/facebook.svg'
import dribbleLogo from '../../../assets/images/svg/job/dribble.svg'
import paypalLogo from '../../../assets/images/svg/job/paypal.svg'
import spotifyLogo from '../../../assets/images/svg/job/spotify.svg'
import tokopediaLogo from '../../../assets/images/svg/job/tokopedia.svg'

export const Jobs = () => {
    const navigation = useNavigate();

    return (
        <>
            <nav class="nav-bar container">
                <a href="/" onClick={navigation("/")}>
                    <img class="nav-bar--logo"
                        src="https://uploads-ssl.webflow.com/643555a120509a18b1817654/64355624c2464482e15d3880_PGRAMIN_IMG.png"
                        alt="Logo PGRAMIN" />
                </a>
                <div className="nav-bar--buttons-wrapper">
                    <button className="black-button" onClick={() => navigation("/")}>Logout</button>
                    <button className="black-button" onClick={() => navigation("/profile")}>Profile</button>
                </div>
            </nav>

            <header>
                <h1 class="header-title">
                    ENCONTRE O <br /> <span>TRABALHO PERFEITO</span> <br /> PARA VOCÊ
                </h1>
            </header>

            <div class="outside-div">
                <div class="search-wrapper">
                    <div class="search-box">
                        <div class="search-card">
                            <input class="search-input" type="text" placeholder="Job title or keywords" />
                            <button class="search-button">Search</button>
                        </div>
                    </div>
                </div>


                <div class="filter-box">
                    <div class="filter-dropdown">
                        <select class="filter-select" id="job-level" name="job-level">
                            <option>Job level</option>
                            <option>Entry</option>
                            <option>Mid-Senior</option>
                            <option>Director</option>
                        </select>
                        <select class="filter-select" id="job-function" name="job-function">
                            <option>Job Function</option>
                            <option>IT</option>
                            <option>Management</option>
                            <option>Education</option>
                        </select>
                        <select class="filter-select" id="employment" name="employment">
                            <option>Employment Type</option>
                            <option>Intern</option>
                            <option>Part Time</option>
                            <option>Full Time</option>
                        </select>

                        <select class="filter-select" id="location" name="location">
                            <option>Locations</option>
                            <option>Remote</option>
                            <option>US</option>
                            <option>UK</option>
                        </select>

                        <select class="filter-select" id="education" name="education">
                            <option>Education</option>
                            <option>High School</option>
                            <option>Bachelor's degree</option>
                            <option>Master's degree</option>
                        </select>
                    </div>

                    <div class="filter-chosen">
                        <div class="chosen-card">
                            Remote <i class="fas fa-times-circle"></i>
                        </div>
                        <div class="chosen-card">
                            Full time <i class="fas fa-times-circle"></i>
                        </div>
                        <div class="chosen-card">
                            Financial Tech <i class="fas fa-times-circle"></i>
                        </div>
                        <div class="chosen-card">
                            Entry level <i class="fas fa-times-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
            <section class="job-list" id="jobs">
                <div class="job-card">
                    <div class="job-name">
                        <img src={facebookLogo} class="job-profile" />
                        <div class="job-detail">
                            <h4>Facebook</h4>
                            <h3>Mechanivel Engineer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="job-label">
                        <a href="#" class="label-a">HTML</a>
                        <a href="#" class="label-b">CSS</a>
                        <a href="#" class="label-c">JS</a>
                    </div>
                    <div class="job-posted">
                        Posted 55 min ago
                    </div>
                </div>

                <div class="job-card">
                    <div class="job-name">
                        <img src={paypalLogo} class="job-profile" />
                        <div class="job-detail">
                            <h4>Paypal</h4>
                            <h3>Front End Engineer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="job-label">
                        <a href="#" class="label-a">HTML</a>
                        <a href="#" class="label-b">CSS</a>
                        <a href="#" class="label-c">JS</a>
                    </div>
                    <div class="job-posted">
                        Posted 2 min ago
                    </div>
                </div>

                <div class="job-card">
                    <div class="job-name">
                        <img src={spotifyLogo} class="job-profile" />
                        <div class="job-detail">
                            <h4>Spotify</h4>
                            <h3>Java Back-End Engineer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="job-label">
                        <a href="#" class="label-a">HTML</a>
                        <a href="#" class="label-b">CSS</a>
                        <a href="#" class="label-c">JS</a>
                    </div>
                    <div class="job-posted">
                        Posted 4 days ago
                    </div>
                </div>

                <div class="job-card">
                    <div class="job-name">
                        <img src={tokopediaLogo} class="job-profile" />
                        <div class="job-detail">
                            <h4>Tokopedia</h4>
                            <h3>UI UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="job-label">
                        <a href="#" class="label-a">HTML</a>
                        <a href="#" class="label-b">CSS</a>
                        <a href="#" class="label-c">JS</a>
                    </div>
                    <div class="job-posted">
                        Posted an hour ago
                    </div>
                </div>

                <div class="job-card">
                    <div class="job-name">
                        <img src={dribbleLogo} class="job-profile" />
                        <div class="job-detail">
                            <h4>Dribble</h4>
                            <h3>UI UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="job-label">
                        <a href="#" class="label-a">HTML</a>
                        <a href="#" class="label-b">CSS</a>
                        <a href="#" class="label-c">JS</a>
                    </div>
                    <div class="job-posted">
                        Posted 10 days ago
                    </div>
                </div>
                <button class="job-more">More list</button>
            </section>
        </>
    )
}    
