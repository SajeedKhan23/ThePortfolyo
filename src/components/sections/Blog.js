import Link from "next/link";
import { useState, useEffect } from "react";


const Blog = () => {

  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch('https://the-portfolyo-iota.vercel.app/api/userData')
    .then(response => response.json())
    .then(data => {
      setServices(data.services);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  }, []);

  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        {services && services.length > 2 && (
          <div className="animated-layer fade-in-right-animation fadeInUp wow">
            <Link href="/blog-post" legacyBehavior>
              <a>
                <span className="img-holder">
                  <img src={services[2].image.url} alt="" />
                </span>
                <div className="content">
                  <span className="category">design</span>
                  <span className="title">
                    How To Publish Content That Ranks On Google
                  </span>
                  <p>
                    ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                    veniam...
                  </p>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-calendar" />
                      <span>9 Apr 2022</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-comments" />
                      <span>17 comments</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        )}
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        {services && services.length > 0 && (
          <div className="animated-layer fade-in-right-animation fadeInUp wow">
            <Link href="/blog-post" legacyBehavior>
              <a>
                <span className="img-holder">
                  <img src={services[0].image.url} alt="" />
                </span>
                <div className="content">
                  <span className="category">development</span>
                  <span className="title">
                    How Efficient Site Structure Can Boost SEO
                  </span>
                  <p>
                    ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                    veniam...
                  </p>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-calendar" />
                      <span>21 Feb 2022</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-comments" />
                      <span>34 comments</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        )}
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        {services && services.length > 3 && (
          <div className="animated-layer fade-in-right-animation fadeInUp wow">
            <Link href="/blog-post" legacyBehavior>
              <a>
                <span className="img-holder">
                  <img src={services[3].image.url} alt="" />
                </span>
                <div className="content">
                  <span className="category">essentials</span>
                  <span className="title">
                    Change Management for Customer Success
                  </span>
                  <p>
                    ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                    veniam...
                  </p>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-calendar" />
                      <span>1 Jan 2022</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-comments" />
                      <span>10 comments</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        )}
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};

export default Blog;
