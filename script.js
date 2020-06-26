// nav reponsive
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')
// console.log(navLinks);

burger.addEventListener('click', () => {
	nav.classList.toggle('nav-active')

	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}`
		}
	});
	burger.classList.toggle('toggle')
});


// Sildes Javascript
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
var direction = 0;
const indicatorParent = document.querySelector('.location');
const indicators = document.querySelectorAll('.location li');

indicators.forEach((indicator, i) => {
	indicator.addEventListener('click', () => {
		document.querySelector('.location .selected').classList.remove('selected');
		indicator.classList.add('selected');
		slider.style.transform = 'translate(' + (i) * -20 + '%)';
	});
});
setInterval(() => {
	slider.style.transform = 'translate(-20%)';
}, 5000)
next.addEventListener('click', function () {
	direction = -1;
	carousel.style.justifyContent = 'flex-start';
	slider.style.transform = 'translate(-20%)';

});

prev.addEventListener('click', function () {
	if (direction === -1) {
		direction = 1;
		slider.appendChild(slider.firstElementChild);
	}
	carousel.style.justifyContent = 'flex-end';
	slider.style.transform = 'translate(20%)';

});

slider.addEventListener('transitionend', function () {
	// get the last element and append it to the front

	if (direction === 1) {
		slider.prepend(slider.lastElementChild);
	} else {
		slider.appendChild(slider.firstElementChild);
	}

	slider.style.transition = 'none';
	slider.style.transform = 'translate(0)';
	setTimeout(() => {
		slider.style.transition = 'all 0.5s';
	})
}, false);

// Form

// const form = document.getElementById('form_submit');



function check() {
	const masv = document.getElementById('masv');
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const ghichu = document.getElementById('ghichu');
	const gioitinh = document.getElementById('gioitinh');
	const sothich = document.getElementById('sothich');

	var thongbao_masv = document.getElementById('thongbao_masv');
	var thongbao_name = document.getElementById('thongbao_name');
	var thongbao_email = document.getElementById('thongbao_email');
	var thongbao_gioitinh = document.getElementById('thongbao_gioitinh');
	var thongbao_sothich = document.getElementById('thongbao_sothich');
	var thongbao_ghichu = document.getElementById('thongbao_ghichu');

	const masv1 = masv.value.trim();
	const name1 = name.value.trim();
	const email1 = email.value.trim();
	const ghichu1 = ghichu.value.trim();
	if (masv1 === '') {
		masv.style.borderColor = 'red';
		thongbao_masv.style.display = 'inline';
		thongbao_masv.innerHTML = 'không được để trống';
	}
	else {
		masv.style.borderColor = '';
		thongbao_masv.style.display = 'none';
	}
	if (name1 === '') {
		name.style.borderColor = 'red';
		thongbao_name.style.display = 'inline';
		thongbao_name.innerHTML = 'không được để trống';
	}
	else {
		name.style.borderColor = '';
		thongbao_name.style.display = 'none';
	}
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (email1 === '') {
		email.style.borderColor = 'red';
		thongbao_email.style.display = 'inline';
		thongbao_email.innerHTML = 'không được để trống';
	} else if (!filter.test(email1)) {
		email.style.borderColor = 'yellow';
		thongbao_email.style.display = 'inline';
		thongbao_email.innerHTML = 'không đúng định dạng';
	}
	else {
		email.style.borderColor = '';
		thongbao_email.style.display = 'none';
	}
	if (ghichu1 === '') {
		ghichu.style.borderColor = 'red';
		thongbao_ghichu.style.display = 'inline';
		thongbao_ghichu.innerHTML = 'không được để trống';
	} else if (ghichu.length >= 200) {
		ghichu.style.borderColor = 'yellow';
		thongbao_ghichu.style.display = 'inline';
		thongbao_ghichu.innerHTML = 'không được quá 200 kí tự';
	}
	else {
		ghichu.style.borderColor = '';
		thongbao_ghichu.style.display = 'none';
	}
	const male = document.getElementById('male').checked;
	const female = document.getElementById('female').checked;
	if (male === false && female === false) {
		gioitinh.style.borderColor = 'red';
		thongbao_gioitinh.style.display = 'inline';
		thongbao_gioitinh.innerHTML = 'Hãy chọn 1 trong 2';
	}
	else {
		gioitinh.style.borderColor = '';
		thongbao_gioitinh.style.display = 'none';
	}
	const sothich1 = document.getElementById('sothich1').checked;
	const sothich2 = document.getElementById('sothich2').checked;
	const sothich3 = document.getElementById('sothich3').checked;
	const sothich4 = document.getElementById('sothich4').checked;
	const sothich5 = document.getElementById('sothich5').checked;
	if (sothich1 === false && sothich2 === false &&
		sothich3 === false && sothich4 === false &&
		sothich5 === false
	) {
		sothich.style.borderColor = 'red';
		thongbao_sothich.style.display = 'inline';
		thongbao_sothich.innerHTML = 'Hãy chọn 1 trong các sở thích';
	}
	else {
		sothich.style.borderColor = '';
		thongbao_gioitinh.style.display = 'none';

	}
	return false;
}






// Shopping Cart
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');
const total3 = document.getElementById('total3');

const sumTotal = document.getElementById('total');

const price1 = 5;
const price2 = 15;
const price3 = 25;

var input1_value = input1.value;
var input2_value = input2.value;
var input3_value = input3.value;

//sum 2 input voi price
var total1_value = input1_value * price1;
var total2_value = input2_value * price2;
var total3_value = input3_value * price3;
total1.innerHTML = `${total1_value}`;
total2.innerHTML = `${total2_value}`;
total3.innerHTML = `${total3_value}`;

function sum(a, b, c) {
	return x = a + b + c;
}

input1.addEventListener('input', updateValue1);
input2.addEventListener('input', updateValue2);
input3.addEventListener('input', updateValue3);
function updateValue1(e) {
	input1_value = e.target.value;
	total1_value = input1_value * price1;
	sumTotal_value = sum(total1_value, total2_value, total3_value);
	total1.innerHTML = `${total1_value}`;
	sumTotal.innerHTML = `${sumTotal_value}`;
}

function updateValue2(e) {
	input2_value = e.target.value;
	total2_value = input2_value * price2;
	sumTotal_value = sum(total1_value, total2_value, total3_value);
	total2.innerHTML = `${total2_value}`;
	sumTotal.innerHTML = `${sumTotal_value}`;
}

function updateValue3(e) {
	input3_value = e.target.value;
	total3_value = input3_value * price3;
	sumTotal_value = sum(total1_value, total2_value, total3_value);
	total3.innerHTML = `${total3_value}`;
	sumTotal.innerHTML = `${sumTotal_value}`;
}


sumTotal_value = sum(total1_value, total2_value, total3_value);
sumTotal.innerHTML = `${sumTotal_value}`;
console.log(sumTotal_value);


checkbox1.addEventListener('change', e => {

	if (e.target.checked) {
		input1.disabled = true;
		total1_value = 0;
		total1.style.display = 'none';

		sumTotal_value = sum(total1_value, total2_value, total3_value)
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);

	}
	else {
		input1.disabled = false;
		total1_value = input1_value * price1;
		total1.style.display = '';

		sumTotal_value = sum(total1_value, total2_value, total3_value);
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);

	}

});
checkbox2.addEventListener('change', e => {

	if (e.target.checked) {
		input2.disabled = true;

		total2.style.display = 'none';
		total2_value = 0;
		sumTotal_value = sum(total1_value, total2_value, total3_value)
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);

	}
	else {
		input2.disabled = false;

		total2.style.display = '';
		total2_value = input2_value * price2;
		sumTotal_value = sum(total1_value, total2_value, total3_value);
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);
	}
});
checkbox3.addEventListener('change', e => {

	if (e.target.checked) {
		input3.disabled = true;

		total3.style.display = 'none';
		total3_value = 0;
		sumTotal_value = sum(total1_value, total2_value, total3_value)
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);

	}
	else {
		input3.disabled = false;

		total3.style.display = '';
		total3_value = input3_value * price3;
		sumTotal_value = sum(total1_value, total2_value, total3_value);
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);
	}
});



const selectElement = document.getElementById('mucgia');

const id_cart1 = document.getElementById('id_cart1');
const id_cart2 = document.getElementById('id_cart2');
const id_cart3 = document.getElementById('id_cart3');


selectElement.addEventListener('change', (event) => {

	if (event.target.value == 0) {
		checkbox1.checked = false;
		checkbox2.checked = false;
		checkbox3.checked = false;

		input1.disabled = false;
		input2.disabled = false;
		input3.disabled = false;

		total1.style.display = '';
		total2.style.display = '';
		total3.style.display = '';
	}
	if (event.target.value == price1) {

		checkbox1.checked = false;
		input1.disabled = false;
		total1_value = input1_value * price1;
		total1.style.display = '';
		total1.innerHTML = `${total1_value}`;


		id_cart1.style.display = '';
		id_cart2.style.display = 'none';
		id_cart3.style.display = 'none';
		// total1_value = input1_value * price1;
		total2_value = 0;
		total3_value = 0;

		sumTotal_value = sum(total1_value, total2_value, total3_value);
		sumTotal.innerHTML = `${sumTotal_value}`;
		console.log(sumTotal_value);
	}
	else {
		if (event.target.value !== price1) {
			id_cart2.style.display = '';
			id_cart3.style.display = '';
			total2_value = input2_value * price2;
			total3_value = input3_value * price3;
			sumTotal_value = sum(total1_value, total2_value, total3_value);
			sumTotal.innerHTML = `${sumTotal_value}`;
			console.log(sumTotal_value);
		}
		if (event.target.value == price2) {
			checkbox2.checked = false;
			input2.disabled = false;
			total2_value = input2_value * price2;
			total2.style.display = '';
			total2.innerHTML = `${total2_value}`;

			id_cart1.style.display = 'none';
			id_cart3.style.display = 'none';
			total1_value = 0;
			total2_value = input2_value * price2;
			total3_value = 0;
			sumTotal_value = sum(total1_value, total2_value, total3_value);
			sumTotal.innerHTML = `${sumTotal_value}`;
			console.log(sumTotal_value);

		}
		else {
			if (event.target.value !== price2) {
				id_cart1.style.display = '';
				id_cart3.style.display = '';
				total1_value = input1_value * price1;
				total3_value = input3_value * price3;
				sumTotal_value = sum(total1_value, total2_value, total3_value);
				sumTotal.innerHTML = `${sumTotal_value}`;
				console.log(sumTotal_value);
			}
			if (event.target.value == price3) {
				checkbox3.checked = false;
				input3.disabled = false;
				total3_value = input3_value * price3;
				total3.style.display = '';
				total3.innerHTML = `${total3_value}`;

				checkbox3.checked = false;
				id_cart1.style.display = 'none';
				id_cart2.style.display = 'none';
				total1_value = 0;
				total2_value = 0;
				total3_value = input3_value * price3;
				sumTotal_value = sum(total1_value, total2_value, total3_value);
				sumTotal.innerHTML = `${sumTotal_value}`;
				console.log(sumTotal_value);
			}
			else {
				if (event.target.value !== price3) {
					id_cart1.style.display = '';
					id_cart2.style.display = '';
					total1_value = input1_value * price1;
					total2_value = input2_value * price2;
					sumTotal_value = sum(total1_value, total2_value, total3_value);
					sumTotal.innerHTML = `${sumTotal_value}`;
					console.log(sumTotal_value);
				}
			}
		}


	}

});









