import { Person } from "../../../models";

const person = {
    people: async () => {
        return await Person.find();
    },
    person: async (args) => {
        return await Person.findById(args.id);
    },
};

export default person;
