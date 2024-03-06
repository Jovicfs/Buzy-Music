
import './Nav.css'
export default function nav(){
    return(
        <div className='navMain'>
            <section className='Nav'>
            <ul>
               <li>
                <button className='nav-button' id='navbtn-1' href="#">Relax</button>
                <button className='nav-button' id='navbtn-2' href="#">Sono</button>
                <button className='nav-button' id='navbtn-3' href="#">Podcasts</button>
                <button className='nav-button' id='navbtn-4' href="#">Romance</button>
                <button className='nav-button' id='navbtn-5' href="#">Festa</button>
                <button className='nav-button' id='navbtn-6' href="#">Triste</button>
                <button className='nav-button' id='navbtn-7' href="#">Alegre</button>
                <button className='nav-button' id='navbtn-8' href="#">Energize-se</button>
                <button className='nav-button' id='navbtn-9' href="#">Viagem Regular</button>
                <button className='nav-button' id='navbtn-10' href="#">Treino</button>
                <button className='nav-button' id='navbtn-11' href="#">Foco</button>
               </li>
            </ul>
            </section>
        </div>
    )
}