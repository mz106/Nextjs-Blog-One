
import { Fragment } from "react";
import classes from './PostTitle.module.css';

const PostTitle = ({ title, description, date }) => {
  return (
    <Fragment>
        <div className={classes.title}>
            <h1>{title}</h1>
            <p>{description}</p>
            <date>{date}</date>
        </div>
    </Fragment>
  )
}

export default PostTitle