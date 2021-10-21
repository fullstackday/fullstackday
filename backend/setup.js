const conn = new Mongo();
const db = conn.getDB('timetracker');

let error = true;

let res = [
  db.records.drop(),
  db.records.createIndex({ project: 1 }),
  db.records.insert({
    start: 1634837535000,
    end: 1634838535000,
    project: 'Test',
  }),
];

printjson(res);
