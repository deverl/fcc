function mapKeysWithCustomMapping(obj, mapping) {
    const newObj = {};
    for (const [camelKey, value] of Object.entries(obj)) {
        const snakeKey = mapping[camelKey] || camelKey; // fallback if not in map
        newObj[snakeKey] = value;
    }
    return newObj;
}

export { mapKeysWithCustomMapping };
