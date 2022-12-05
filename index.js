let text = document.getElementById('text')
text.addEventListener('input', () => {
    text.style.height = 0;
    text.style.height = text.scrollHeight + "px";
})