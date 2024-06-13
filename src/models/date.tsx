export const GetYear = () => {
    let date = new Date();
    let year = date.getFullYear();
    return year.toString();
}