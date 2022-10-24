# sf-toolkit

## Install

```shell
npm i -g sf-toolkit
```

## List of tools

1. Labels difference checker
2. Label sorting tool

## Labels difference checker

### Usage

```shell
sf-toolkit -p dc {params}
sf-toolkit -p differenceChecker {params}
sftk-diff {params}
```

### Params 

1. `-in1 {val}` - first filepath (default: file1.xml)
2. `-in2 {val}` - second filepath (default: file2.xml)
3. `-o1 {val}` - output name for correct labels (default: correct.xml)
4. `-o2 {val}` - output name for labels missing in file1 (default: missingInA.xml)
5. `-o3 {val}` - output name for labels missing in file2 (default: missingInB.xml)
6. `-o4 {val}` - output name for mismatch label (default: incorrect.xml)

### Examples

```shell
sf-toolkit -p dc -in1 org.xml -in2 repo.xml
sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o1 ok.xml
sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o2 notInOrg.xml -o3 notInRepo.xml
sftk-diff -in1 org.xml -in2 repo.xml
```

## Label sorting tool

### Usage

```shell
sf-toolkit -p sortTool {params}
sf-toolkit -p st {params}
sf-toolkit -p sort {params}
sftk-sort {params}
```

### Params

1. `-in {val}` - input file (default: CustomLabels.labels-meta.xml)
2. `-out {val}` - output file (default: CustomLabels.labels-meta.xml)

### Examples

```shell
sf-toolkit -p dc -in1 org.xml -in2 repo.xml
sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o1 ok.xml
sf-toolkit -p dc -in1 org.xml -in2 repo.xml -o2 notInOrg.xml -o3 notInRepo.xml
sftk-diff -in1 org.xml -in2 repo.xml
```

## Licence

MIT @ [Patryk Bukowski](https://github.com/PatrykBukowski)