const searchBar = document.forms['search_bar'].querySelector['input'];
searchBar.addEventListener('keyup', function(e){
	const term = e.target.value.toLowerCase();
	const name = list.getElementByTagName('th');
	Array.from(name).foreACH(function(name){
		const type = file.firstElementChild.textContent;
		if(type.toLowerCase()indexOf(term)!= -1){
			type.style.display='block';
		}else{
			type.style.display='none';
		}
	})
} )