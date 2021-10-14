import StudentDetail from '../schema/Student';

const resolvers = {
  Query: {
    hello: () => 'hello',
    Student: async (_parent: any, args: any) => {
      const Student = await StudentDetail.find();
      return Student;
    },
  },
  Mutation: {
    CreateStudent: async (_parent: any, args: any) => {
      const student = await StudentDetail.create(args);
      return student;
    },
  },
};

export { resolvers };
