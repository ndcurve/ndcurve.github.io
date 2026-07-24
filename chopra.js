function generateWisdom() {
    const starts = ["Wholeness", "Perception", "Infinity", "The soul", "Consciousness", "Pure awareness", "Your movement"];
    const verbs = ["transcends", "nurtures", "enlivens", "explores", "hidden within", "gives rise to", "manifests"];
    const objects = ["infinite potentiality", "cosmic destiny", "quantum vibrations", "the unmanifest", "eternal stillness", "the self"];

    const randomStart = starts[Math.floor(Math.random() * starts.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    return `${randomStart} ${randomVerb} ${randomObject}.`;
}

// Example usage:
console.log(generateWisdom());
