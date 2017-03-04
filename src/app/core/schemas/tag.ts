export const TagSchema = {
  "title": "Tag schema",
  "version": 0,
  "description": "describes a simple Tag",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "primary": true
    },
    "name": {
      "type": "string"
    }
  },
  "required": ["name"]
};