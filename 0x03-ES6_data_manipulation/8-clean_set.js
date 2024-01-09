/**
 * Cleans a Set by extracting strings that start with a specified prefix.
 * @param {Set} set - The Set to clean.
 * @param {string} startString - The prefix to filter strings.
 * @returns {string} - The cleaned string joined with '-'.
 */
export default function cleanSet(set, startString) {
  const parts = [];

  // Check input validity
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const v of set.values()) {
    // Use 'startsWith' to check if the string starts with 'startString'
    if (v.startsWith(startString)) {
      // Use 'substring' to extract the substring
      const s = v.substring(startString.length);
      parts.push(s);
    }
  }

  // Move 'return' statement outside the loop
  return parts.join('-');
}
