import React, { useState } from 'react';
import BlogPost from '../components/Posts'; // Assuming BlogPost is updated accordingly
import sampleImage from '../assets/Image01.jpg'; // Replace with actual image paths

function Home() {
  const samplePosts = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Post Title ${index + 1}`,
    description: `A brief description of the topic covered in post ${index + 1}.`,
    image: sampleImage, // Replace with dynamic image URLs from your backend
    authorName: `Author ${index + 1}`,
    authorAvatar: {/* avatar urls */},
    datePosted: `Dec ${index + 1 }, 2024`,
  }));

  const [postShown, setPostShown] = useState(6);
  const loadmore = () => {
    setPostShown((prev) => prev + 6);
  }
  return (
    <main className="bg-white min-h-screen">
      <div className="px-4 space-y-8">

        {/* Featured post section */}
        <section className=" h-[50%] pt-4">
          <div className="relative bg-gray-200 w-full lg:h-[550px] h-96 rounded-3xl flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-700">Featured Post Placeholder</h2>
          </div>
        </section>

        {/* Recent blog posts */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Blog Posts</h3>
            <button className="bg-[#E9ECFD] text-[#124AD1] font-medium px-4 py-2 rounded-lg hover:bg-[#d3daff]">
              View All Posts
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-1 justify-items-center">
            {samplePosts.map((post) => (
              <BlogPost
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                AuthorAvatar={post.authorAvatar}
                authorName={post.authorName}
                datePosted={post.datePosted}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button onClick={loadmore} className='bg-[#E9ECFD] hover:bg-[#d3daff] text-[#124AD1] font-medium w-28 h-7 rounded-lg'>Load more...</button>
          </div>
        </section>

        {/* Recipes / Advertisement Section */}
        <section>
          <div className="bg-gray-100 w-full p-6 text-center">
            <h3 className="text-lg font-semibold">Explore Our Recipe Cook Book!</h3>
            <p className="text-sm text-gray-600">Delicious recipes and tips for every occasion.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;


