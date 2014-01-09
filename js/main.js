//---- Javascript: The Good Parts ----//

var sideMenuEffect = (function(){
	function hasParentClass(el, className){
		if(el === document) return false;
		if(classie.has(el, className)){
			return true;
		}
		return hasParentClass(el.parentNode, className);

	}


	function init(){
		var container = document.getElementById('container'),
			menuToggle = document.getElementById('menu-toggle');
		var effect = menuToggle.getAttribute('data-effect');

		function domClickFn(e){
			if(!hasParentClass(e.target, 'menu')){
					classie.remove(container, 'menu-open');
					document.removeEventListener('click', domClickFn);
				}
		}

		menuToggle.addEventListener('click', function(e){
			e.stopPropagation();
			e.preventDefault();

			container.className = 'container';
			classie.add(container, effect);
			setTimeout(function(){
				classie.add(container, 'menu-open');
			}, 25);
			document.addEventListener('click', domClickFn);
		});
	}

	init();

})();
