import Picture from "../templates/Picture.jsx";
import { useState} from "react";
import IframeContainer from "../templates/IframeContainer.jsx";


function Vitamines() {



    const [image, setImage] = useState("https://vitamines.bryamsilva.online/");
    const [description, setDescription] = useState("Vitamines est un site créer pour et par des étudiants, son but est de aider les etudiants en nutrition a aprendre touts sur les vitamines");

    const handelToggle = (imageD, description ="") =>{
        console.log(imageD);
        setDescription(description);

       setImage(prev =>prev === imageD? "https://vitamines.bryamsilva.online/" : imageD);

    }

    return (
        <main className="Vitamines">

            <section className="Vitamines-section">
                <h1 className="vitamines-h1">Vitamines</h1>
                <p className="vitamines-p">{description} </p>
            </section>
            <div className="exposeProject">
                <IframeContainer src={image} />
                <div className="logos-container">
                    <img id="docker" className="shapes logos" src="/svg/docker.svg"
                         onClick={()=>handelToggle("/images/infra-docker.png", "L’application React, l’API backend et la base de données sont déployées dans des conteneurs Docker distincts, prêts à l’emploi. Cette architecture assure un isolement optimal des services, facilite la maintenance, et garantit une structure modulaire et évolutive.")
                    }/>


                    <img id="mysql" className="shapes logos" src="/svg/mysql.svg"
                    onClick={()=>handelToggle("", "La base de données MySQL est déployée dans un conteneur Docker dédié. Un utilisateur spécifique a été configuré afin de permettre un accès sécurisé depuis l’API. Les données sont persistées grâce à un volume Docker monté sur le répertoire de stockage de MySQL, garantissant la conservation des informations même après un redémarrage du conteneur.")}/>
                    <img id="nodeJs" className="shapes logos" src="/svg/nodeJs.svg"
                         onClick={()=>handelToggle("https://api.bryamsilva.online/api-docs/", "L’API, développée avec Node.js et Express, est conteneurisée via Docker. Elle intègre Swagger pour la documentation interactive et Bcrypt pour le hachage sécurisé des mots de passe. Cette configuration assure une API maintenable, sécurisée et facilement déployable dans divers environnements.")}/>
                    <img id="react" className="shapes logos" src="/svg/react.svg"
                         onClick={()=>handelToggle("https://vitamines.bryamsilva.online/", "Vitamines est un site créer pour et par des étudiants, son but est de aider les etudiants en nutrition a aprendre touts sur les vitamines")}
                    />
                </div>
            </div>


        </main>
    )
}

export default Vitamines