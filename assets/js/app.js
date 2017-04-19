window.addEventListener('load',function(event){
	event.preventDefault();

var nombres = ['','Fiorella Quispe','Lourdes Vilchez','Leydi Maldonado','Yessenia Huamán',
	'Miriam Mendoza', 'Elizabeth Condori'];

var contenedor = document.getElementsByTagName("body")[0];

	for (var i = 1; i < 7; i++){
		var li = document.createElement('li');
		var div = document.createElement('div');
		var span = document.createElement('span');
		var img = document.createElement('img');
		var url = "assets/img/" + i + ".png";

		img.setAttribute('src', url);
		div.appendChild(img);
		span.innerText = nombres[i];
		div.appendChild(span);
		li.appendChild(div);
		contenedor.appendChild(li);

		img.setAttribute('class', 'img-box');
		div.setAttribute('class', 'cont-img');
		li.setAttribute('class', 'box');
	}
});