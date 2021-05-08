const input = document.querySelectorAll('.controls input');

function handlingUpadte() {
    let dataSizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + dataSizing);
}

input.forEach(input => input.addEventListener('change', handlingUpadte));
input.forEach(input => input.addEventListener('mousemove', handlingUpadte));