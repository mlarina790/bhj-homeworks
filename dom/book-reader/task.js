const allFontSizeElement = Array.from(document.getElementsByClassName('font-size'));

function sizeElementClick(event) {
    event.preventDefault();
    let activeElement = this.closest('div.book__control').querySelector('a.font-size_active');
    activeElement.classList.remove('font-size_active');
    this.classList.add('font-size_active');
    let dataAttr = this.getAttribute("data-size");
    if (dataAttr === "small") {
        this.closest('div.book').className = "book book_fs-small";
    } else if (dataAttr === "big") {
        this.closest('div.book').className = "book book_fs-big";
    } else {
        this.closest('div.book').className = "book";
    }

}
for (let i = 0; i < allFontSizeElement.length; i++) {
    const fontSizeElement = allFontSizeElement[i];
    fontSizeElement.addEventListener('click', sizeElementClick)
}