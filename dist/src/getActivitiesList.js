"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const notionConnection_1 = require("./notionConnection");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield notionConnection_1.notion.databases.retrieve({
        database_id: process.env.ACTIVITES_DB || "272f5a4ec74e4979982f7b1f49c84712",
    });
});
exports.getUsers = getUsers;
