import PageTitle from '@/common/PageTitle';
import BookmarkList from '@/components/bookmarks/BookmarkList';
import React from 'react';

const BookmarksPage = () => {
  return (
    <>
      <PageTitle title='Bookmarks' />
      <BookmarkList />
    </>
  );
};

export default BookmarksPage;
