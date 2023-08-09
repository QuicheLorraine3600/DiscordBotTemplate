import { List } from "immutable";
import { Command } from "./Command";

import Ping from "./src/Ping";

export default List<Command>([
	new Ping()
])

export { Ping }