import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BookCard from './components/BookCard'

function App() {
  const [books,setBooks]= useState ([
    { id: 1, titre: "Les Contes", auteur: "Amadou Koumba", estDisponible: true },
    { id: 2, titre: "Les fables", auteur: "Jean de la Fontaine", estDisponible: false },
    { id: 3, titre: "Une si long lettre", auteur: "Mariama Ba", estDisponible: true },
    { id: 4, titre: "L'enfant Noir", auteur: "Camara Laye", estDisponible: false },
  ]);
  const [titre,setTitre] = useState("");
  const [auteur,setAuteur] = useState("");
  const nbDispo = books.filter((a)=>a.estDisponible).length;
  const onClickEmprunt = (bookId)=>{
     const nvLivre = books.map((b)=>{
       if(b.id === bookId){
          return {...b, estDisponible : !b.estDisponible}
       }
       return b;
     });
     setBooks(nvLivre);
  }
  const ajoutLivre = (e)=>{
    e.preventDefault();

    if(titre.trim() === "" || auteur.trim() === "") {
      return;
    }
    const nvLivres = {
      id : books.length +1,
      titre : titre,
      auteur : auteur,
      estDisponible : true,

    };

    setBooks([...books,nvLivres]);
    setAuteur("");
    setTitre("");
  }
  return (
    <div style={{ padding: '15px' }}>
      <form onSubmit={ajoutLivre}>
        <input type="text" placeholder="Titre du livre" value={titre} onChange={(e)=>setTitre(e.target.value)}/>
        <input type="text" placeholder="Auteur du livre" value={auteur} onChange={(e)=>setAuteur(e.target.value)}/>
        <button type="submit">Ajouter</button>
      </form>
      <h2>Liste des Livres disponibles : {nbDispo} </h2>
      <div style={{
        display: "flex", gap : "15px", flexWrap : "wrap"
      }}>
        {
          books.map((u)=>(
              <BookCard key={u.id} titre={u.titre} auteur={u.auteur} estDisponible={u.estDisponible} onClickEmprunt={()=>onClickEmprunt(u.id)}></BookCard>
          ))
           
        }
      </div>
    </div>

  )

}

export default App
