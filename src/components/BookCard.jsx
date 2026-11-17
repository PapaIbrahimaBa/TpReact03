export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
    return (
        <div style={{
            border: "3px solid grey",
            borderRadius: "10px",
            padding: "20px"
        }}>
            <h2> Titre du livre : {titre} </h2>
            <p> Auteur du livre: {auteur}</p>
            <p> Etat : {estDisponible ? "🟢Disponible" : "🔴Emprunte"}</p>
            <button
                onClick={onClickEmprunt}
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid grey",
                    marginTop: "2px",
                    background: estDisponible ? "#dc2626" : "green",
                }}>
                {estDisponible ? "Emprunter" : "Rendre"}
            </button>
        </div>
    )
}