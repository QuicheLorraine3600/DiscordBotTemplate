import { List } from "immutable";
import { Command } from "./Command";

import Ping from "./src/Ping";
import Help from "./src/Help";

export default List<Command>([
	new Ping()
])

export { Ping, Help }