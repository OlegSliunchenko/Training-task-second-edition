import { IActionType, IDataType } from '@utils/type';

const SortingFunction = (data: IDataType[], action: IActionType): void => {
  switch (action.type) {
    case 'user':
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data.length - i - 1; j += 1) {
          if (data[j].user > data[j + 1].user) {
            const temp = data[j];
            // eslint-disable-next-line no-param-reassign
            data[j] = data[j + 1];
            // eslint-disable-next-line no-param-reassign
            data[j + 1] = temp;
          }
        }
      }
      break;
    case 'user age':
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data.length - i - 1; j += 1) {
          if (
            data[j].user > data[j + 1].user
            || data[j].age > data[j + 1].age
          ) {
            const temp = data[j];
            // eslint-disable-next-line no-param-reassign
            data[j] = data[j + 1];
            // eslint-disable-next-line no-param-reassign
            data[j + 1] = temp;
          }
        }
      }
      break;
    default:
      console.log(data);
  }
  const list = [];
  for (let i = 0; i < data.length; i += 1) {
    const NewData = Object.values(data[i]);
    list.push(NewData);
  }
  console.log(list);
};
export default SortingFunction;
