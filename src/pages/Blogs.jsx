import { Link } from 'react-router-dom'
import b1 from '../images/blog-1.jpg'
import b2 from '../images/blog-2.jpg'
import b3 from '../images/blog-3.jpg'

const BlogsData = [
    { id: 1, image: b1, title: 'blog 1', content: 'lorem ipsum dolor sit amet', author: 'john deo', date: '1st may, 2022' },
    { id: 2, image: b2, title: 'blog 1', content: 'lorem ipsum dolor sit amet', author: 'john deo', date: '1st may, 2022' },
    { id: 3, image: b3, title: 'blog 1', content: 'lorem ipsum dolor sit amet', author: 'john deo', date: '1st may, 2022' },
]

const BlogsContent = ({ blog }) => {
    return (
        <div className="box">
                        <div className="image">
                                <img src={blog.image} alt=""/>
                        </div>
                        <div className="content">
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                                <Link to="#" className="btn">read more</Link>
                                <div className="icons">
                                        <Link to="#"> <i className="fas fa-clock"></i> {blog.date} </Link>
                                        <Link to="#"> <i className="fas fa-user"></i> by {blog.author} </Link>
                                </div>
                        </div>
                </div>
    )
}

const Blogs = () => {
  return (
    <>
     <section className="heading">
    <h1>our blogs</h1>
    <p> <Link to="home.html">home</Link> {'>>'} blogs </p>
</section>


<section className="blogs">

    <h1 className="title">our daily posts</h1>

    <div className="box-container">    
           {
             BlogsData.map(blog => (
                 <BlogsContent key={blog.id} blog={blog} />
             ))
           } 
    </div>

</section>

    </>
  )
}

export default Blogs