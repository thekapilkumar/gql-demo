import { Person } from "../../../models";

const person = {
    createPerson: async (args) => {
        let newPerson = new Person(args);
        return await newPerson.save();
    },
    updatePerson: async (args) => {
        return await Person.findByIdAndUpdate(args.id, args);
    },
    destrotyPerson: async (args) => {
        return await Person.findByIdAndRemove(args.id);
    },
};

export default person;
