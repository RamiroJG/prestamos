import React, {Fragment} from 'react';

// Un componente siempre es una funcion
function Header({titulo}){

    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}

export default Header;

/* 
    Pasamos el props
    <h1>{ props.titulo }</h1>
    <p>{ props.descripcion }</p>

    O aplicamos desctucturing
    y solo ponemos
    <h1>{ titulo }</h1>
*/