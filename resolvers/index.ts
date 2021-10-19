import Client from '../schema/Client';

const resolvers = {
  Query: {
    hello: () => 'hello',
    Client: async (_parent: any, args: any) => {
      const Student = await Client.find();
      return Student;
    },
  },
  Mutation: {
    CreateClient: async (_parent: any, args: any) => {
      const student = await Client.create(args);
      return student;
    },
  },
};

export { resolvers };
