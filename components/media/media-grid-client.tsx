"use client";

import { useState, useMemo } from 'react';
import { BlogPost } from '@/data/media-posts-data';
import { MediaPostCard } from './media-post-card';
import { MediaSidebar } from './media-sidebar';

export function MediaGridClient({ initialPosts, recentPosts }: { initialPosts: BlogPost[], recentPosts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All'); // 'All' can be a slug for showing all
  const [activeTag, setActiveTag] = useState('');

  const filteredPosts = useMemo(() => {
    return initialPosts // Start with the server-filtered posts
      .filter(post => activeCategory === 'All' || post.category === activeCategory)
      .filter(post => !activeTag || post.tags.includes(activeTag))
      .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [initialPosts, searchTerm, activeCategory, activeTag]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main Content (Post List) */}
      <div className="lg:col-span-2 space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => <MediaPostCard key={post.id} post={post} />)
        ) : (
          <div className="text-center py-20 bg-[#f5f5f5] rounded-lg">
            <h3 className="text-2xl font-semibold text-brand-dark">No Posts Found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your filters.</p>
          </div>
        )}
        {/* Pagination could be added here */}
      </div>
      
      {/* Sidebar */}
      <MediaSidebar
        recentPosts={recentPosts}
        // activeCategory={activeCategory}
        onSearch={setSearchTerm}
        onCategorySelect={setActiveCategory}
        onTagSelect={setActiveTag}
      />
    </div>
  );
}