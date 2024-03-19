
export const transformIntoString = (array: any[], field: string) => {
    let values:string = "";
    array.forEach((value, index) => {
      values += index < array.length -1 ? value[field]+"," : value[field]
    });

    return values;
}