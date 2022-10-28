const args = process.argv;

const flagger = (flag, def) => {
  const flagKey = args.indexOf(flag);
  return (flagKey > -1) ? args[flagKey + 1] || def : def
}

export {args, flagger}