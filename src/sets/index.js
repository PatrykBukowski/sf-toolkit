const difference = (arr1, arr2) => {
  const arr1Elements = arr1.xmlf("CustomLabels").elements;
  const arr2Elements = arr2.xmlf("CustomLabels").elements;

  return arr1Elements.filter((element1) => {
    return !arr2Elements.some((element2) => {
      const fullName1 = element1.xmlf("fullName").xmlf("text").text;
      const fullName2 = element2.xmlf("fullName").xmlf("text").text;
      return fullName1 === fullName2;
    });
  });
};

const intersection = (arr1, arr2) => {
  const arr1Elements = arr1.xmlf("CustomLabels").elements;
  const arr2Elements = arr2.xmlf("CustomLabels").elements;

  return arr1Elements.filter((element1) => {



    return arr2Elements.some((element2) => {
      const fullName1 = element1.xmlf("fullName").xmlf("text").text;




      const fullName2 = element2.xmlf("fullName").xmlf("text").text;
      return fullName1 === fullName2;
    });
  });
};

export { difference, intersection };
