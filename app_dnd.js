const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const plaseholder of placeholders) {
    plaseholder.addEventListener('dragover', dragover)
    plaseholder.addEventListener('dragenter', dragenter)
    plaseholder.addEventListener('dragleave', dragleave)
    plaseholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item'
    //event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}