import { read, write } from "../utils/fs.js";
import { build, parse } from "../utils/xml.js";
import { flagger } from "../utils/flagger.js";
import xmlf from "../utils/xmlf.js";

const LabelSortTool = () => {
  const inputFile = flagger("-in", "CustomLabels.labels-meta.xml");
  const outputFile = flagger("-out", "CustomLabels.labels-meta.xml");
  Object.prototype.xmlf = xmlf;

  const file = parse(read(inputFile));

  file.elements.xmlf("CustomLabels").elements.sort((a, b) => {
    const fullNameA = a.xmlf("fullName").xmlf("text").text;
    const fullNameB = b.xmlf("fullName").xmlf("text").text;
    return fullNameA.localeCompare(fullNameB);
  });

  write(outputFile, build(file));
};
export default LabelSortTool;
