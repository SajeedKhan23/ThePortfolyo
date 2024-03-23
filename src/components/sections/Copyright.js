import { useState, useEffect } from "react";

const Copyright = () => {

  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    fetch('https://the-portfolyo-iota.vercel.app/api/userData')
    .then(response => response.json())
    .then(data => {
      setCopyright(data.about.name);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  }, []);

  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} {copyright}</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a>
        </span>
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
