import profileImage from '../assets/ImageOfMe.jpg';
export default function About() {
    return (
        <section>
            <img src={profileImage} alt="Picture of me :)" />
            <h2>About Me</h2>
            <p>Hi, I'm Jackie Maloney. I'm a full stack web developer with a passion for creating clean, user-friendly applications. I have experience with HTML, CSS, JavaScript, and React on the front end, and Node.js, Express.js, and MySQL on the back end. I'm excited to continue learning and growing as a developer!</p>
        </section>
    );
};