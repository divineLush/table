export const toUpper = str => str.toUpperCase()

export class MainTableCell {
    constructor(
        data,
        colSpan = 1,
        boldHighlight = false,
        colorHighlight = false,
        borderHighlight = false,
        backgroundHighlight = false
    ) {
        this.colSpan = colSpan
        this.borderHighlight = borderHighlight
        this.backgroundHighlight = backgroundHighlight
        this.colorHighlight = colorHighlight
        this.boldHighlight = boldHighlight
        this.data = data
    }
}
