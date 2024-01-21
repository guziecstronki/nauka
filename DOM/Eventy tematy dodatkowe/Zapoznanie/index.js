const clicks = document.querySelectorAll('.click')

const clickWithoutBubbling = new Event("click", {'bubbles': false})
const showElement = function(e) {e.stopPropagation(); console.log(this)}
clickWithoutBubbling.click = showElement
clicks.forEach(element => {
    element.addEventListener('click', element.dispatchEvent(clickWithoutBubbling))
})
