const calc = document.querySelector('.calc');
const result = document.querySelector('#result');
let lastBtnIsSimbol = false ;
calc.addEventListener('click', function ({ target }) {
    const { className, innerText } = target

    if (!className.includes('calc__btn')) return;
    if (lastBtnIsSimbol && className.includes('calc__btn_operator')) return result.innerText = result.innerText.substring(0, result.innerText.length - 1) + innerText;
    
    switch (innerText) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            result.innerText = eval(result.innerText).toFixed(2)
            break;


        default:
            result.innerText += innerText;
    }
    lastBtnIsSimbol = className.includes('calc__btn_operator')

});