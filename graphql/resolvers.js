import { getMoives } from "./db";

const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMoives(limit, rating)
    }
};

export default resolvers;