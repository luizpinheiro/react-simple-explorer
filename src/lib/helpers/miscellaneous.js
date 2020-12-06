export const formatBytes = (bytes) => {
  if (bytes < 1024) { return `${bytes}B` }

  let internalBytes = bytes / 1024
  if (internalBytes < 1024) { return `${Math.round(internalBytes * 10) / 10}K` }

  internalBytes = bytes / 1048576
  if (internalBytes < 1024) { return `${Math.round(internalBytes * 10) / 10}M` }

  internalBytes = Math.ceil(bytes / (1073741824))
  return `${Math.round(internalBytes * 10) / 10}G`
}
