/*const dropdowns = document.querySelectorAll('.dropdown');
const ham = document.getElementsByClassName('.btn-ham');
const close = document.getElementsByClassName('.btn-close');
const nav = document.getElementsByClassName('.nav-list');
const login = document.getElementsByClassName('.nav-right');*/

function mobileMenu() {
    if (document.getElementsByClassName('.nav-list').style.display === 'block') {
        document.getElementsByClassName('.btn-close').style.display = 'flex';
        document.getElementsByClassName('.btn-ham').style.display = 'none';
    } else {
        document.getElementsByClassName('.nav-list').style.display = 'block';
    }
}

document.getElementsByClassName('.btn-ham').addEventListener('click', mobileMenu);