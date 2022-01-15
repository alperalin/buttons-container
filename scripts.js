const btn5 = document.querySelector('#btn5');
const otherBtns = [
	document.querySelector('#btn1'),
	document.querySelector('#btn2'),
	document.querySelector('#btn3'),
	document.querySelector('#btn6'),
	document.querySelector('#btn9'),
	document.querySelector('#btn8'),
	document.querySelector('#btn7'),
	document.querySelector('#btn4'),
];

const handleClick = (event) => {
	let temp = '';
	let temp2 = '';
	otherBtns.forEach((button, index) => {
		if (index === 0) {
			temp = button.innerHTML;
			button.innerHTML = otherBtns[otherBtns.length - 1].innerHTML;
		} else {
			temp2 = button.innerHTML;
			button.innerHTML = temp;
			temp = temp2;
		}
	});
};

btn5.addEventListener('click', handleClick);
