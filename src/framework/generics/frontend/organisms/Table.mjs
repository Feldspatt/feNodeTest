export function Table(headers, rows){

    this.headers = headers
    this.rows = rows

    this.getHTML = function(){
        return `
        <table>
            <thead>
                <tr>
                    ${this.headers}
                </tr>
            </thead>
            <tbody>
                ${this.rows}
            </tbody>
        </table>
        `
    }

}