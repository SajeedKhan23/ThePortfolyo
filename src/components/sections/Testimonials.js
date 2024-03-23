import { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/userData')
      .then(response => response.json())
      .then(data => {
        // Take the first 3 testimonials
        const firstThreeTestimonials = data.testimonials.slice(0, 3);
        setTestimonials(firstThreeTestimonials);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {testimonials.length >= 3 && (
          <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
            <div>
              <p>
                <span className="quote">
                  "{testimonials[0].review}"
                </span>
                <span className="person">{testimonials[0].name}</span>
                <span className="job">{testimonials[0].position}</span>
              </p>
              <img src={testimonials[0].image.url} alt="" />
            </div>
          </div>
        )}
        {testimonials.length >= 3 && (
          <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
            <div>
              <p>
                <span className="quote">
                  "{testimonials[1].review}"
                </span>
                <span className="person">{testimonials[1].name}</span>
                <span className="job">{testimonials[1].position}</span>
              </p>
              <img src={testimonials[1].image.url} alt="" />
            </div>
          </div>
        )}
        {testimonials.length >= 3 && (
          <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
            <div>
              <p>
                <span className="quote">
                  "{testimonials[2].review}"
                </span>
                <span className="person">{testimonials[2].name}</span>
                <span className="job">{testimonials[2].position}</span>
              </p>
              <img src={testimonials[2].image.url} alt="" />
            </div>
          </div>
        )}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Testimonials;
