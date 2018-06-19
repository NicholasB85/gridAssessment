function Cell(rowIndex, colIndex, width, height) {
    this.element = document.createElement("div");
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.isClicked = false;
    this.element.dataset.rowIndex = rowIndex;
    this.element.dataset.colIndex = colIndex;
    this.element.classList.add("cell");
    this.element.style.width = width + "px";
    this.element.style.height = height + "px";
    // this.parentElement = parentElement;
    // this.parentElement.appendChild(this.element);
    // idk what to do for the cell yet

}

Cell.prototype = {

    setAsClicked: function() {
        this.isClicked = true;
    },
    

    constructor: Cell,
}