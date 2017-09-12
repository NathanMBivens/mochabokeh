

import 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './Components/AppComponent.js';
import {mobileMenu} from './js/animation.js';
import {fixedNavbar} from './js/navbarView.js';
import {scrollToPage} from './js/scrollToPage.js';
import {iconAnimate} from './js/iconAnimate.js';
import {openModal} from './js/cupModal.js';
import style from './styles/style.scss';

ReactDOM.render(<AppComponent />, document.getElementById('app'));


mobileMenu();
fixedNavbar();
scrollToPage();
openModal();
iconAnimate();
