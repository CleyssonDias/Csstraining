var isTheme = 0;
function start() {
    var style = document.getElementById('main');
    if (1 == isTheme) {
        style.innerHTML = '<input type="button" value="🌞" onclick="start()">'
        style.classList.remove('claro')
        style.classList.add('dark')
        isTheme = 0
    } else if (0 == isTheme) {
        style.innerHTML = '<input type="button" value="🌙" onclick="start()">'
        style.classList.remove('dark')
        style.classList.add('claro')
        isTheme = 1
    }
    console.log(isTheme)
}