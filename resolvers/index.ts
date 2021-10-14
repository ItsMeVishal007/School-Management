import StudentDetail from '../schema/Student';

const resolvers = {
  Query: {
    hello : () => "hello",
    Student: async (parent: any, args: any) => {
      const Student = await StudentDetail.find();
      return Student;
    },
  },
};

export { resolvers };
