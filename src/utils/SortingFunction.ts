import { IDataType } from '@utils/type';

const SortingFunction = (
  data: IDataType[],
  key?: string[],
): void | IDataType[] => {
  const NewData = JSON.parse(JSON.stringify(data));
  if (!key) {
    return data;
  }
  for (let h = 0; h < key.length; h += 1) {
    for (let i = 0; i < NewData.length; i += 1) {
      for (let j = 0; j < NewData.length - i - 1; j += 1) {
        if (h === 0
          && NewData[j][key[h] as keyof IDataType]
            > NewData[j + 1][key[h] as keyof IDataType]
        ) {
          const temp = NewData[j];
          // eslint-disable-next-line no-param-reassign
          NewData[j] = NewData[j + 1];
          // eslint-disable-next-line no-param-reassign
          NewData[j + 1] = temp;
        }
        if (NewData[j][key[h]] === NewData[j + 1][key[h]]
        && NewData[j][key[h + 1] as keyof IDataType]
          > NewData[j + 1][key[h + 1] as keyof IDataType]) {
          const temp = NewData[j];
          // eslint-disable-next-line no-param-reassign
          NewData[j] = NewData[j + 1];
          // eslint-disable-next-line no-param-reassign
          NewData[j + 1] = temp;
        }
      }
    }
  }
  return console.log(NewData);
};
export default SortingFunction;
