
// Función botón ver mas
let hiddenText_btn = document.getElementById('hiddenText_btn');
let hiddenText = document.getElementById('hiddenText');

hiddenText_btn.addEventListener('click',toggleText);

// function toggleText(){
// 	hiddenText.classList.toggle('text-show');
// 	if (hiddenText.classList.contains('text-show')) {
// 		br_activo.innerHTML='<br>';
// 		hiddenText_btn.innerHTML = 'Ver menos';
// 	}
// 	else{
// 	hiddenText_btn.innerHTML='Ver mas';
// 	br_activo.innerHTML='';
// 	}
// }

function toggleText(){
	if (hiddenText.classList.contains('text-hidden')) {
		br_activo.innerHTML='<br>';
		hiddenText.classList.remove('text-hidden');
		hiddenText.classList.add('text-show');
		hiddenText_btn.innerHTML = 'Ver menos';
	}else{
	hiddenText_btn.innerHTML='Ver mas';
	br_activo.innerHTML='';
	hiddenText.classList.remove('text-show');
	hiddenText.classList.add('text-hidden');
	};
};

// Función botón hacia arriba
const btn_scrolltop = document.getElementById('btn_scrolltop')
btn_scrolltop.addEventListener('click', () =>{
	window.scrollTo(0,0) 
});

window.onscroll = () => {
	// console.log(window.scrollY)
	if(window.scrollY > 100){
		btn_scrolltop.classList.add("btn-scrolltop-on")
	}else{
		btn_scrolltop.classList.remove("btn-scrolltop-on")
	}
}