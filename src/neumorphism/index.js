import './index.scss';
import 'normalize.css';
import { domReady } from '../_utils';

domReady(function(){
	// fix: FOUC
	document.body.style.visibility = 'visible';
});