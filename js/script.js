
// Función leer mas
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click',toggleText);

function toggleText(){
	hideText.classList.toggle('show');
	if (hideText.classList.contains('show')) {
		br_activo.innerHTML='<br>';
		hideText_btn.innerHTML = 'Ver menos';
	}
	else{
	hideText_btn.innerHTML='Leer mas';
	br_activo.innerHTML='';
	}
}

// Funcion botón hacia arriba
const btn_scrolltop = document.getElementById('btn_scrolltop')
btn_scrolltop.addEventListener('click', () =>{
	window.scrollTo(0,0) 
});

window.onscroll = () => {
	console.log(window.scrollY)
	if(window.scrollY > 100){
		btn_scrolltop.classList.add("btn-scrolltop-on")
	}else{
		btn_scrolltop.classList.remove("btn-scrolltop-on")
	}
}