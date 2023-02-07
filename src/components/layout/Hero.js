import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="hero">
            <div id="slogan-container">
                <img src={process.env.PUBLIC_URL + "/images/slogan.png"} alt="" />
                <p className="info">A highly talented, driven, and flexible frontend-developer with a proven record
                    of delivering creative and innovative solutions. A proven ability of developing projects
                    from inception through production to final delivery, ensuring that all work is effective,
                    appropriate, and delivered within agreed timescales. Able to work as part of a team
                    Strong problem-solving abilities and a passion for staying up to date with the latest
                    industry trends and technologies. <Link to="/about">Read more...</Link></p>
            </div>
            <div id="profile-container">
                <img src={process.env.PUBLIC_URL + "/images/emad.png"} alt="Emad illustrated photo" />
            </div>
        </section>

    )
}

export default Hero