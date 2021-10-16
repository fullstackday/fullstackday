const conn = new Mongo();
const db = conn.getDB('timetracker');

let error = true;

let res = [
  db.records.drop(),
  db.records.createIndex({ project: 1 }),
  db.records.insert({
    start: 1234,
    end: 12345,
    project: 'Test',
  }),
];

printjson(res);
