import notionConn from "./notionConnection";

export const getUsers = async (token: string, db: string) => {
  return await notionConn(token).databases.query({
    database_id: db || "",
  });
};
