import './index.scss';
import { domReady } from '../_utils';

domReady(function(){
	// fix: FOUC
	document.body.style.visibility = 'visible';
});