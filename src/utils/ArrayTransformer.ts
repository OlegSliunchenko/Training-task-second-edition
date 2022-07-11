import { ObjectType } from '@utils/type';

const ArrayTransformer = (data: ObjectType[]): void => {
  const rez = data.map((obj) => {
    const {
      city,
      district,
      street,
      house,
      country
    } = obj.address;
    return {
      fullName: `${obj.firstName} ${obj.middleName} ${obj.lastName}`,
      address: `${city} ${district ?? 'NA'} ${street} ${house} ${country}`,
    };
  });
  // eslint-disable-next-line no-console
  return console.log(rez);
};

export default ArrayTransformer;
