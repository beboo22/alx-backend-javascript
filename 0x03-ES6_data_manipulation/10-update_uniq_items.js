/**
 * Retrieves a map of grocery names and their quantity.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Map<string, Number>}
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
}
