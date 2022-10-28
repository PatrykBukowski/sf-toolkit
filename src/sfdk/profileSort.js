#!/usr/bin/env node
import {profileSortHelp} from "../help/index.js";
import ProfileSortingTool from "../profileSortingTool/index.js";
if (process.argv.length > 2)ProfileSortingTool();
else profileSortHelp();