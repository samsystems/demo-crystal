export const UserSchema = {
  "title": "User schema",
  "version": 0,
  "description": "describes a simple User",
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "primary": true
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
      "properties": {
        "code": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      }
    }
  },
  "required": ["name"]
};
