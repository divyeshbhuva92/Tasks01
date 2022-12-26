// Find all the topics and tasks which are thought in the month of October
db.zenclass.find({ month: "October" }, { topics: 1, tasks: 1 });

// Find all the company drives which appeared between 15-oct-20 and 31-oct-20
db.zenclass.find(
  {},
  { $gte: "ISODate(“2020-10-15”)", $lte: "ISODate(“2020-10-31”)" },
  { company_drives: 1 }
);

// Find all the company drives and students who are appeared for the placement.
db.zenclass.find({}, { company_drives: 1, students_appeared: 1 });

// Find the number of problems solved by the user in codekata
db.zenclass.find({}, { codekata_solved: 1 }).count();

// Find all the mentors with who has the mentee's count more than 15
db.zenclass.find(
  { mentee_count: { $gte: 15 } },
  { mentor: 1, mentee_count: 1 }
);

// Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
db.zenclass.find(
  { $gte: "ISODate(“2020-10-15”)", $lte: "ISODate(“2020-10-31”)" },
  { user_present: { $eq: 0 } },
  { tasks_submitted: { $eq: 0 } }
);
