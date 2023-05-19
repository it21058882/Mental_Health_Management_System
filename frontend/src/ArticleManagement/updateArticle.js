<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddArticleGIF_2 from '../Assets/Images/addArticleback5.jpg';
import AddArticleGIF from '../Assets/Images/addArticleback2.jpg';
=======
/*// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { useParams } from "react-router-dom";

>>>>>>> 82d0f9799f42de1196e41ed22e00b7be74d847d4
function ArticleUpdate() {
    const { id } = useParams();
    console.log(id);

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [postDate, setPostDate] = useState('');
    const [article, setArticle] = useState(null);

    const onChangeFile = e => {
        setArticle(e.target.files[0]);
    }

    useEffect(() => {
        axios
            .get("http://localhost:8050/article/view/" + id)
            .then((res) => {
                setTitle(res.data.title);
                console.log(res.data);
                setType(res.data.type);
                setCategory(res.data.category);
                setDescription(res.data.description);
                setAuthorName(res.data.authorName);
                setPostDate(res.data.postDate);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

    console.log(authorName);

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("type", type);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("article", article);
        formData.append("authorName", authorName);
        formData.append("postDate", postDate);

        axios.put(`http://localhost:8050/article/updateArticle/${id}`, formData)
            .then(() => {
                alert("Product updated");
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div>
            <br></br>

            <h1 className='article_topic'><b>Update Articles & Books</b></h1>
            <center>  <hr className='article_hr'></hr></center>


            <div className="addArticle_div" style={{ backgroundImage: `url(${AddArticleGIF_2})` }}>
                <form onSubmit={handleSubmit}>

                    <div class="form-group" >
                        <label for="exampleInputEmail1" className='article_title'><b>Title : *</b></label><br></br>
                        <input type="text" class="form-control article_EnterTitle" value={title} onChange={(e) => {
                            setTitle(e.target.value);
                        }} required />
                    </div>
                    <br></br>


                    <div class="form-group" >
                        <label for="exampleInputEmail1" className='article_title'><b>Type : *</b></label><br></br>
                        <div className='radiobtn'>
                            <RadioGroup className='radiobtn'
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group "
                                value={type}
                                onChange={(e) => {
                                    setType(e.target.value);
                                }}
                            >
                                <FormControlLabel value="Book" control={<Radio />} label="Book" />
                                <FormControlLabel value="Article" control={<Radio />} label="Article" />
                            </RadioGroup>
                        </div>
                    </div>
                    <br></br><br></br>

                    <div class="form-group" >
                        <label for="exampleInputEmail1" className='article_title'><b>Category : *</b></label>
                        <select class="form-control article_EnterTitle" value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }} required>
                            <option value="Depression">Depression</option>
                            <option value="Self-Care and Well-being">Self-Care and Well-being</option>
                            <option value="Relationship and Communication">Relationship and Communication</option>
                            <option value="Stress Management">Stress Management</option>
                            <option value="Mindfulness and Meditation">Mindfulness and Meditation</option>
                            <option value="Anxiety">Anxiety</option>

                        </select>
                    </div>
                    <br></br>

                    <div class="form-group" >
                        <label for="exampleInputEmail1" className='article_title'><b>Description : *</b></label>
                        <textarea class="form-control article_EnterTitle" placeholder="Enter article :-" value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }} required></textarea>
                    </div>
                    <br></br>





                    <div class="form-group" >
                        <label for="exampleInputEmail1" className='article_title'><b>Author : *</b></label>
                        <input type="text" class="form-control article_EnterTitle" value={authorName}
                            onChange={(e) => {
                                setAuthorName(e.target.value);
                            }} required />
                    </div>
                    <br></br>



                    <div className='form-group' >
                        <label for="exampleInputEmail1" className='article_title'><b>Post Date : *</b></label>
                        <input
                            type="date"
                            className="form-control article_EnterTitle"
                            name='amount'
                            placeholder='Enter Cost Price'
                            value={postDate}
                            onChange={(e) => {
                                setPostDate(e.target.value);
                            }}
                        />
                    </div>


                    <img src={AddArticleGIF} class="addArticleGIF" alt="Income image" />
                    <div className='DIVADDIMGFIELD'>
                        <div class="form-group" >
                            <label for="exampleInputEmail1" className='ADDarticleDOC_title '><b>Article : *</b></label>
                            <input type="file" class="form-control articleADD_image_field" onChange={onChangeFile} required />
                        </div>
                    </div>


                    <br></br>
                    <button type="submit" class="btn btn-success confimBtnAddArticle"  >Update</button>
                    <a className='btn btn-danger' href="/viewarticle" class="mx-4 my-4 btn btn-danger confimBtnAddArticle">
                        Back
                    </a>
                </form >
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default ArticleUpdate;
=======
//                                         }} />
//                                 </div>

//                                 <div className='form-group' style={{ marginBottom: '15px' }}>
//                                     <label style={{ marginBottom: '5px' }} className="lable">Description</label>
//                                     <input type="text" className="form-control" name='amount' placeholder='Enter Quantity' value={description}

//                                         onChange={(e) => {
//                                             setDescription(e.target.value);

//                                         }} />
//                                 </div>

//                                 <div className='form-group' style={{ marginBottom: '15px' }}>
//                                     <label style={{ marginBottom: '5px' }} className="lable">Author Name</label>
//                                     <input type="number" className="form-control" name='amount' placeholder='Enter Cost Price' value={authorName}

//                                         onChange={(e) => {
//                                             setAuthorName(e.target.value);

//                                         }} />
//                                 </div>

//                                 <div className='form-group' style={{ marginBottom: '15px' }}>
//                                     <label style={{ marginBottom: '5px' }} className="lable">Post Date</label>
//                                     <input type="number" className="form-control" name='amount' placeholder='Enter Cost Price' value={postDate}

//                                         onChange={(e) => {
//                                             setPostDate(e.target.value);

//                                         }} />
//                                 </div>



//                                 <button className='btn btn-success' type='submit' href="/inventory" style={{ marginTop: '15px' }}>Confirm</button>

//                                 <a className='btn btn-danger' href="/inventory" style={{ marginTop: '15px', marginLeft: "9px" }} > Back</a>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ArticleUpdate;*/
>>>>>>> 82d0f9799f42de1196e41ed22e00b7be74d847d4
