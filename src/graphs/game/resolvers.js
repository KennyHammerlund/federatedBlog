import { ApolloError } from "apollo-server";
const addDelay = async (ref, callback) => {
  const delayRef = ref.child("delay");
  const delay = await delayRef.once("value").then(snap => snap.val());
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        callback()
          .then(res)
          .catch(rej),
      delay * 1000
    );
  });
};

const refError = new ApolloError("no user/email attached", "EMAIL_ERROR");

export default {
  Query: {
    application: async (obj, { input }, ctx) => {
      return {
        online: true
      };
    },
    game: async (obj, { id }, { asyncRef, email }) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      const snap = await ref.once("value");
      const snapVal = snap.val();
      const keys = Object.keys(snapVal).filter(k => k !== "name");
      return { delay: snapVal.delay, actionIds: keys, gameId: email };
    }
  },
  Game: {
    id: obj => obj.gameId,
    actions: async (obj, arg, { asyncRef }) => {
      const ref = await asyncRef;

      if (!ref) return refError;
      const gameRef = ref.child("actions");
      return gameRef.once("value").then(snap => {
        const snapVal = snap.val();
        return Object.keys(snapVal).map(key => ({
          id: key,
          optimistic: false,
          ...snapVal[key]
        }));
      });
    }
  },
  Mutation: {
    addGameAction: async (obj, { input }, { asyncRef }) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      const { value, type, gameId, timeStamp } = input;
      let docRef = ref.child("actions");
      return addDelay(ref, async () => {
        const newRef = await docRef.push({
          type,
          value,
          timeStamp
        });

        const snap = await docRef.once("value");
        const actions = snap.val();
        return Object.keys(actions).map(k => ({ id: k, ...actions[k] }));
      });
    }
  }
};
