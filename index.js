var password = "PRDEVS"

function passCheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong password! Try again.')
    }return false;

    if(document.getElementById('pass1').value == password) {
        alert('Correct password! Click OK to enter the PrimeReapers Webpage!')
    }
}