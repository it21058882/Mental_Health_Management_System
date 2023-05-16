// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { useParams } from "react-router-dom";


// function ArticleUpdate() {

//     const [title, setTitle] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [authorName, setAuthorName] = useState("");
//     const [postDate, setPostDate] = useState("");
//     //const [article, setArticle] = useState("");

//     const { id } = useParams();
//     console.log(id);

//     const [Article, setArtical] = useState([]);
//     const [pdfUrl, setPdfUrl] = useState('');
//     const [Article1_1, setArtical1_1] = useState([]);
//     useEffect(() => {
//         function getArticles() {
//             axios.get("http://localhost:8050/article/viewArticle").then((res) => {

//                 const articlesWithPdfUrl = res.data.map(article => {
//                     return {
//                         ...article,
//                         pdfUrl: `C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC/${article.article}`
//                     };
//                 });

//                 console.log(res.articlesWithPdfUrl);
//                 setArtical1_1(articlesWithPdfUrl);
//                 setArtical(res.data)
//             }).catch((err) => {
//                 alert(err.message)
//             })
//         }
//         getArticles();

//     }, [Article])





<<<<<<< HEAD
    return (
        <div>

            <div className="order_bground" style={{ zIndex: 98 }} >
                <div className="container">
=======
//     return (
//         <div>
        
//             <div className="order_bground" style={{ zIndex: 98 }} >
//                 <div className="container">
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//                     <div className='border' style={{ backgroundColor: "#ffff" }} >
//                         <div className='col-md-8 mt-4 mx-auto'>
//                             <h2 className='h4 mb-3 font-weight-normal'><center>Update Inventory</center></h2>
//                             <form onSubmit={(e) => {
//                                 e.preventDefault();

//                                 const newProduct = {
//                                     title,
//                                     category,
//                                     description,
//                                     authorName,
//                                     postDate,
//                                     Article
//                                 }

//                                 axios.put("http://localhost:8050/article/updateArticle/" + id, newProduct)
//                                     .then(() => {
//                                         alert("Product updated");
//                                     })
//                                     .catch((err) => {
//                                         alert(err);
//                                     })
//                             }}>
//                                 <div className='form-group' style={{ marginBottom: '15px' }}>
//                                     <label style={{ marginBottom: '5px' }} className="lable">Product ID</label>
//                                     <input type="text" className="form-control" name='id' placeholder='Title'
//                                         value={title}

//                                         onChange={(e) => {
//                                             setTitle(e.target.value);

//                                         }} />
//                                 </div>

//                                 <div className='form-group' style={{ marginBottom: '15px' }}>
//                                     <label style={{ marginBottom: '5px' }} className="lable">Product Name</label>
//                                     <input type="text" className="form-control" name='name' placeholder='Category'
//                                         value={category}

//                                         onChange={(e) => {
//                                             setCategory(e.target.value);

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

// export default ArticleUpdate;