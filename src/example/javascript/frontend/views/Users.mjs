import {View} from "../../../../framework/core/View.mjs";
import {Default} from "../../../../framework/generics/frontend/templates/Default.mjs";
import {Table} from "../../../../framework/generics/frontend/organisms/Table.mjs";
import {Header} from "../../../../framework/generics/frontend/atoms/Header.mjs";
import {Paragraph} from "../../../../framework/generics/frontend/atoms/Paragraph.mjs";
import {users} from "../../mock_data/mockData.mjs";
import {getCellCoords} from "../../../../framework/generics/helpersm.js";

export function Users() {
    View.call(this)

    this.title = "Home"

    const header = new Header(1, "Users")
    const paragraph = new Paragraph("This is the users page")


    function clickHandler (event) {
        const data = this.data
        const coords = getCellCoords(event)

        const clickedUser = data[coords.y]
        const clickedProp = Object.entries(clickedUser)[coords.x]
        console.log( 'clicked on ' + clickedProp + " of " + Object.entries(clickedUser))
    }

    const table = new Table(
        ["Name", "Age"],
        users.map(user => [user.name.toUpperCase(), user.age]),
        clickHandler,
        users
    )

    const pageComponents = [header, paragraph, table]

    this.template = new Default()
    this.template.components.push(...pageComponents)

}