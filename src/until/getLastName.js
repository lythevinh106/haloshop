

export const getLastName = (str) => {

    const result = str.split(" ");

    // console.log(result[result.length - 1])

    return result[result.length - 1];
}