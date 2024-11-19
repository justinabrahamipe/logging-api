import { Client } from "@notionhq/client";

export default function notionConn(token: string) {
  return new Client({
    auth: token || "",
  });
}
