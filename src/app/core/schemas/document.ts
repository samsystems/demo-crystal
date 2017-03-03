export const DocumentSchema = {
  "title": "Document schema",
  "version": 0,
  "description": "describes a simple hero",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "primary": true
    },
    "status": {
      "type": "string"
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
    "comments": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        }
      }
    },
    "owner": {
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
          "properties": {
            "code": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    },
    "users": {
      "type": "array",
      "uniqueItems": true,
      "items": {
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
            "properties": {
              "code": {
                "type": "string"
              },
              "name": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "ranks": {
      "type": "array",
      "uniqueItems": true,
      "items": {
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
    }
  },
  "required": ["status"]
};
