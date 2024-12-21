import notionConn from "./notionConnection";

export const getActivities = async (token: string, db: string) => {
  const { results } = await notionConn(token).databases.query({
    database_id: db || "",
  });
  const data = [];
  for (let i = 0; i < results.length; i++) {
    let element = {
      id: results[i]?.["id"],
      emoji: results[i]?.["icon"]?.["emoji"],
      title:
        results[i]?.["properties"]?.["Name"]?.["title"]?.[0]?.text?.content,
    };
    data.push(element);
  }
   return data;
};
