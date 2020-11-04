const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Dummy for now
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
