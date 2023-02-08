import { faker } from '@faker-js/faker';

export default [
  {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    invoiceNumber: faker.datatype.uuid(),
    issuedDate: faker.date.recent(),
    dueDate: faker.date.soon(),
    avatar: faker.image.avatar(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      postalCode: faker.address.zipCode(),
      state: faker.address.state(),
      country: faker.address.country(),
    },
  },
];
