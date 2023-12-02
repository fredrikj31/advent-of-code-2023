import * as fs from "fs";
import * as path from "path";
import { handler } from ".";

const main = () => {
  const fileContent = fs.readFileSync(path.join(__dirname, "../data.txt"));
  const sum = handler(fileContent.toString());
  console.log("Sum of powers of minimum cubes:", sum);
};

if (require.main === module) {
  main();
}
