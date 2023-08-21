export function atGigabytes(sizeInGB) {
    if (sizeInGB >= 1000) {
      const terabytes = sizeInGB / 1000;
      return `${terabytes.toFixed(1)} TB`;
    } else {
      return sizeInGB.toFixed(1) + 'GB';
    }
}