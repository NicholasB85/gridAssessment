function Grid(rows, columns, cellWidth, cellHeight, parentElement, offsets) {

    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.rows = rows;
    this.columns = columns;
    this.offsets = Object.values(offsets || {
        above: [-1, +0],
        aboveRight: [-1, +1],
        right: [+0, +1],
        downRight: [+1, +1],
        down: [+1, 0],
        downLeft: [+1, -1],
        left: [0, -1],
        aboveLeft: [-1, -1]
    })
    this.addElement(parentElement)
    this.createGrid();
}

Grid.prototype = {

    createGrid: function () {
        this.gridArray = []
        
        for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
            this.gridArray.push([]);
            
            const rowElement = this.createRowElement();
            this.gridArray[rowIndex].element = rowElement;
            
            for (let colIndex = 0; colIndex < this.columns; colIndex++) {
                
                const cell = new Cell(rowIndex, colIndex, this.cellWidth, this.cellHeight);
                rowElement.appendChild(cell.element);
                this.gridArray[rowIndex].push(cell);

                
            }
            console.log(this.gridArray);
        }
    },

    createRowElement: function () {
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");
        rowElement.style.height = this.cellHeight + "px";
        this.element.appendChild(rowElement);

        return rowElement;
    },
    
    addElement: function (parentElement) {
        this.element = document.createElement("div");
        this.element.addEventListener("click", this.clickHandle.bind(this));
        this.element.classList.add("grid");
        this.element.id = "grid";
        this.parentElement = parentElement;
        this.parentElement.appendChild(this.element);
    },

    findCellByIndexes: function (rowIndex, colIndex) {
        const row = this.gridArray[Number(rowIndex)] || null
        const cell = row && row[Number(colIndex)] || null
        return cell
    },

    clickHandle: function (event) {
        
        console.log(event.target.dataset.rowIndex);
        let x = ( this.findCellByIndexes(event.target.dataset.rowIndex , event.target.dataset.colIndex));
        console.log(this.findNeighbors(x));
        console.log("hey");
        console.log(x);
        x.setAsClicked();
        console.log(x);
    },
    
    findNeighbors: function ({ rowIndex, colIndex }) {
        return this.offsets
            .map(([ rowOffset, colOffset ]) => {
                return this.findCellByIndexes(rowIndex + rowOffset, colIndex + colOffset)
            })
            .filter(cell => cell !== null)
    },

    constructor: Grid,
}