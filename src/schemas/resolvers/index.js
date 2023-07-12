import mutation from './mutations';
import query from './queries';

const resolvers = { ...query, ...mutation };

export default resolvers;
