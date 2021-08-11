import 'normalize.css';
import './index.scss';
import config from './config.js';

let templates = config.templates;

document.addEventListener('DOMContentLoaded', function(event) {

	let nav = document.getElementById('nav');
	let sidebar = document.getElementsByClassName('sidebar')[0];
	let mobileNav = document.getElementById('mobileNav');

	templates.forEach(template => {
		let li = document.createElement("li"); 
		let img = document.createElement("img");
		img.src = template.img;
		li.dataset.url = template.src;
		li.appendChild(img); 

		nav.appendChild(li);
	});

	let lis = nav.getElementsByTagName('li');

	function unsetActive(){
		for(let j = 0 ; j < lis.length ; j++){
			let li = lis[j];
			li.classList.remove("active");
		}
	}

	for(let i = 0 ; i < lis.length ; i++){
		let li = lis[i];
		li.addEventListener('click', function(){
			unsetActive();
			document.getElementById('preview').src = this.dataset.url;
			this.classList.add("active");
			
		})
	}
	
	mobileNav.addEventListener('click', function(){
		sidebar.classList.toggle('pinned');
	})

});



