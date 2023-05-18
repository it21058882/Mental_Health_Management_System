import { useParams } from "react-router-dom";

function ResultsView(){
          const {quizid,quiztitle,results} = useParams();
          console.log(results)
          return(<div>
          {quizid}<br/>
          {quiztitle}<br/>
          {results}
                    <h1>Hi results</h1>
          </div>)
}

export default ResultsView;