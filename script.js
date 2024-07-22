function getSize() {
    let size = prompt("Enter grid size:");
    return parseInt(size);
}

function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    container.style.width = '100vmin';
    container.style.height = '100vmin';

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.style.flex = `1 0 calc(100% / ${size})`;
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = 'black';
        });
        container.appendChild(div);
    }

    const style = document.createElement('style');
    style.innerHTML = `.item { aspect-ratio: 1 / 1; }`;
    document.head.appendChild(style);
}

const btn = document.querySelector(".grid");
btn.addEventListener("click", function() {
    const size = getSize();
    if (size && size > 0) {
        createGrid(size);
    } else {
        alert("Please enter a valid number greater than 0");
    }
});

createGrid(16);
