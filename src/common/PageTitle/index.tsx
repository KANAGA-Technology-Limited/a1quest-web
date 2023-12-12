'use client';
import {
  enableBackButton,
  hideBackButton,
  resetPageTitle,
  updatePageTitle,
} from '@/store/features/layout';
import { useAppDispatch } from '@/store/hooks';
import React, { useEffect } from 'react';

const PageTitle = ({
  title,
  showBackButton,
}: {
  title: string;
  showBackButton?: boolean;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (title) {
      dispatch(updatePageTitle({ pageTitle: title }));
    } else {
      dispatch(resetPageTitle());
    }
  }, [dispatch, title]);

  useEffect(() => {
    if (showBackButton) {
      dispatch(enableBackButton());
    } else {
      dispatch(hideBackButton());
    }
  }, [dispatch, showBackButton]);

  return <></>;
};

export default PageTitle;
