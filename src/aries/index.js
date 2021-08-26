import './index.scss';
import { domReady } from '../_utils';

domReady(function(){
	// fix: FOUC
	document.body.style.visibility = 'visible';

	let signin = document.getElementById('signIn');
	let signup = document.getElementById('signUp');
	let signinLink = document.getElementById('signIn-link');
	let signupLink = document.getElementById('signUp-link');
	let container = document.getElementById('container');

	function activeLeft(){
		container.classList.remove('right-panel-active')
		container.classList.add('left-panel-active');
	}

	function activeRigth(){
		container.classList.add('right-panel-active');
		container.classList.remove('left-panel-active');
	}

	signin.addEventListener('click', activeLeft);
	signinLink.addEventListener('click', activeLeft);
	signup.addEventListener('click', activeRigth);
	signupLink.addEventListener('click', activeRigth);
});