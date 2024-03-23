import { userAgent } from 'next/server';
import { useEffect, useState } from 'react';

const Home = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    fetch('https://the-portfolyo-iota.vercel.app/api/userData')
    .then(response => response.json())
    .then(data => {
      setUserName(data.about.name);
      setEmail(data.email);
      setSubTitle(data.about.subTitle);
    })
    .catch(error => {
      console.error('Error fetching user name:', error)
    });
  }, []);

  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
                {subTitle}
              </span>
            </span>
            <span>
              <span className="animated-layer">{userName}</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
