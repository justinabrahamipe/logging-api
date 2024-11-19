"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notion = void 0;
const client_1 = require("@notionhq/client");
console.log(process.env.NOTION_TOKEN);
exports.notion = new client_1.Client({
    auth: process.env.NOTION_TOKEN || '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',
});
