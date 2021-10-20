import Client from '../schema/Client';
import Project from '../schema/Project';

const resolvers = {
  Query: {
    hello: () => 'hello',
    Client: async (_parent: any, args: any) => {
      const Student = await Client.find();
      return Student;
    },
    Projects: async (_parent: any, args: any) => {
      const project = await Project.find();
      return project;
    },
  },

  Mutation: {
    
    createClient: async (_parent: any, args: any) => {
      const client = await Client.create(args);
      return client;
    },

    createProject: async (_parent: any, args: any) => {
      const project = await Project.create(args);

      await Client.findByIdAndUpdate(
        args.ProjectOwner,
        { $push: { Projects: args.ProjectOwner } },
        { new: true, upsert: true },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log('Updated User : ', docs);
          }
        },
      );

      return project;
    },
  },
};

export { resolvers };
