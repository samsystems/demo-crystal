import {UserSchema} from "./user";
import {RankSchema} from "./rank";
import {TagSchema} from "./tag";

export const RegulationSchema = {
  "title": "Regulation schema",
  "version": 1,
  "description": "describes a simple hero",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "primary": true
    },
    "version": {
      "type": "string"
    },
    "isFile": {
      "type": "boolean"
    },
    "content": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "properties": TagSchema.properties
      }
    },
    "owner": {
      "type": "object",
      "properties": UserSchema.properties
    },
    "users": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "properties": UserSchema.properties
      }
    },
    "ranks": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "properties": RankSchema.properties
      }
    }
  },
  "required": ["status"]
};
