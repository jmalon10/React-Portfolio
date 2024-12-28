import profileImage from '../assets/ImageOfMe.jpg';
import Jackie from '../assets/Jackie-PT.png';
import Poster from '../assets/Research-Poster.png';
import Bootcamp from '../assets/Bootcamp-Grad-Pic.png';
import Badge from '../assets/Badge.jpg';

export default function About() {
    return (
        <section style={{ paddingTop: '20px' }}>
           <div
             id="carouselExampleSlidesOnly"
             className="carousel slide"
             data-bs-ride="carousel"
             style={{
               width: '50%', 
               margin: '0 auto', 
               height: '300px', 
               overflow: 'hidden', 
               position: 'relative', 
             }}
           >
              <div className="carousel-inner" style={{ height: '100%' }}>
                <div className="carousel-item active">
                  <img
                    src={profileImage}
                    className="d-block mx-auto"
                    style={{ maxHeight: '300px', maxWidth: '50%' }}
                    alt="Jackie Selfie"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Jackie}
                    className="d-block mx-auto"
                    style={{ maxHeight: '300px', maxWidth: '50%' }}
                    alt="Periodic Table Grad Pic"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Poster}
                    className="d-block mx-auto"
                    style={{ maxHeight: '300px', Width: '50%' }}
                    alt="Research Poster"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Bootcamp}
                    className="d-block mx-auto"
                    style={{ maxHeight: '300px', Width: '50%' }}
                    alt="Bootcamp GradPic"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Badge}
                    className="d-block mx-auto"
                    style={{ maxHeight: '300px', Width: '50%' }}
                    alt="Rochester Lab badge"
                  />
                </div>
              </div>
           </div>
           <div className="about-container">
            <div className="about-card">
           <h2>About Me</h2>
           <p>
             Hi, I'm Jackie Maloney. I'm a full stack web developer with a passion for creating
             clean, user-friendly applications. I have experience with HTML, CSS, JavaScript, and
             React on the front end, and Node.js, Express.js, and MySQL on the back end. I'm excited
             to continue learning and growing as a developer!
           </p>
           </div>
           </div>
        </section>
    );
};


