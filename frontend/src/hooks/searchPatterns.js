export default function searchPatterns(content, patterns) {
    for (let i=0; i<patterns.length; i++) {
        if (patterns[i].name === content.name) {

            let patternArgs = patterns[i].arguments
            for (let j=0; j<patternArgs.length; j++) {
                patternArgs[j].value = content.arguments[j] === undefined ? "" : content.arguments[j].value
            }
            return patternArgs
        }
    }
    return []
}