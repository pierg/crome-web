import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Button from "../../components/Elements/Button.js";
import ImagesOverlap from "../../components/Images/ImagesOverlap.js";
import WriteComment from "../../components/Content/WriteComment.js";
import Comment from "../../components/Content/Comment.js";

export default function ActivityFeed({
  title,
  user,
  username,
  date,
  button,
  description,
  image,
  likes,
  comments,
  shares,
  imagesoverlap,
  loadPrevious,
  loadNext,
  writeComment,
  commentPosts,
}) {
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  let likesComponent = (
    <>
      <i className="fas fa-thumbs-up mr-1"></i>
      <span className="text-blueGray-500">{likes.children}</span>
    </>
  );
  let commentsComponent = (
    <>
      <i className="fas fa-comment mr-1"></i>
      <span className="text-blueGray-500">{comments.children}</span>
    </>
  );
  let sharesComponent = (
    <>
      <i className="fas fa-share mr-1"></i>
      <span className="text-blueGray-500">{shares.children}</span>
    </>
  );
  return (
    <>
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full md:w-6/12">
              <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full p-5 shadow-lg">
                <div className="bg-transparent first:rounded-t pb-4">
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>

                <div className="flex items-center bg-transparent py-3 border-t border-blueGray-200">
                  <div className="flex items-center my-2">
                    <div className="flex items-start">
                      <img
                        src={user}
                        className="rounded-full mr-3 w-10 h-10 shadow"
                        alt="..."
                      />
                      <div className="flex-1">
                        <div className="justify-between items-center">
                          <h5 className="mb-0 text-sm font-bold uppercase">
                            {username}
                          </h5>
                          <small className="text-sm text-blueGray-400 mt-0">
                            {date}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <Button {...button} />
                  </div>
                </div>

                <div className="flex-auto">
                  {newDescription.map((prop, key) => (
                    <p
                      className="mb-6 text-blueGray-500 leading-relaxed"
                      key={key}
                    >
                      {prop}
                    </p>
                  ))}
                  {image && (
                    <img
                      alt="..."
                      src={image}
                      className="max-w-full h-auto rounded-lg"
                    />
                  )}

                  <div className="items-center my-6 pb-6 border-b flex flex-wrap">
                    <div className="px-4 relative w-full sm:w-6/12">
                      <div>
                        {likes.to ? (
                          <Link
                            {...likes}
                            className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                          >
                            {likesComponent}
                          </Link>
                        ) : (
                          <a
                            {...likes}
                            className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                          >
                            {likesComponent}
                          </a>
                        )}
                        {comments.to ? (
                          <Link
                            {...comments}
                            className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                          >
                            {commentsComponent}
                          </Link>
                        ) : (
                          <a
                            {...comments}
                            className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                          >
                            {commentsComponent}
                          </a>
                        )}
                        {shares.to ? (
                          <Link
                            {...shares}
                            className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                          >
                            {sharesComponent}
                          </Link>
                        ) : (
                          <a
                            {...shares}
                            className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                          >
                            {sharesComponent}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="sm:flex hidden px-4 relative w-full sm:w-6/12 sm:justify-end">
                      <ImagesOverlap {...imagesoverlap} />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    {loadPrevious && loadPrevious.to ? (
                      <Link
                        {...loadPrevious}
                        className="text-blueGray-500 text-sm hover:text-blueGray-700"
                      >
                        Load previous
                      </Link>
                    ) : loadPrevious ? (
                      <a
                        {...loadPrevious}
                        className="text-blueGray-500 text-sm hover:text-blueGray-700"
                      >
                        Load previous
                      </a>
                    ) : null}
                  </div>
                  {commentPosts.map((prop, key) => (
                    <Comment {...prop} key={key} />
                  ))}
                  <div className="flex justify-center mt-4">
                    {loadNext && loadNext.to ? (
                      <Link
                        {...loadNext}
                        className="text-blueGray-500 text-sm hover:text-blueGray-700"
                      >
                        Load next
                      </Link>
                    ) : loadNext ? (
                      <a
                        {...loadNext}
                        className="text-blueGray-500 text-sm hover:text-blueGray-700"
                      >
                        Load next
                      </a>
                    ) : null}
                  </div>
                  <WriteComment {...writeComment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
ActivityFeed.defaultProps = {
  button: {},
  likes: { children: "0" },
  comments: { children: "0" },
  shares: { children: "0" },
  writeComment: {},
  commentPosts: [],
};
ActivityFeed.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
  // You send a simple string for a one paragraph description
  // or you can send an array of strings, that will generate
  // each string into a new paragraph
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // The image of the post, if not set the img tag will not be rendered
  image: PropTypes.string,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the like icon is set by default,
  // // // you only need to set the number of like
  likes: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the comment icon is set by default,
  // // // you only need to set the number of comments
  comments: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the share icon is set by default,
  // // // you only need to set the number of comments
  shares: PropTypes.object,
  // it is represented by the props
  // that can be passed to the ImagesOverlap,
  // so please check that one out
  imagesoverlap: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the "load previous" text is set by default,
  // // // you only need to set the href etc.
  // NOTE: If you do not pass this prop, it will not be generated
  loadPrevious: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the "load next" text is set by default,
  // // // you only need to set the href etc.
  // NOTE: If you do not pass this prop, it will not be generated
  loadNext: PropTypes.object,
  // it is represented by the props
  // that can be passed to the WriteComment,
  // so please check that one out
  writeComment: PropTypes.object,
  // it is an array of objects, which
  // are represented by the props
  // that can be passed to the Comment,
  // so please check that one out
  commentPosts: PropTypes.arrayOf(PropTypes.object),
};
