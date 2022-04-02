// clone

const copy = document.querySelector('.copy-container')
const cloned = document.querySelectorAll('.original-container div')
function addClicks(event) {
    copy.insertAdjacentHTML('afterbegin', event)
}

cloned.forEach(element => element.addEventListener('click', (evt) => {
    addClicks(evt.currentTarget.outerHTML)
}))

// delete

const Delete = document.querySelector('button')
function deleteCloned() {
    while (copy.firstChild) {
        copy.removeChild(copy.firstChild)}
}

Delete.addEventListener('click', deleteCloned)
