const {
  selectrollno,
  selecttotalhit,
  mainpage,
  checkanswer,
  correctanswer,
  updatewronghit,
  updatecurhint,
  selecthint,
  deducthint1,
  deducthint2,
  deducthint3,
  leaderboard,
  selectflag,
  updateflag,
  coins,
} = require("../models/login");

exports.login = async (request, response, next) => {
  try {
    var rollno = request.body.rollno;
    var password = request.body.password;
    if (`${rollno}`.length === 9 && rollno >= 100000000 && password) {
      const getrollno = await selectrollno(rollno, password);
      if (getrollno.rowCount > 0) {
        request.session.loggedIn = true;
        request.session.rollno = getrollno.rows[0].rollno;
        response.redirect("/");
      } else {
        response.render("challenges/login", {
          message: "Invalid Credentials!",
        });
      }
    } else {
      response.render("challenges/login", {
        message: "Invalid Credentials!",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getdata = async (request, response, next) => {
  try {
    if (request.session.loggedIn) {
      const selecttotal_hit = await selecttotalhit(request.session.rollno);
      if (selecttotal_hit.rows[0].total_hit >= 10) {
        const score = await coins(request.session.rollno);
        if (score)
          response.render("challenges/thanks", { coins: score.rows[0].score });
      } else {
        const getmain = await mainpage(request.session.rollno);
        response.render("layout/main", {
          score: getmain.rows[0].score,
          question: getmain.rows[0].question,
          id: getmain.rows[0].id,
          rollno: getmain.rows[0].rollno,
        });
      }
    } else {
      response.render("challenges/login", {
        message: "",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.submit = async (request, response, next) => {
  try {
    if (request.session.loggedIn) {
      const check = await checkanswer(request.session.rollno);
      if (request.body.guess === check.rows[0].answer) {
        if (check.rows[0].id < 31) {
          const selectl = await selectflag(request.session.rollno);
          if (selectl.rows[0].flag < 15 && selectl.rows[0].flag >= 1)
            score = 200 - selectl.rows[0].flag * 10;
          else if (selectl.rows[0].flag == 0) score = 200;
          else score = 50;
          const updatel = await updateflag(request.session.rollno);
          const updatescore = await correctanswer(
            score,
            request.session.rollno
          );
          const selecttotal_hit = await selecttotalhit(request.session.rollno);
          if (selecttotal_hit.rows[0].total_hit >= 10) {
            const score = await coins(request.session.rollno);
            if (score)
              response.render("challenges/thanks", {
                coins: score.rows[0].score,
              });
          } else {
            const getmain = await mainpage(request.session.rollno);
            response.render("layout/main", {
              score: getmain.rows[0].score,
              question: getmain.rows[0].question,
              id: getmain.rows[0].id,
              rollno: getmain.rows[0].rollno,
            });
          }
        }
      } else {
        const wronganswer = await updatewronghit(request.session.rollno);
        const getmain = await mainpage(request.session.rollno);
        response.render("layout/main", {
          score: getmain.rows[0].score,
          question: getmain.rows[0].question,
          id: getmain.rows[0].id,
          rollno: getmain.rows[0].rollno,
        });
      }
    } else {
      response.render("challenges/login", {
        message: "",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.hint = async (request, response, next) => {
  try {
    if (request.session.loggedIn) {
      const u_curhint = await updatecurhint(request.session.rollno);
      const gethint = await selecthint(request.session.rollno);
      if (gethint.rows[0].curhint === 1) {
        const h1 = await deducthint1(request.session.rollno);

        const hint = {
          hint1: gethint.rows[0].hint1,
          hint2: " ",
          hint3: " ",
          message: "you have used your 10 Coins! ",
        };
        response.send(hint);
      } else if (gethint.rows[0].curhint === 2) {
        const h2 = await deducthint2(request.session.rollno);
        const hint = {
          hint1: gethint.rows[0].hint1,
          hint2: gethint.rows[0].hint2,
          hint3: " ",
          message: "you have used your 15 Coins! ",
        };
        response.send(hint);
      } else if (gethint.rows[0].curhint === 3) {
        const h3 = await deducthint3(request.session.rollno);

        const hint = {
          hint1: gethint.rows[0].hint1,
          hint2: gethint.rows[0].hint2,
          hint3: gethint.rows[0].hint3,
          message: "you have used your 20 Coins! ",
        };
        response.send(hint);
      } else if (gethint.rows[0].curhint > 3) {
        const hint = {
          hint1: gethint.rows[0].hint1,
          hint2: gethint.rows[0].hint2,
          hint3: gethint.rows[0].hint3,
          message: " ",
        };
        response.send(hint);
      }
    } else {
      response.render("challenges/login", {
        message: "Login First!",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.coins = async (request, response, next) => {
  try {
    if (request.session.loggedIn) {
      const score = await coins(request.session.rollno);
      if (score) {
        const coins = {
          coins: score.rows[0].score,
        };
        response.send(coins);
      }
    } else {
      response.render("challenges/login", {
        message: "Login First!",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.scoreboard = async (request, response, next) => {
  try {
    const ld = await leaderboard();
    response.render("challenges/leaderboard", { data: ld.rows });
  } catch (err) {
    console.log(err);
  }
};


exports.logout = async (request, response, next) => {
  try {
    request.session.loggedIn = false;
    response.render("challenges/login", {
      message: "Logout Successful!",
    });
  } catch (err) {
    console.log(err);
  }
};
