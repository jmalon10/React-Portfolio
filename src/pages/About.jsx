import profileImage from '../assets/ImageOfMe.jpg';
export default function About() {
    return (
        <section>
            <div className="text-center">
                <img 
                    src={profileImage} 
                    className="rounded img-fluid" 
                    alt="Picture of me :)" 
                    style={{ maxWidth: '300px', height: 'auto' }} 
                />
            </div>
            <h2>About Me</h2>
            <p>Hi, I'm Jackie Maloney. I'm a full stack web developer with a passion for creating clean, user-friendly applications. I have experience with HTML, CSS, JavaScript, and React on the front end, and Node.js, Express.js, and MySQL on the back end. I'm excited to continue learning and growing as a developer!</p>
        </section>
    );
};
