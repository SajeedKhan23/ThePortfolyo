import { useState, useEffect } from "react";

const About = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [skills, setSkills] = useState([]);
  const [timeLine, setTimeLine] = useState('');


  useEffect(() => {
    fetch('http://localhost:3000/api/userData')
      .then(response => response.json())
      .then(data => {
        setUserName(data.about.name);
        setEmail(data.email);
        setProfileImage(data.about.avatar.url);
        setPhoneNumber(data.about.phoneNumber);
        setAddress(data.about.address);
        setTimeLine(data.timeline);

        if (typeof data.skills === 'object' && data.skills !== null) {
          // Extract skill names from nested objects and convert them to an array
          const skillsArray = Object.values(data.skills).map(skill => skill.name);
          setSkills(skillsArray);
        } else {
          // If skills is not an object, handle the case accordingly
          console.error("Skills data is not in the expected format.");
        }
      })
      .catch(error => {
        console.error('Error fetching user name:', error)
      });
  }, []);
  // console.log(timeLine);

  useEffect(() => {
    if (userName) {
      const names = userName.split(' ');
      setFirstName(names[0]);
      setLastName(names[names.length - 1]);
    }
  }, [userName]);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // const day =  String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2 , '0');
    const year = date.getFullYear();
    return `${year}/${month}`;
  }

  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src={profileImage} alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {firstName}
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {lastName}
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>27 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>German</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Langages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>{address}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>{phoneNumber}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>{email}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Skype :</span>
                    <span>steven.walker</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS START */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-wordpress-plain" />
              </span>
              <h4>WordPress</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-jquery-plain" />
              </span>
              <h4>jQuery</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-angularjs-plain" />
              </span>
              <h4>Angular JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-drupal-plain" />
              </span>
              <h4>Drupal</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>React JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>Docker</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4>Node JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-sass-plain" />
              </span>
              <h4>Sass</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            {timeLine && timeLine.length > 0 && (
              <li>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{timeLine[0].jobTitle}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{formatDate(timeLine[0].startDate)} - {formatDate(timeLine[0].endDate)}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{timeLine[0].company_name}</span>
                    </p>
                  </div>
                </div>
              </li>
            )}
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            {timeLine && timeLine.length > 0 && (
              <li>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{timeLine[1].jobTitle}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{formatDate(timeLine[1].startDate)} - {formatDate(timeLine[1].endDate)}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{timeLine[1].company_name}</span>
                    </p>
                  </div>
                </div>
              </li>
            )}
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            {timeLine && timeLine.length > 0 && (
              <li>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{timeLine[2].jobTitle}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{formatDate(timeLine[2].startDate)} - {formatDate(timeLine[2].endDate)}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{timeLine[2].company_name}</span>
                    </p>
                  </div>
                </div>
              </li>
            )}
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            {timeLine && timeLine.length > 0 && (
              <li>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{timeLine[3].jobTitle}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{formatDate(timeLine[3].startDate)} - {formatDate(timeLine[3].endDate)}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{timeLine[3].company_name}</span>
                    </p>
                  </div>
                </div>
              </li>
            )}
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            {timeLine && timeLine.length > 0 && (
              <li>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{timeLine[4].jobTitle}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{formatDate(timeLine[4].startDate)} - {formatDate(timeLine[4].endDate)}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{timeLine[4].company_name}</span>
                    </p>
                  </div>
                </div>
              </li>
            )}
            {/* TIMELINE ITEM ENDS */}
            {timeLine && timeLine.length > 0 && (
              <li>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{timeLine[5].jobTitle}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{formatDate(timeLine[5].startDate)} - {formatDate(timeLine[5].endDate)}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{timeLine[5].company_name}</span>
                    </p>
                  </div>
                </div>
              </li>
            )}
            <li/>
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
