var pool = require("../controllers/db");

// pool.query("DROP TABLE question_clueminati");

// pool.query(
//   "CREATE TABLE IF NOT EXISTS question_clueminati (question varchar (150),id int PRIMARY KEY,answer varchar (150), hint1 varchar (300),hint2 varchar (300),hint3 varchar (300) , flag int default 0)",
//  (err, result) =>{
//    if (err) throw err;
//  }
// );


pool.query(
  "INSERT into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('8b4aa49d8a30656d402a8157df192d64.png','1','honeycomb','Netflix','Candy','Squid Game') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('db877bc863242a3223a8c81108a56c79.png','2','batman','Bat','Vigilante','DC') ON CONFLICT DO NOTHING ",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('2bb1c9f308789cd890d3d175da687a58.png','3','oops','Core Subject','Virtual Function','Class') ON CONFLICT DO NOTHING  ",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('11dad987f8ae6988b2504c192bef0547.png','4','kingscrossstation','Station','London','Harry Potter') ON CONFLICT DO NOTHING ",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('44c676c8166a19a41d43c0fd213fd70d.png','5','deadpool','Man?','Marvel','Spiderman') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('c4893237c6e4a82e8c3b66b01ff53017.png','6','mainrangsharbatonka','Colors','Shahid Kapoor','Song') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('6cdb36d6fc702ca842bf8b6fdd2cdf1a.png','7','kumandra','Sisu','Raya & the last dragon','Kingdom') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('cfc7574829eac4f84bea243f87d19d6a.png','8','panchayat','Village','Series','Jeetu') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('910ef5bc0d489d3aa4b121950b1dbe91.png','9','droctopus','Scientist','Villain','Spider') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('efe1657ec69abb0f2ce2231f2ed5699c.png','10','amazon','Cadabra','Shopping','Video Streaming') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('d52fd9886b08ac91fb8414ccd16023d6.png','11','taylorswift','Blank Space','Love Cats','Songs') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('983527933621e60a53f13bebe6da13a9.png','12','attackontitan','Hammer','Red Scarf','Anime') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);


pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('740c846d37e851fff6e21c2e7b92d6dc.png','13','codingninja','Platform','Code','Codestudio') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('bbc5303967eb70fa12fadba7341d9e6c.png','14','msoffice','Bill Gates','Package','Editing') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('06240a83991838aa7445969b3f885b84.png','15','codeforces','Tourist','Russia','CP') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('42145ce53bf8cf44e48c88338f241289.png','16','dogecoin','SpaceX','Elon Musk','Crypto Currency') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('b56bfc2b5f5f247753aecedfa70ea75d.png','17','fastandfurious','Theft','Police','Movie') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('78beb0f0b07fa7b6f6e9b49e92ea666c.png','18','lovebabbar','Youtube Channel','Resigned Recently','DSA Sheet') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('9428ecc0a9c9dfaa65d50bdd3d93138f.png','19','kabhikhushikabhiegham','Karan Johar','Character','Movie') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('50f6c434c71cd91596669db3d67b6b64.png','20','primevideo','Video','Online','Amazon') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('beb70acf4faa40e3b77db9e50c9c0b55.png','21','justright','Song','KPOP','GOT7') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('967adba6645685493b61b57625a2ab42.png','22','smaug','Dragon','Treasure','Hobbit') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('a0635b149a2316aa164415b5e0b5656e.png','23','rowanatkinson','Green Car','Pogo','Sitcom') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('b34ec514fb8b69cf38d42f258d950587.png','24','mementomori','Reminder','You will die','Latin Phrase') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('cc1bc7afb0ce924cfe417d20cae3566e.png','25','jonsnow','HBO','GOT','King in the North') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);


pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('11c908d2002836591eda44a8aba2adb1.png','26','json','Combination','Park Jae-beom','Web Dev') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('863bcbde0260c846325dcbb134092ef2.png','27','johngreen','Color','Author','The fault in our stars') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('646014f22b79f1e54f2b348111133c42.png','28','gta','Free roam','Thug Life','Game') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('e4b8f2454c6937eed52517c6db840483.png','29','chaisuttabar','Hard work','Study','Tea Stall') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

pool.query(
  "INSERT  into question_clueminati (question , id, answer, hint1 , hint2, hint3 ) values ('3df2e651008e001ed5a62cb0daf42a53.png','30','jopping','Combination','Kpop song','Avengers of Kpop') ON CONFLICT DO NOTHING",
  function (err, result) {
    if (err) console.log(err);
  }
);

exports.selectrollno = (rollno, password, callback) => {
  return pool.query(
    "select rollno from  login_clueminati WHERE rollno = $1 AND password =$2",
    [rollno, password],
    callback
  );
};

exports.selecttotalhit = (rollno, callback) => {
  return pool.query(
    "select total_hit from  login_clueminati WHERE rollno = $1 ",
    [rollno],
    callback
  );
};

exports.mainpage = (rollno, callback) => {
  return pool.query(
    "select question_clueminati.question,question_clueminati.id,login_clueminati.score,rollno FROM question_clueminati INNER JOIN login_clueminati  ON question_clueminati.id=login_clueminati.cur_id where login_clueminati.rollno=$1",
    [rollno],
    callback
  );
};

exports.selectflag = (rollno, callback) => {
  return pool.query(
    "select flag FROM question_clueminati INNER JOIN login_clueminati ON question_clueminati.id=login_clueminati.cur_id where login_clueminati.rollno = $1",
    [rollno],
    callback
  );
};

exports.checkanswer = (rollno, callback) => {
  return pool.query(
    "select question_clueminati.answer,id FROM question_clueminati INNER JOIN login_clueminati ON question_clueminati.id=login_clueminati.cur_id and login_clueminati.rollno=$1",
    [rollno],
    callback
  );
};

exports.correctanswer = (score, rollno, callback) => {
  return pool.query(
    "UPDATE login_clueminati SET cur_id = cur_id+1,score=score+$1,total_hit = total_hit+1,wrong_hit=0,curhint=0 from question_clueminati where rollno =$2 and question_clueminati.id=login_clueminati.cur_id",
    [score, rollno],
    callback
  );
};

exports.updateflag = (rollno, callback) => {
  return pool.query(
    " UPDATE question_clueminati SET flag=1+flag from login_clueminati where question_clueminati.id=login_clueminati.cur_id and login_clueminati.rollno=$1 ",
    [rollno],
    callback
  );
};

exports.updatewronghit = (rollno, callback) => {
  return pool.query(
    "UPDATE login_clueminati SET wrong_hit = wrong_hit+1 from question_clueminati where rollno =$1 and question_clueminati.id=login_clueminati.cur_id",
    [rollno],
    callback
  );
};

exports.updatecurhint = (rollno, callback) => {
  return pool.query(
    "UPDATE login_clueminati SET curhint = curhint+1 from question_clueminati where rollno =$1 and question_clueminati.id=login_clueminati.cur_id",
    [rollno],
    callback
  );
};

exports.selecthint = (rollno, callback) => {
  return pool.query(
    "select login_clueminati.curhint,question_clueminati.hint1,question_clueminati.hint2,question_clueminati.hint3 FROM question_clueminati  INNER JOIN login_clueminati  ON question_clueminati.id=login_clueminati.cur_id where login_clueminati.rollno=$1",
    [rollno],
    callback
  );
};

exports.deducthint1 = (rollno, callback) => {
  return pool.query(
    "UPDATE login_clueminati SET score=score-10 where rollno =$1 ",
    [rollno],
    callback
  );
};

exports.deducthint2 = (rollno, callback) => {
  return pool.query(
    "UPDATE login_clueminati SET score=score-15 where rollno =$1 ",
    [rollno],
    callback
  );
};

exports.deducthint3 = (rollno, callback) => {
  return pool.query(
    "UPDATE login_clueminati SET score=score-20 where rollno =$1 ",
    [rollno],
    callback
  );
};

exports.coins = (rollno, callback) => {
  return pool.query(
    "select score FROM login_clueminati where rollno=$1",
    [rollno],
    callback
  );
};

exports.leaderboard = (callback) => {
  return pool.query(
    "WITH Ranking AS ( SELECT *, ROW_NUMBER() OVER( ORDER BY Score desc) AS Ranks FROM login_clueminati ) SELECT rollno , score ,ranks FROM Ranking WHERE Ranks >= 1 and Ranks <=10  ORDER BY Ranks ",
    callback
  );
};
