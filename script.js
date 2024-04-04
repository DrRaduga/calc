const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function ({ target }) {
    const { className, innerText } = target

    if (!className.includes('calc__btn')) return;

    const value = innerText;

    switch (value) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            result.innerText = eval(result.innerText).toFixed(2)
            break;

        default:
            result.innerText += value;
    }

});