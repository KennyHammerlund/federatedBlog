export default {
  Query: {
    posts: async (obj, { input }, ctx) => {
      return [
        {
          id: "1",
          title: "My First Post"
        },
        {
          id: "2",
          title: "My Second Post"
        }
      ];
    }
  }
};
