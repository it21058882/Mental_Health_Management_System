import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ArticleFullView() {
  const { id } = useParams();
  console.log(id);

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [postDate, setPostDate] = useState('');
  const [article, setArticle] = useState(null);



  useEffect(() => {
    axios
      .get("http://localhost:8050/article/view/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setType(res.data.type);
        setArticle(res.data.article);
        setCategory(res.data.category);
        setDescription(res.data.description);
        setAuthorName(res.data.authorName);
        setPostDate(res.data.postDate);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div>
      <form>
        <div style={{  backgroundColor:' #e6ffee' }}>
          <div className="form-group" style={{padding:'30px'}}>
            <label htmlFor="exampleInputEmail1" className="article_title"><b>Title : *</b></label><br></br>
            <input type="text" className="form-control article_EnterTitle" placeholder="Enter title :-" value={title} />
          </div>
          

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="article_title"><b>Type : *</b></label><br></br>
            <input type="text" className="form-control article_EnterTitle" placeholder="Enter Author name :-" value={type} />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="article_title"><b>Category : *</b></label>
            <input type="text" className="form-control article_EnterTitle" placeholder="Enter Author name :-" value={category} />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="article_title"><b>Description : *</b></label>
            <textarea className="form-control article_EnterTitle" placeholder="Enter article :-" value={description}></textarea>
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="article_title"><b>Author : *</b></label>
            <input type="text" className="form-control article_EnterTitle" placeholder="Enter Author name :-" value={authorName} />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="article_title"><b>PostDate : *</b></label>
            <input type="date" className="form-control article_EnterTitle" placeholder="Enter post date :-" value={postDate} required />
          </div>

        
        <div className='DIVADDIMGFIELD' style={{ marginTop: '-510px', marginLeft: '30px' }}>
          {/* {article && (
            <embed src={require(`C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${article}`)} type="application/pdf" width="50%" height="700px" />
          )} */}
        </div>
        <br></br>

        <a className='btn btn-danger' href="/viewarticle" style={{ marginTop: '-9%', marginLeft: "80%", width: '15%' }}>
          Back
        </a>
        </div>
      </form>
    </div>
  );
}

export default ArticleFullView;
