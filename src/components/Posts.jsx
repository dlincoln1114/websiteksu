import React, { useState } from 'react';
import { AiOutlineLike, AiFillLike} from 'react-icons/ai';

function BlogPost({ title, description, image, authorName, authorAvatar, datePosted }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg mb-2 ">
      <div className="w-96 h-72 flex justify-items-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Title, Description, and Meta Information */}
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Author, Date, and Like Section */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          {/* Author and Date */}
          <div className="flex items-center space-x-2">
            <img 
              src={authorAvatar} 
              alt={authorName} 
              className="w-6 h-6 rounded-full object-cover"
            />
            <span>
              <span className="font-medium">{authorName}</span>
              <span className="mx-2">•</span>
              <span>{datePosted}</span>
            </span>
          </div>

          {/* Like Button */}
          <div className="flex items-center space-x-1">
            <button 
              onClick={handleLike}
            >
              {liked ? (
                <AiFillLike className="w-5 h-5 text-[#124AD1] transition-transform transform scale-110" />
              ) : (
                <AiOutlineLike className="w-5 h-5 text-gray-400 transition-transform transform scale-100 hover:scale-110" />
              )}
            </button>
            <span className="text-sm font-medium">{likes} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

