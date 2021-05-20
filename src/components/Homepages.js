import {FaInstagram, FaGithub} from "react-icons/fa";

const Homepages = () => {
    return (
        <>
        <section className= "homepages">
            <div className="overlay">
                <h1>Alvin Valensia</h1>
                <p>Fullstack Web Developer</p>

                <ul>
                    <li>
                        <a href="https://www.instagram.com/alvinlin24/" target="_blank" rel="noopenner noreferrer"><FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AlvinValensia" target="_blank" rel="noopenner noreferrer"><FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        
            
        </>
    )
}

export default Homepages
