import { getActivities } from "./getActivitiesList";
import notionConn from "./notionConnection";

export const getLog = async (
  token: string,
  db: string,
  filter: any,
  sort: any
) => {
  const activities = await getActivities(token, process.env.ACTIVITES_DB || "");
  const getActivityName = (arg: string) => {
    return activities?.find((i) => i.id === arg)?.title || '';
  };
  const { results } = await notionConn(token).databases.query({
    database_id: db || "",
    sorts: [
      {
        property: "Start Time",
        direction: "descending",
      },
    ],
    filter: {
      and: [
        {
          property: "Type",
          select: {
            equals: "Log",
          },
        },
        {
          and: [
            {
              property: "Start Time",
              date: {
                is_not_empty: true,
              },
            },
            {
              property: "End Time",
              date: {
                is_empty: true,
              },
            },
          ],
        },
      ],
    },
  });
  const data = [];
  for (let i = 0; i < results.length; i++) {
    let element = {
      emoji: results[i]?.["icon"]?.["emoji"],
      activity:getActivityName( results[i]?.["properties"]?.["Actions"]?.["relation"][0]?.id),
      title:
        results[i]?.["properties"]?.["Title"]?.["title"]?.[0]?.text?.content,
      startTime: results[i]?.["properties"]?.["Start Time"]?.["date"]?.start,
      endTime: results[i]?.["properties"]?.["End Time"]?.["date"]?.start,
      tags: results[i]?.["properties"]?.["Tags"]?.formula?.string,
    };
    data.push(element);
  }
  // return results;
  return data;
};
