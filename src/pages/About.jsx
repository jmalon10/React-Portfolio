import profileImage from '../assets/ImageOfMe.jpg';
import Jackie from '../assets/Jackie-PT.png';
import Poster from '../assets/Research-Poster.png';
import Bootcamp from '../assets/Bootcamp-Grad-Pic.png';
import Badge from '../assets/Badge.jpg';
export default function About() {
    return (
        <section>
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={profileImage} class="d-block w-100" alt="Jackie Selfie">
      </img>
    </div>
    <div class="carousel-item">
      <img src={Jackie} class="d-block w-100" alt="Periodic Table Grad Pic">
      </img>
    </div>
    <div class="carousel-item">
      <img src={Poster} class="d-block w-100" alt="Research Poster">
      </img>
    </div>
    <div class="carousel-item">
      <img src={Bootcamp} class="d-block w-100" alt="Bootcamp GradPic">
      </img>
    </div>
    <div class="carousel-item">
      <img src={Badge} class="d-block w-100" alt="Rochester Lab badge">
      </img>
    </div>
  </div>
</div>
            <h2>About Me</h2>
            <p>Hi, I'm Jackie Maloney. I'm a full stack web developer with a passion for creating clean, user-friendly applications. I have experience with HTML, CSS, JavaScript, and React on the front end, and Node.js, Express.js, and MySQL on the back end. I'm excited to continue learning and growing as a developer!</p>
        </section>
    );
};
