// 초기화
var coin = 0;
document.getElementById("current").innerHTML = coin + "원";
document.getElementById("selection").innerHTML = "아이스크림을 선택해주세요";

// 색상 변경 함수
function color_change() {
    if (coin >= 1000) {
        document.getElementById("icecream1").style.color = "blue";
        document.getElementById("icecream2").style.color = "blue";
        document.getElementById("icecream3").style.color = "blue";
    } else if (coin >= 700) {
        document.getElementById("icecream1").style.color = "blue";
        document.getElementById("icecream2").style.color = "red";
        document.getElementById("icecream3").style.color = "blue";
    } else if (coin >= 500) {
        document.getElementById("icecream1").style.color = "red";
        document.getElementById("icecream2").style.color = "red";
        document.getElementById("icecream3").style.color = "blue";
    } else {
        document.getElementById("icecream1").style.color = "red";
        document.getElementById("icecream2").style.color = "red";
        document.getElementById("icecream3").style.color = "red";
    }
}

// 금액 충전 함수
function click_btn1() {
    coin += 1000;
    document.getElementById("current").innerHTML = coin + "원";
    color_change();
}

function click_btn2() {
    coin += 500;
    document.getElementById("current").innerHTML = coin + "원";
    color_change();
}

function click_btn3() {
    coin += 100;
    document.getElementById("current").innerHTML = coin + "원";
    color_change();
}

// 아이스크림 선택 함수
function click_icecream1() {
    if (coin >= 700) {
        coin -= 700;
        document.getElementById("selection").innerHTML = "돼지바";
    } else {
        alert("돈이 부족합니다");
    }
    document.getElementById("current").innerHTML = coin + "원";
    color_change();
}

function click_icecream2() {
    if (coin >= 1000) {
        coin -= 1000;
        document.getElementById("selection").innerHTML = "월드콘";
    } else {
        alert("돈이 부족합니다");
    }
    document.getElementById("current").innerHTML = coin + "원";
    color_change();
}

function click_icecream3() {
    if (coin >= 500) {
        coin -= 500;
        document.getElementById("selection").innerHTML = "누크바";
    } else {
        alert("돈이 부족합니다");
    }
    document.getElementById("current").innerHTML = coin + "원";
    color_change();
}

// 리스너 등록
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const icecream1 = document.getElementById("icecream1");
const icecream2 = document.getElementById("icecream2");
const icecream3 = document.getElementById("icecream3");

btn1.addEventListener("click", click_btn1);
btn2.addEventListener("click", click_btn2);
btn3.addEventListener("click", click_btn3);

icecream1.addEventListener("click", click_icecream1);
icecream2.addEventListener("click", click_icecream2);
icecream3.addEventListener("click", click_icecream3);

// 초기 색상 설정
color_change();
