import {FaPhone, FaEnvelope} from "react-icons/fa";

const Contacts = () => {
    return (
        <>
        
          <section className="contacts">
          <h1>Contact Me</h1>
            <ul>
                <li><a href="tel: 087868066551"><FaPhone />{" "}+62 878-6806-6551</a></li>
                <li><a href="mailto: alvinvalensia24@gmail.com"><FaEnvelope />{" "} alvinvalensia24@gmail.com</a></li>
            </ul>
          </section>    
        </>
    )
}

export default Contacts
