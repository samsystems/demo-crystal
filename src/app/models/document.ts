import {User} from './user';
import {Rank} from './rank';

export enum Status{
  "Draft",
  "Pending_Approval",
  "Pending",
  "Approved",
  "Published",
  "Permanent"
}

export interface Document {
  id: string;
  name: string;
  status: string;
  version: string;
  isFile: boolean;
  content?: string;
  date: string;
  updated: string;
  comments: string;
  primary: Rank[];
  secondary: Rank[];
  tags?: string[];
  owner: User;
  users?: User[];
}
var a = [{
  "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
  "name": "Reg",
  "status": "Permanent",
  "version": "2.0",
  "isFile": false,
  "content": "<span>My Document's Title</span>",
  "date": "2017-03-06T14:34:58-05:00",
  "updated": "2017-03-06T14:37:35-05:00",
  "comments": "asd",
  "primary": [{"id": "CAP", "text": "Captain"}],
  "secondary": [{"id": "CAP", "text": "Captain"}],
  "tags": ["asd"],
  "owner": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  }
}];
var b = [{
  "id": "477948f9-cb12-42b1-b860-b6e0c4ed392a",
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Published",
    "version": "1.0.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:36:08-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "version": "1.0.0",
  "date": 1488828981552
}, {
  "id": "a9eb821a-aa65-4f34-b238-534827e8c2a0",
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Published",
    "version": "2.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:37:30-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "version": "2.0",
  "date": 1488829053127
}];
var c = [{
  "id": "f57b5de4-31a5-4da6-afb4-b599ddb7780b",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Draft",
    "version": "1.0.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:34:58-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document Created",
  "date": 1488828898016
}, {
  "id": "199ff05a-1a81-4dac-804a-2a4f2d68e64c",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Pending",
    "version": "1.0.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:35:52-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document change to Pending",
  "date": 1488828952003
}, {
  "id": "3c8a33e3-c597-4f55-ab09-f1a1061ef234",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Approved",
    "version": "1.0.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:36:01-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document change to Approved",
  "date": 1488828961362
}, {
  "id": "004a40fd-421b-4471-b768-c44aa86d5224",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Published",
    "version": "1.0.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:36:08-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    },
    "logRef": "004a40fd-421b-4471-b768-c44aa86d5224"
  },
  "changes": "Document change to Published",
  "date": 1488828968095
}, {
  "id": "1a44c862-f0ac-4eaa-8d02-1f7c794ccce8",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "1a44c862-f0ac-4eaa-8d02-1f7c794ccce8",
    "name": "Reg",
    "status": "Permanent",
    "version": "1.0.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:36:31-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    },
    "logRef": "1a44c862-f0ac-4eaa-8d02-1f7c794ccce8"
  },
  "changes": "Document change to Permanent",
  "date": 1488828991929
}, {
  "id": "12ccac29-e8eb-4f28-b147-eb992732033f",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Draft",
    "version": "2.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:36:31-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "New Version of the document",
  "date": 1488828998033
}, {
  "id": "0b9b80a8-bbab-475e-8a0e-9ab02db4e9d1",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Pending",
    "version": "2.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:37:25-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document change to Pending",
  "date": 1488829045046
}, {
  "id": "33e2b926-5e0a-4222-bdf7-bbab91d57923",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Approved",
    "version": "2.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:37:28-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document change to Approved",
  "date": 1488829048280
}, {
  "id": "038c8a97-9908-489f-94f1-f3b456387aac",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Published",
    "version": "2.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:37:30-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document change to Published",
  "date": 1488829050199
}, {
  "id": "9d4e02da-5dd9-49e7-970d-191a30a746e7",
  "user": {
    "username": "captain",
    "firstName": "Jhon",
    "lastName": "Doe",
    "avatar": "/assets/img/a1.jpg",
    "login": true,
    "isAuditor": true,
    "rank": {"id": "CAP", "text": "Captain"}
  },
  "document": {
    "id": "d4da9ebb-2cb6-4990-9281-4dce8f5019cb",
    "name": "Reg",
    "status": "Permanent",
    "version": "2.0",
    "isFile": false,
    "content": "<span>My Document's Title</span>",
    "date": "2017-03-06T14:34:58-05:00",
    "updated": "2017-03-06T14:37:35-05:00",
    "comments": "asd",
    "primary": [{"id": "CAP", "text": "Captain"}],
    "secondary": [{"id": "CAP", "text": "Captain"}],
    "tags": ["asd"],
    "owner": {
      "username": "captain",
      "firstName": "Jhon",
      "lastName": "Doe",
      "avatar": "/assets/img/a1.jpg",
      "login": true,
      "isAuditor": true,
      "rank": {"id": "CAP", "text": "Captain"}
    }
  },
  "changes": "Document change to Permanent",
  "date": 1488829055135
}];
