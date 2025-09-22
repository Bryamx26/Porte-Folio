function Profile() {
    return (
        <div className="profile">
            {/* Informations personnelles */}
            <div className="profile-header">
                <img className="profile-image" src="/photo.webp" alt="Bryam Rishing Silva" />
                <div className="profile-info">
                    <h1>Bryam Rishing Silva</h1>
                    <h2>Futur DevOps</h2>
                    <p>Étudiant à l'HEH, 22 ans</p>
                    <p>📍 La Louvière</p>
                    <p>📞 +32 472 544 754</p>
                    <p>✉️ rishingsilvabryam@gmail.com</p>
                </div>
            </div>

            {/* Profils en ligne */}
            <div className="profile-section">
                <h3>Profiles</h3>
                <p>GitHub: bryamx26</p>
            </div>

            {/* Passions */}
            <div className="profile-section">
                <h3>Passions</h3>
                <ul>
                    <li>Guitariste – Autodidacte, Créatif</li>
                    <li>Pilote FPV</li>
                </ul>
            </div>

            {/* Langues */}
            <div className="profile-section">
                <h3>Langues</h3>
                <p>Français, Anglais, Espagnol</p>
            </div>

            {/* Expériences */}
            <div className="profile-section">
                <h3>Expériences</h3>
                <div className="experience">
                    <h4>Médecine pour le peuple – Stage</h4>
                    <p>2022, Bruxelles</p>
                    <p>Stage de 6ᵉ année (2 semaines) – Mise en place d’un NAS et accompagnement des médecins dans la migration d’un serveur vers SharePoint. Découverte du métier d’informaticien, premières notions en Active Directory et réseaux.</p>
                </div>
                <div className="experience">
                    <h4>Bershka – Job étudiant</h4>
                    <p>2020-2022, Bruxelles</p>
                    <p>Vendeur – Développement du sens du contact et de l’extraversion.</p>
                </div>
                <div className="experience">
                    <h4>Brico – Job étudiant</h4>
                    <p>2023, La Louvière</p>
                    <p>Conseil et accompagnement des clients, organisation et réapprovisionnement des rayons.</p>
                </div>
                <div className="experience">
                    <h4>Carrefour – Job étudiant</h4>
                    <p>2024-2025, La Louvière</p>
                    <p>Vendeur étudiant.</p>
                </div>
            </div>

            {/* Éducation */}
            <div className="profile-section">
                <h3>Éducation</h3>
                <div className="education">
                    <h4>HEH, Mons</h4>
                    <p>2023 – maintenant</p>
                    <p>Bachelier Informatique, Orientation réseaux & télécommunications option sécurité</p>
                </div>
                <div className="education">
                    <h4>IPES Léon Hurez, La Louvière</h4>
                    <p>2015-2022</p>
                    <p>CESS</p>
                </div>
            </div>

            {/* Skills */}
            <div className="profile-section">
                <h3>Compétences</h3>
                <p>Python, HTML, CSS, …</p>
            </div>
        </div>
    );
}

export default Profile;
