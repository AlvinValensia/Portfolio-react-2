import {useState} from "react";
import {projects} from "../data/projects";

const Projects = () => {
    const [cards, setCards] = useState(projects);

    return (
        <>
        <section className="projects">
            <h1>Projects</h1>

            <div className="cards">
                {cards.map(({id, title, desc, github, demo, image}) => (
                    <article key={id}>
                    <img src={image} alt={title} />
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <ul>
                        <li><a href={github} target="_blank" rel="noopenner noreferrer">GitHub</a></li>
                        <li><a href={demo} target="_blank" rel="noopenner noreferrer">Demo</a></li>
                    </ul>
                    </article>
                ))}

            </div>
        </section>
            
        </>
    )
}

export default projects
