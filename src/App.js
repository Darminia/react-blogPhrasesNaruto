import './App.css';
import Testimonio from './componentes/testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        {/* Render the title */}
        <h1 className='App'>Testimonios de los personajes</h1>
         {/* Render testimonial components Props*/}
        <Testimonio 
          nombre='Konan'
          aldea='Aldea de la lluvia'
          imagen='konan'
          alt='Imagen Konan'
          cargo='Segunda al Mando'
          organizacion='Akatsuki'
          testimonio='Esta ve ... Espero que estas sean flores de esperanza que nunca mueren'/>
        <Testimonio 
          nombre='Itachi Uchiha'
          aldea='Konoha'
          imagen='itachi'
          alt='Imagen Itachi'
          cargo='Subordinado'
          organizacion='Akatsuki'
          testimonio='Siempre estaré ahí para ti, incluso si es solo un obstáculo que debes superar. Tú y yo debemos vivir juntos, incluso si eso significa odiarnos. Para eso... es para lo que están los hermanos mayores'/>
        <Testimonio 
          nombre='Naruto Uzumaki'
          aldea='Konoha'
          imagen='naruto'
          alt='Imagen Naruto'
          cargo='Hokage'
          organizacion='Konoha'
          testimonio='No me importa con quién tengo que pelear... Si me arranca los brazos, lo patearé hasta la muerte. Si me arranca las piernas, lo morderé hasta la muerte. Si me arranca la cabeza, lo miraré hasta la muerte. Y si me arranca los ojos, lo maldeciré hasta la muerte... ¡Incluso si me rompen en pedazos... encontraré la manera de recuperar a Sasuke!'/>
      </div>
    </div>
  );
}

export default App;
