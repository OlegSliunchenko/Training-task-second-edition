import { IObjectType } from '@utils/type';

const CopyFunction = (data: IObjectType): void => {
  const newObj = data; // Shallow copy
  newObj.name = 'Stephan'; // changing name in data too
  const newObjClone = { ...data, name: 'ZULU' }; // changing name only in clone
  const newObjCloneSecondEdition = Object.assign({}, data); // changing name only in clone
  const newObjCloneThirdEdition = JSON.parse(JSON.stringify(data)); // Deep Copy

  return console.log('Reference const', newObj, 'Clone object', newObjClone);
};

export default CopyFunction;
