export async function findCar(body) {
  console.log('findCar: ', body);
  return body.username;
}

const findCarService = { findCar };

export default findCarService;
