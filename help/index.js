const help = () => {
  console.log([
    '# PROGRAMS',
    '1. DIFFERENCE CHECKER',
    '',
    '# HOW TO USE',
    '',
    '## DIFFERENCE CHECKER',
    'node sf-toolkit -p dc',
    'node sf-toolkit -p differenceChecker',
    '### PARAMS',
    '1. -in1 - first filepath (default: file1.xml)',
    '2. -in2 - second filepath (default: file2.xml)',
    '3. -o1 - output name for correct labels (default: correct.xml)',
    '4. -o2 - output name for labels missing in file1 (default: missingInA.xml)',
    '5. -o3 - output name for labels missing in file2 (default: missingInB.xml)',
    '6. -o4 - output name for mismatch label (default: incorrect.xml)',
    '',
    '# EXAMPLES',
    '',
    'node sf-toolkit -p dc -in1 org.xml -in2 repo.xml',
    'node sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o1 ok.xml',
    'node sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o2 notInOrg.xml -o3 notInRepo.xml',
  ].join('\n'))
}
export default help;