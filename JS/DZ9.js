let a, b;

function showResult(a) {
    document.getElementById('result').innerHTML = a;
}

function nameOfMonth() {
    switch (+prompt("Введите номер месяца: ")) {
        case 1: {
            showResult("Январь");
            break;
        }
        case 2: {
            showResult("Февраль");
            break;
        }
        case 3: {
            showResult("Март");
            break;
        }
        case 4: {
            showResult("Апрель");
            break;
        }
        case 5: {
            showResult("Май");
            break;
        }
        case 6: {
            showResult("Июнь");
            break;
        }
        case 7: {
            showResult("Июль");
            break;
        }
        case 8: {
            showResult("Август");
            break;
        }
        case 9: {
            showResult("Сентябрь");
            break;
        }
        case 10: {
            showResult("Октябрь");
            break;
        }
        case 11: {
            showResult("Ноябрь");
            break;
        }
        case 12: {
            showResult("Декабрь");
            break;
        }
        default: {
            alert("Ошибка в исходных данных!");
            document.getElementById('result').innerHTML = '';
        }
    }
}

function calculator() {
    a = +prompt("Введите первое число: ");
    b = +prompt("Введите второе число: ");
    if (isNaN(a) || isNaN(b))
        alert("Ошибка в исходных данных!");
    else {
        switch (prompt("Укажите математическое действие (+ - * /):")) {
            case '+': {
                document.getElementById('result').innerHTML = (`${a} + ${b} = ${a + b}`);
                break;
            }
            case '-': {
                document.getElementById('result').innerHTML = (`${a} - ${b} = ${a - b}`);
                break;
            }
            case '*': {
                document.getElementById('result').innerHTML = (`${a} &#215 ${b} = ${a * b}`);
                break;
            }
            case '/': {
                document.getElementById('result').innerHTML = (`${a} &#247 ${b} = ${a / b}`);
                break;
            }
            default: {
                alert("Калькулятор не предусматривает данного действия!");
                document.getElementById('result').innerHTML = '';
            }
        }
    }
}