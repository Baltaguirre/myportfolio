import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.jsx';
import { Route, Link, useHistory, useRouteMatch } from "react-router-dom";
import './Proyects.css';
import image from '../../public/Proyects/astroboy.png'
import Modal from '../Modal/Modal.jsx';


export default function Proyects({ button, playProyects, playNavbar }) {
  const match = useRouteMatch()
  const history = useHistory()


  return (

    <div className='containerProyects'>
      {button}
      <Navbar
        playNavbar={playNavbar} />
      <img
        src={image}
        alt='astronauta'
        className='astronaut_proyects'
        onClick={playProyects}
      />

      <div className='proyectsOne'>
        <Link to={`${match.url}/description0`}>
          <h2>La Montañés E-Commerce</h2>
        </Link>
        <Route
          path={`${match.url}/description0`}
          render={() => {
            return (
              <Modal onClick={() => {
                history.push(match.url);
              }}
              >
                <div className='modalStyle'>
                  <div classname='modalInnerStyle'>
                    <p>&#10060;</p>
                    <p>E-Commerce App developed as a Final Proyect in Bootcamp <a href='https://www.soyhenry.com/' target='blank'> Henry.</a>
                      <br></br>
                      It was made for a craft beer maker based in Córdoba, Argentina.
                      <br></br>
                      It has a shopping cart, wishlist, user login, user and administrator panel, discounts based on amounts and a small game to win more discounts!
                      <br></br>
                      <a href='https://la-montaner.vercel.app/' target='blank'>Here </a>
                      you can acces the app!
                    </p>
                  </div>
                </div>
              </Modal>
            );
          }} />
        <h3>Single Page Application made with <a href='https://www.geeksforgeeks.org/mern-stack/' target='blank' id='mern'>MERN</a> Stack</h3>
      </div>

      <div className='proyectsTwo'>
        <Link to={`${match.url}/description`}>
          <h2>World's Countries SPA</h2>
        </Link>
        <Route
          path={`${match.url}/description`}
          render={() => {
            return (
              <Modal onClick={() => {
                history.push(match.url);
              }}
              >
                <div className='modalStyle'>
                  <div classname='modalInnerStyle'>
                    <p>&#10060;</p>
                    <p>Its a Single Page Application that consumes data from an External API, storages in a database
                      & shows the data to the users. There is variety of filters & orders for the countries & touristic activities.
                      You can create a Touristic Activity, add those countries that belongs to,
                      look for it in the Activities searchbar and view its detail.
                      There is also a Country searchbar where you can find any country.
                      <br></br>
                      <a href='http://pi-countries-baltaguirre.vercel.app/' target='blank'>Here </a>
                      you can acces the app!
                    </p>
                  </div>
                </div>
              </Modal>
            );
          }} />

        <h3>Single Page Application made with <a href='https://www.geeksforgeeks.org/what-is-pern-stack/' target='blank' id='pern'>PERN</a> Stack</h3>
        <YoutubeEmbed embedId='Hr_eKGernk4' />
      </div>
    </div>
  )
}