export function atGigabytes(sizeInGB) {
    if (sizeInGB >= 1024) {
      const terabytes = sizeInGB / 1024;
      return `${terabytes.toFixed(1)} TB`;
    } else {
      return sizeInGB.toFixed(1) + 'GB';
    }
}
