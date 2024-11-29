import notionConn from "./notionConnection";

export const createNewLogEntry=async (token: string, db: string)=>
{ 
  return await notionConn(token).pages.create({
    "parent": {
        "type": "database_id",
        "database_id":  process.env.ACTIVITES_DB
   },
    "properties": {
        "Name": { "title": [ {
                    "text": {
                        "content": "Test"
                    }
                }
            ]
        }, 
    } 
});
}
