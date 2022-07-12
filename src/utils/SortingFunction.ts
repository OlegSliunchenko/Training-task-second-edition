import { IDataType } from '@utils/type';

const SortingFunction = (data: IDataType[], key: string[]): void => {
  for (let h = 0; h < key.length; h += 1) {
    for (let i = 0; i < data.length; i += 1) {
      for (let j = 0; j < data.length - i - 1; j += 1) {
        if (
          data[j][key[h] as keyof IDataType]
          > data[j + 1][key[h] as keyof IDataType]
        ) {
          const temp = data[j];
          // eslint-disable-next-line no-param-reassign
          data[j] = data[j + 1];
          // eslint-disable-next-line no-param-reassign
          data[j + 1] = temp;
        }
      }
    }
  }
  console.log(data);
};
export default SortingFunction;
