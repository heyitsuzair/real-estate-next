import React from "react";

const CommentsCount = ({
  totalComments,
  link,
}: {
  totalComments: number;
  link: string;
}) => {
  return (
    <a
      className="comments-count text-sm text-gray-600 hover:text-red-500"
      href={"#" + link}
    >
      <i className="fa-regular fa-comments text-red-500" aria-hidden="true"></i>
      &nbsp; <span>{totalComments} Comments</span>
    </a>
  );
};

export default CommentsCount;
