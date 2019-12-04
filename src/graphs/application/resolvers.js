export default {
  Query: {
    blogApplication: async (obj, { input }, ctx) => {
      return {
        blogOnline: true
      };
    }
  }
};
