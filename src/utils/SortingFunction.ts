import { IActionType, IDataType } from '@utils/type';

const SortingFunction = (data: IDataType[], action: IActionType): void => {
  switch (action.type) {
    case 'user':
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < data.length - i - 1; j++) {
          if (data[j].user > data[j + 1].user) {
            const temp = data[j];
            // eslint-disable-next-line no-param-reassign
            data[j] = data[j + 1];
            // eslint-disable-next-line no-param-reassign
            data[j + 1] = temp;
          }
        }
      }
      console.log('Sort by User', data);
      break;
    case 'user age':
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < data.length - i - 1; j++) {
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
      console.log('Sort by User & age', data);
      break;
    default:
      console.log(data);
  }
};
export default SortingFunction;
