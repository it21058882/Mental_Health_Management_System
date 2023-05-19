<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Articles from './viewArtical';
=======
/*// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { useParams } from "react-router-dom";
>>>>>>> 20db66ea44ac105f24c9eac3997121893dacca5c

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
            <div className="order_bground" style={{ zIndex: 98 }} >
                <div className="container">
                    <div className='border' style={{ backgroundColor: "#ffff" }} >
                        <div className='col-md-8 mt-4 mx-auto'>
                            <h2 className='h4 mb-3 font-weight-normal'><center>Update Inventory </center></h2>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} className="lable">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='id'
                                        placeholder='Title'
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={type}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    >
                                        <FormControlLabel value="Book" control={<Radio />} label="Book" />
                                        <FormControlLabel value="Article" control={<Radio />} label="Article" />
                                    </RadioGroup>
                                </div>

                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} className="lable">Category</label>
                                    <select
                                        className="form-control article_EnterTitle"
                                        value={category}
                                        onChange={(e) => {
                                            setCategory(e.target.value);
                                        }}
                                    >
                                        <option value="Depression">Depression</option>
                                        <option value="Self-Care and Well-being">Self-Care and Well-being</option>
                                        <option value="Relationship and Communication">Relationship and Communication</option>
                                        <option value="Stress Management">Stress Management</option>
                                        <option value="Mindfulness and Meditation">Mindfulness and Meditation</option>
                                        <option value="Anxiety">Anxiety</option>
                                    </select>
                                </div>

                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} className="lable">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='amount'
                                        placeholder='Enter Quantity'
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className='ADDarticleDOC_title'><b>Article: *</b></label>
                                    <input
                                        type="file"
                                        className="form-control articleADD_image_field"
                                        onChange={onChangeFile}
                                    />
                                </div>

                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} className="lable">Author Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='amount'
                                        placeholder='Enter Cost Price'
                                        value={authorName}
                                        onChange={(e) => {
                                            setAuthorName(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} className="lable">Post Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name='amount'
                                        placeholder='Enter Cost Price'
                                        value={postDate}
                                        onChange={(e) => {
                                            setPostDate(e.target.value);
                                        }}
                                    />
                                </div>

                                <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }}>
                                    Confirm
                                </button>
                                <a className='btn btn-danger' href="/viewarticle" style={{ marginTop: '15px', marginLeft: "9px" }}>
                                    Back
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
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
>>>>>>> 20db66ea44ac105f24c9eac3997121893dacca5c
