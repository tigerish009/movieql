import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";


const server = new GraphQLServer({
    // 타입에 대한 정의 설정불러옴 
    typeDefs: "graphql/schema.graphql",
    resolvers

});

server.start(() => console.log("Graphql Server Running"));