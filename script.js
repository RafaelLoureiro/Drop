let areasDrop = {
    a: null,
    b: null,
    c: null
}


document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

//events
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dragDropNeutral);


//function Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}




//function Area


function dragOver(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}
function drop(e) {
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector('.item') === null) {
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}

//function neutral area


function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}
function dragDropNeutral(e) {
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    e.currentTarget.classList.remove('hover');
    updateAreas();
}

//functions logic

function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let nameArea = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areasDrop[nameArea] = area.querySelector('.item').innerHTML;
        } else { areasDrop[nameArea] = null; }

    });
    if (areasDrop.a === '1' && areasDrop.b === '2' && areasDrop.c === '3') {
        document.querySelector('.areasDrop').classList.add('correct');
    } else {
        document.querySelector('.areasDrop').classList.remove('correct');
    }
}
