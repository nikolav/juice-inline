const path = require("path");
const fs = require("fs");

const find = require("lodash/find");
const juice = require("juice");

const MESSAGE = find(process.argv, (val) => val.startsWith("--message"))
  .split("=")[1]
  .trim();
const outFile = "out.html";

const dir_ = path.join(
  path.dirname(path.resolve(__filename)),
  "message",
  MESSAGE
);
const file_ = path.join(dir_, "index.html");

juice.juiceResources(
  fs.readFileSync(file_, "utf8").toString(),
  {
    webResources: {
      images: true,
      svgs: true,
      scripts: true,
      links: true,
      relativeTo: dir_,
    },
  },
  (_error, htmlInlined) => {
    fs.writeFileSync(outFile, htmlInlined, {
      flag: "w",
    });
  }
);
