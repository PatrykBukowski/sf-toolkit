const templateMain = (value) => {
  let elements;
  if(Array.isArray(value)){
    elements = value
  }else if (typeof value === 'object'){
    elements = [value]
  }else{
    elements = [];
  }
  return {
    declaration: {
      attributes: {version: '1.0', encoding: 'UTF-8'}
    }, elements: [{
      type: 'element',
      name: 'CustomLabels',
      attributes: {xmlns: 'http://soap.sforce.com/2006/04/metadata'},
      elements: elements
    }]
  }
}

const addElement = (name, elements) => {
  return {
    type: 'element', name: name, elements: [...elements]
  }
}

const templateAll = ({
                       correct, incorrect, missingInA, missingInB,
                     }) => {
  const ret = {
    declaration: {
      attributes: {version: '1.0', encoding: 'UTF-8'}
    }, elements: []
  }
  if (correct) ret.elements.push(addElement('Correct', correct));
  if (incorrect) ret.elements.push(addElement('Incorrect', incorrect));
  if (missingInA) ret.elements.push(addElement('MissingInA', missingInA));
  if (missingInB) ret.elements.push(addElement('MissingInB', missingInB));
  return ret;
}

export {templateMain, templateAll}