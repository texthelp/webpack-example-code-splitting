function getElement() {
	return import(/* webpackChunkName: "moment" */ 'moment').then(moment => {
		var element = document.createElement('h1');
		element.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
		return element;
	}).catch(error => 'An error occurred while loading the component');
}

getElement().then(element => {
	document.body.appendChild(element);
})

