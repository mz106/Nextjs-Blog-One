import classes from './PostItem.module.css';
import Button from "../ui/Button";

const PostItem = ({ id, title, description, body, date, image }) => {
  
  const readableDateFormat = new Date(date).toLocaleDateString({
      day: 'numeric',
      month: 'long',
      year: 'numeric'
  });

  const postLink = `/posts/${id}`;

  return (
    <li className={classes.item}>
        <div className={classes.test}>
            <h3 className="center">{title}</h3>
        </div>
        <div className={classes.date}>
            <time>{readableDateFormat}</time>
        </div>
        <div>
            <p className="center">{description}</p>
        </div>
        <div className={classes.img_container}>
            <img src={image} alt={title} className={classes.img}/>
        </div>
        <div className={classes.actions}>
            <Button link={postLink}>Go to Post</Button>
        </div>
    </li>
  )
}

export default PostItem