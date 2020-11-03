let number;

function checkNumber() {
    do {
        number = +prompt("Nhập số N: ");
        if (number < 0 || number % 2 === 0) {
            alert("Nhập lại N");
        }
    } while (number < 0 || number % 2 === 0)
    {
        document.getElementById('_checkNumber').innerHTML = number + " là số dương lẻ."
    }
}

function checkPrime() {
    let result = isPrime(number);
    if (result == false) {
        document.getElementById('_checkPrime').innerHTML = number + " không phải SNT";
    } else if (result == true) {
        document.getElementById('_checkPrime').innerHTML = number + " là SNT";
    }
}

function isPrime(number) {
    let i = 2;
    if (number < 2) {
        return false;
    }
    while (Math.sqrt(number) >= i) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

function listPrime() {
    let number = +prompt("Nhập số các số nguyên tố: ");
    let count = 0;
    let n = 2;
    let k = '';

    while (count < number) {
        let i = 2;
        let flag = true;
        while (i <= Math.sqrt(n)) {
            if (n % i === 0) {
                flag = false;
                break;
            }
            i++;
        }
        if (flag) {
            k += n + " ,";
            count++;
        }
        n++;
        document.getElementById('_printerPrime').innerHTML = k;
    }
}


let arr = [];

function listArray() {
    let number = +prompt("Nhập số phần tử trong mảng: ");
    for (let i = 0; i < number; i++) {
        arr[i] = +prompt("Nhập phần tử thứ " + i);
    }
    document.getElementById('_listArray').innerHTML = "Các phần tử vừa nhập vào mảng là: " + arr;
}

function primeArray() {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            str += arr[i] + ',';
        }
    }
    document.getElementById("_primeArray").innerHTML = str;
}


let number1;

function checkArray() {
    number1 = +prompt("Nhập số cần kiểm tra:");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number1) {
            document.getElementById("_checkArray").innerHTML = "Vị trí thứ " + i + " , và có giá trí là: " + arr[i];
            break;
        } else {
            document.getElementById("_checkArray").innerHTML = "Không có " + number1 + " trong mảng.";
        }
    }
}

function deleteNumber() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number1) {
            arr.splice(i, 1);
        }
    }
    document.getElementById('_deleteNumber').innerHTML = "Mảng có các phần tử: " + arr;
}

function sortArray() {
    let equal;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if ( arr[i] > arr[j]){
                equal = arr[i];
                arr[i] = arr[j];
                arr[j] = equal;
            }
        }
    }
    document.getElementById('_sortArray').innerHTML = "Mảng có các phần tử: " + arr;
}

function pushNumber() {
    let equal1;
    let number2 = prompt("Nhập phần tử thêm vào: ");
    arr.push(number2);
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if ( arr[i] > arr[j]){
                equal1 = arr[i];
                arr[i] = arr[j];
                arr[j] = equal1;
            }
        }
    }
    document.getElementById('_pushArray').innerHTML = "Mảng có các phần tử: " + arr;
}
