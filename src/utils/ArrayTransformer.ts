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
    return (
      district.length ? {
        fullName: `${obj.firstName} ${obj.middleName} ${obj.lastName}`,
        address: `${city} ${district} ${street} ${house} ${country}`,
      } : {
        fullName: `${obj.firstName} ${obj.middleName} ${obj.lastName}`,
        address: `${city} NA ${street} ${house} ${country}`,
      }
    );
  });
  // eslint-disable-next-line no-console
  return console.log(rez);
};

export default ArrayTransformer;
