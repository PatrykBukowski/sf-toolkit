import {read, write} from "../utils/fs.js";
import {build, parse} from '../utils/xml.js';
import {flagger} from "../utils/flagger.js";
import xmlf from "../utils/xmlf.js";

const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {})
}

const SORT_KEYWORDS = {
  applicationVisibilities: 'application',
  categoryGroupVisibilities: 'dataCategoryGroup',
  classAccesses: 'apexClass',
  customSettingAccesses:'name',
  fieldPermissions: 'field',
  flowAccesses: 'flow',
  layoutAssignments: 'layout',
  objectPermissions: 'object',
  pageAccesses: 'apexPage',
  recordTypeVisibilities: 'recordType',
  tabVisibilities: 'tab'
}

const ProfileSortingTool = () => {
  const inputFile = flagger('-in', 'Admin.profile-meta.xml');
  const outputFile = flagger('-out', 'Admin.profile-meta.xml');
  const file = parse(read(inputFile));
  Object.prototype.xmlf = xmlf;

  const allLabels = file.xmlf('Profile').elements

  const group = groupBy(allLabels, 'name');
  let newGroup = [];
  for(const index in group){
    if(index === 'xmlf') continue;
    if(!SORT_KEYWORDS[index]) {
      newGroup.push(...group[index]);
      continue;
    }
    const masterTag = group[index];
    masterTag.sort((elementA, elementB) => {
      const a = elementA.elements.xmlf(SORT_KEYWORDS[index]).xmlf('text').text;
      const b = elementB.elements.xmlf(SORT_KEYWORDS[index]).xmlf('text').text;
      return a.localeCompare(b);
    })
    newGroup.push(...group[index]);
  }
  file.xmlf('Profile').elements = newGroup
  write(outputFile, build(file))
}

export default ProfileSortingTool