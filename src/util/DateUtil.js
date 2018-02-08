export function format(date) {
    if (date) {
        const objDate = new Date(date);
        return objDate.toLocaleString("en-us", {month: "long"})
            .concat(" ")
            .concat(objDate.getFullYear())
    }
    return "Present";
}