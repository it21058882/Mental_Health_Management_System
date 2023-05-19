import { useParams } from "react-router-dom";

function ResultsView(){
          const {username,quiztitle,results} = useParams();
          console.log(results)
          return(<div>
          {username}<br/>
          {quiztitle}<br/>
          {results}
                    <h1>Hi results</h1>
          </div>)
}

export default ResultsView;