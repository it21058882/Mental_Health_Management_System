const QuizTitle = require("../model/quizTitleModel");
const Question = require("../model/questionsModel");
const { findOneAndDelete } = require("../model/quizTitleModel");



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
                    res.send(status._id);
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
                    res.send("Successfully Added..")
          }).catch((err)=>{
                    res.send(err);
          })


}

const titleViewAdmin = async (req, res, next) => {

                  try {
                    const titles = await QuizTitle.find({ });
                    res.send(titles);
                  } catch (err) {
                    console.log(err);
                  }
}

const ViewQuestionsAdmin = async (req, res, next) => {
          
          const titleID = req.params.titleID;
          console.log(titleID);

          try{
                    const questions = await Question.find({"quizTitleId" : titleID});
                    res.send(questions);
          } catch(err){
                    console.log(err);
          }
}

 const deleteQuestionAdmin = async (req, res, next) => {
          const titleID = req.params.titleID;
          const questionID = req.params.questionID;

          console.log(titleID);
          console.log(questionID);

          try{
                    const data = await Question.findOneAndDelete({"_id" :questionID, "quizTitleId" :  titleID})
                    //res.send(data + " Deleted");
                    res.send("Deleted");
          }catch(err){
                    res.send(err);
          }

 }

 const questionUpdateView = async (req, res, next) => {
          const titleID = req.params.titleID;
          const questionID = req.params.questionID;

          console.log(titleID);
          console.log(questionID);
          console.log(req.body);

          const updateDate = {
                    question : req.body.question,
                    answer1 : req.body.answer1,
                    answer1Mark :req.body.answer1Mark,
                    answer2 :req.body.answer2,
                    answer2Mark : req.body.answer2Mark,
                    answer3 : req.body.answer3,
                    answer3Mark : req.body.answer3Mark,
                    answer4 : req.body.answer4,
                    answer4Mark : req.body.answer4Mark,
                    
          }

          try{
                    const result = await Question.updateOne({_id:questionID,"quizTitleId" :titleID },{$set : updateDate})
                    res.send(result +   "   ----------    Updated")
                    console.log(result)
          }catch(err){
                    res.send(err)
          }


}

 const deleteQuize = async (req, res, next) => {
     const titleID = req.params.titleID;
     console.log(titleID);

    

     try{
      const data = await QuizTitle.deleteOne({"_id":titleID})

      const questionData = await Question.deleteMany({"quizTitleId" :titleID })
          console.log(questionData);
          res.send("Quiz Deleted");
        
       
     }catch(err){
      res.send(err)
}
 }



const storeResults = async (req, res, next) => {
        res.send(req);
        console.log("Hiii");
        
}



  
 exports.addQuizTitle = addQuizTitle;
 exports.addQuestions = addQuestions;
 exports.titleViewAdmin = titleViewAdmin;
 exports.ViewQuestionsAdmin = ViewQuestionsAdmin;
 exports.deleteQuestionAdmin = deleteQuestionAdmin;
 exports.questionUpdateView = questionUpdateView;
 exports.deleteQuize = deleteQuize;

 exports.storeResults = storeResults;