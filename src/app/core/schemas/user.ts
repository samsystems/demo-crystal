import {RankSchema} from "./rank";

export const UserSchema = {
  "title": "User schema",
  "version": 1,
  "description": "describes a simple User",
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "avatar": {
      "type": "string"
    },
    "rank": {
      "type": "object",
      "properties": RankSchema.properties
    }
  },
  "required": ["name"]
};
