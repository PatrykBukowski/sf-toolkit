#!/usr/bin/env node
import {sortHelp} from "../help/index.js";
import LabelSortTool from "../labelSortTool/index.js";
if (process.argv.length > 2)LabelSortTool();
else sortHelp();