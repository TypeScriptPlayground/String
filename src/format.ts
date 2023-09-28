interface FormatArgs {
    [formatKey : string] : string | number
}

export function format(
    string : string,
    formatArgs : FormatArgs
) : string {
    return string.replace(/(?<!\\)\{\s*(\w+)\s*}/gm, (_, formatKey : string) : string => {
        if (!Object.hasOwn(formatArgs, formatKey)) {
            throw new ReferenceError(`Format key '${formatKey}' in string does not exist on the provided format object`);
        }
        return formatArgs[formatKey].toString()
    })
}
