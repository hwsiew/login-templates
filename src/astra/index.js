import { domReady } from '../_utils';
import 'normalize.css';
import './index.scss';

domReady(function(){
	// fix: FOUC
	document.body.style.visibility = 'visible';

	let container = document.getElementById('container');
	let signin = document.getElementById('signin-btn');
	let signup = document.getElementById('signup-btn');

	let toggle = () => {
		console.log('here')
		container.classList.toggle('signin-pinned')
		container.classList.toggle('signup-pinned')
	}
	
	signin.addEventListener('click', toggle);
	signup.addEventListener('click', toggle);

	// to control the default on page load, either signin-pinned or signup-pinned
	setTimeout(() => {
		container.classList.add('signin-pinned');
	}, 200);

});