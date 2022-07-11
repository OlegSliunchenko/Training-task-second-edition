import { IDataType } from '@utils/type';

const SortingFunction = (data: IDataType[]): void => {
  const rez = data.sort((a, b) => {
    if (a.user < b.user) {
      return -1;
    }
    if (a.user > b.user) {
      return 1;
    }
    return 0;
  }).sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
  return console.log(rez);
};
export default SortingFunction;
