const StudentDetail = require('../schema/Student')

const resolvers={
  Query:{
    Students:()=>{
      return StudentDetail
    },
    Student:(parent: any,args: { id: any })=>{
      const id = args.id
const Student = StudentDetail.find(StudentDetail,{id:args.id})
return Student
    }
  }
}
module.exports={resolvers}