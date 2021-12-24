import React from 'react'

import './styles.css'

export const NewsLetter = () => {
    return (
        <section class="newsletter">  
        <div className='content'>
               <h4>PROMOÇÕES</h4>
             <h2>Inscreva-se e fique sabendo de nossas promoções:</h2>
            </div>
            <div class="formContainer">
                <form action="">
                <fieldset class="fieldInput">
                    <input class="form-input" type="email" placeholder="Seu endereço de email"></input>
                    <button type="submit" class="form-submit">Inscrever</button>
                </fieldset>
                </form>
            </div>
        </section>
    )
}

export default NewsLetter