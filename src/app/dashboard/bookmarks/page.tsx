import BookmarkList from '@/components/bookmarks/BookmarkList';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';

const BookmarksPage = () => {
  return (
    <DashboardLayout pageTitle='Bookmarks'>
      <BookmarkList />
    </DashboardLayout>
  );
};

export default BookmarksPage;
