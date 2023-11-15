var span = document.getElementsByTagName('span');
var home = document.getElementById('home');
var about = document.getElementById('about');
var skills = document.getElementById('skills');
var education = document.getElementById('education');
var certificate = document.getElementById('certificate');
var contact = document.getElementById('contact');
var hamburger = document.getElementById('hamburger');
var navlist = document.getElementById("navlist");
span[0].style.width = "49px";

function myfunc1() {
    for (var i = 0; i <= 5; i++) {
        span[i].style.width = '0px';
        span[i].style.transition = "all 0.5s ease-in-out";
    }
    span[0].classList.add('span1');
    span[0].style.width = "49px";
    span[0].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
function myfunc2() {
    for (var i = 0; i <= 5; i++) {
        span[i].style.width = '0px';
        span[i].style.transition = "all 0.5s ease-in-out";
    }
    span[1].classList.add('span2');
    span[1].style.width = "49px";
    span[1].style.transition = "all 0.5s ease-in-out";
    console.log(2)
}
function myfunc3() {
    for (var i = 0; i <= 5; i++) {
        span[i].style.width = '0px';
        span[i].style.transition = "all 0.5s ease-in-out";
    }
    span[2].classList.add('span3');
    span[2].style.width = "42px";
    span[2].style.transition = "all 0.5s ease-in-out";
    console.log(3)
}
function myfunc4() {
    for (var i = 0; i <= 5; i++) {
        span[i].style.width = '0px';
        span[i].style.transition = "all 0.5s ease-in-out";
    }
    span[3].classList.add('span4');
    span[3].style.width = "76px";
    span[3].style.transition = "all 0.5s ease-in-out";
    console.log(4)
}
function myfunc5() {
    for (var i = 0; i <= 5; i++) {
        span[i].style.width = '0px';
        span[i].style.transition = "all 0.5s ease-in-out";
    }
    span[4].classList.add('span5');
    span[4].style.width = "78px";
    span[4].style.transition = "all 0.5s ease-in-out";
    console.log(5)
}
function myfunc6() {
    for (var i = 0; i <= 5; i++) {
        span[i].style.width = '0px';
        span[i].style.transition = "all 0.5s ease-in-out";
    }
    span[5].classList.add('span6');
    span[5].style.width = "59px";
    span[5].style.transition = "all 0.5s ease-in-out";
    console.log(6)
}
function myfunc11() {
    span[0].style.width = "0px";
    span[0].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
function myfunc22() {
    span[1].style.width = "0px";
    span[1].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
function myfunc33() {
    span[2].style.width = "0px";
    span[2].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
function myfunc44() {
    span[3].style.width = "0px";
    span[3].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
function myfunc55() {
    span[4].style.width = "0px";
    span[4].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
function myfunc66() {
    span[5].style.width = "0px";
    span[5].style.transition = "all 0.5s ease-in-out";
    console.log(1);
}
var i = 2;
function navbar() {
    if (i % 2 == 0) {
        navlist.style.marginLeft = "200px";
        navlist.style.transition = "all 0.5s ease-in-out";
        i++;
    }
    else {
        navlist.style.marginLeft = "1000px";
        navlist.style.transition = "all 0.5s ease-in-out";
        i++;
    }

}