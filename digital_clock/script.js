const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

setInterval(() => {
const now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let amPm = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12 || 12; // Convert 0 (midnight) and 12 (noon) properly
minute = minute.toString().padStart(2, '0'); // Ensure two digits
second = second.toString().padStart(2, '0');
hours.innerText = hour;
minutes.innerText = minute;
seconds.innerText = second
ampm.innerText = amPm;
}, 1000);


