export default class CommonUtil {
    static groupByColumn = (arr, columnNum, total) => {
        return arr.filter((e, idx) => idx % total === columnNum);
    };
}