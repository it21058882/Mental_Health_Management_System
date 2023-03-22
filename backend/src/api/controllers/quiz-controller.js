const QuizTitle = require("../model/quizTitleModel");
const Question = require("../model/questionsModel");



// const Register = async (req, res, next) => {

// }

const addQuizTitle = async (req, res, next) => {
          console.log(req.body);

          const quiztitles = req.body.title;

          const newTitle = new QuizTitle({
                    title : quiztitles
          });

          newTitle.save().then((status)=>{
                    console.log(status._id);
                    res.send("record added " + status._id);
          }).catch((err)=>{
                    console.log(err);
          })

 }


 const addQuestions = async (req, res, next) => {
          console.log(req.body);
         

          const question = req.body.question;
          const answer1 = req.body.answer1;
          const answer1Mark =req.body.answer1Mark;
          const answer2 =req.body.answer2;
          const answer2Mark = req.body.answer2Mark;
          const answer3 = req.body.answer3;
          const answer3Mark = req.body.answer3Mark;
          const answer4 = req.body.answer4;
          const answer4Mark = req.body.answer4Mark;
          const quizTitleId = req.body.quizTitleId;

          const newquestion = new Question ({
                    question,
                    answer1,
                    answer1Mark,
                    answer2,
                    answer2Mark ,
                    answer3,
                    answer3Mark,
                    answer4,
                    answer4Mark,
                    quizTitleId 
          });

          newquestion.save().then(()=>{
                    res.send("adding successfully")
          }).catch((err)=>{
                    res.send(err);
          })


}

// exports.Register = Register;
 exports.addQuizTitle = addQuizTitle;
 exports.addQuestions = addQuestions;