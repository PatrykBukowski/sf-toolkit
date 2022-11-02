const diffHelp = () => {
  console.log(
    [
      "",
      "######################",
      "# DIFFERENCE CHECKER #",
      "######################",
      "",
      "sf-toolkit -p dc {params}",
      "sf-toolkit -p differenceChecker {params}",
      "sftk-diff {params}",
      "",
      "## params",
      "",
      "1. -in1 - first filepath (default: file1.xml)",
      "2. -in2 - second filepath (default: file2.xml)",
      "3. -o1 - output name for correct labels (default: correct.xml)",
      "4. -o2 - output name for labels missing in file1 (default: missingInA.xml)",
      "5. -o3 - output name for labels missing in file2 (default: missingInB.xml)",
      "6. -o4 - output name for mismatch label (default: incorrect.xml)",
      "",
      "## examples",
      "",
      "sf-toolkit -p dc -in1 org.xml -in2 repo.xml",
      "sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o1 ok.xml",
      "sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o2 notInOrg.xml -o3 notInRepo.xml",
      "sftk-diff -in1 org.xml -in2 repo.xml",
    ].join("\n")
  );
};
const sortHelp = () => {
  console.log(
    [
      "",
      "###################",
      "# LABEL SORT TOOL #",
      "###################",
      "",
      "sf-toolkit -p sortTool {params}",
      "sf-toolkit -p st {params}",
      "sf-toolkit -p sort {params}",
      "sftk-sort {params}",
      "",
      "## params",
      "",
      "1. -in - input file (default: CustomLabels.labels-meta.xml)",
      "2. -out - output file (default: CustomLabels.labels-meta.xml)",
      "",
      "## examples",
      "",
      "sf-toolkit -p sortTool -in label.xml",
      "sf-toolkit -p st -out SortedLabels.xml",
      "sftk-sort -in input.xml -out output.xml",
    ].join("\n")
  );
};

const profileSortHelp = () => {
  console.log(
    [
      "",
      "###################",
      "# PROFILE SORT TOOL #",
      "###################",
      "",
      "sf-toolkit -p pst {params}",
      "sftk-profilesort {params}",
      "",
      "## params",
      "",
      "1. -in - input file (default: Admin.profile-meta.xml)",
      "2. -out - output file (default: Admin.profile-meta.xml)",
      "",
      "## examples",
      "",
      "sf-toolkit -p pst -in Admin.profile-meta.xml",
      "sf-toolkit -p pst -out Customer.profile-meta.xml",
      "sftk-profilesort -in input.xml -out output.xml",
    ].join("\n")
  );
};

const help = () => {
  console.log(
    [
      "",
      "# PROGRAMS",
      "",
      "1. DIFFERENCE CHECKER",
      "2. LABEL SORT TOOL",
      "3. PROFILE SORT TOOL",
      "",
      "# HOW TO USE",
    ].join("\n")
  );

  diffHelp();
  sortHelp();
  profileSortHelp();
};

export default help;
export { diffHelp, sortHelp, profileSortHelp };
