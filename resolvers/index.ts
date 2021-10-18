import Client from '../schema/Client';

const resolvers = {
  Query: {
    hello: () => 'hello',
    Student: async (_parent: any, args: any) => {
      const Student = await Client.find();
      return Student;
    },
  },
  Mutation: {
    CreateStudent: async (_parent: any, args: any) => {
      const student = await Client.create(args);
      return student;
    },
  },
};

export { resolvers };
