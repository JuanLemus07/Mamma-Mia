import { NavLink } from 'react-router-dom'

function ErrorPage () {
  return(
    <>
      <div className='pagerror'>
        <h2>TE PERDISTE?,COMETE UNA PIZZA </h2>
        <img className='img404' src="https://i.pinimg.com/564x/1e/df/24/1edf24e5c5b046d576aecef67c6f5fd1.jpg" alt="Error de pagina 404" />
        <NavLink to="/"> <button>Volver</button> </NavLink>
      </div>
    </>
    )
}
export default ErrorPage
