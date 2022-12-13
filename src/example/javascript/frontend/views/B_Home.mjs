import {View} from "../../../../framework/core/View.mjs";
import {Default} from "../../../../framework/generics/frontend/templates/Default.mjs";
import {Header} from "../../../../framework/generics/frontend/atoms/Header.mjs";
import {Paragraph} from "../../../../framework/generics/frontend/atoms/Paragraph.mjs";
import {Table} from "../../../../framework/generics/frontend/organisms/Table.mjs";
import {users} from "../../mock_data/mockData.mjs";
import {TableRow} from "../../../../framework/generics/frontend/molecules/TableRow.mjs";
import {TableHeaders} from "../../../../framework/generics/frontend/molecules/TableHeaders.mjs";

export function B_Home() {
    View.call(this)

    this.title = "Home"

    const header = new Header(1, "Home")
    const firstParagraph = new Paragraph("This is the home page")

    const headers = new TableHeaders(["Name", "Age"])
    const rows = users.map(user => new TableRow([user.name, user.age]))
    const table = new Table(
        headers,
        rows
    )

    const pageComponents = [header, firstParagraph, table]

    this.template = new Default()
    this.template.components.push(...pageComponents)

}