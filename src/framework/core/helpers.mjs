const tableLexicon = [
    "<tr>",
    "</tr>",
    "<td>",
    "</td>",
    "<thead>",
    "</thead>",
    "<tbody>",
    "</tbody>",
]

/**
 * Take a string and make it into an HTML element.
 *
 * @param {string} string
 * @returns {Element}
 */
export function stringToHTMLElement (string) {



    // const frameTag = (string.split(" ")[0].startsWith(`<tr>`)) ? "table" : "div" // Table subTags get automatically removed when not in a table tag. Ths is a workaround.

    let formattedString = string.split("\n")
        .map(s => s.trim())
        // If you want to remove empty lines.
        .filter(Boolean)
        .join("\n");
    const isTablePart = (tableLexicon.some(lexicon => formattedString.startsWith(lexicon))) ? "table" : "div" // Table subTags get automatically removed when not in a table tag. Ths is a workaround.
    const frameTag = isTablePart? "table" : "div" // Table subTags get automatically removed when not in a table tag. Ths is a workaround.

    const frame = document.createElement(frameTag);

    frame.insertAdjacentHTML("afterbegin", string);

    console.log("string: " + string)
    console.log("frameTag: " + frameTag)
    console.log("frame inner: " + frame.innerHTML)
    console.log("frame: ", frame)

    if(isTablePart){
        return frame.firstElementChild.firstElementChild
    } else {
        return frame.firstElementChild
    }
}


export function slot (name, isTablePart = false) {
    const tag = isTablePart ? "td" : "div"

    return `<${tag} data-slot="${name}" class="slot"></${tag}>`
}