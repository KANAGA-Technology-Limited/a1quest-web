export type CountryType = {
  iso2: string;
  iso3: string;
  country: string;
  cities: string[];
};

export type StateType = {
  name: string;
  state_code: string;
};

export type TransactionType = {
  _id: string;
  owner: string;
  amount: number;
  reference: string;
  txnType: 'debit' | 'credit';
  txnName: string;
  status: 'pending' | 'failed' | 'successful';
  gateway: 'paystack' | 'flutterwave';
  createdAt: string;
};

export type SubscriptionType = {
  _id: string;
  subscriptionAmount: number;
  subscriptionPlan: string;
  duration: number;
  createdAt: string;
};

export type ClassType = {
  _id: string;
  name: string;
};

export type TopicType = {
  _id: string;
  title: string;
  description: string;
  class_id: string;
  sub_topics: string[];
  created_by: string;
  last_updated_by: string;
  creation_date: string;
  last_update_date: string;
  num_of_enrollments: number;
  num_of_questions?: number;
  test_duration?: number;
  test_notice?: string;
  can_take_test: boolean;
};

export type EnrolledTopicType = {
  _id: string;
  user_id: string;
  topic_id: string;
  progress_rate: number;
  enrollment_date: string;
  last_viewed_at: string;
};

export type SubTopicType = {
  _id: string;
  title: string;
  description: string;
  topic_id: string;
  created_by: string;
  last_updated_by: string;
  creation_date: string;
  last_update_date: string;
  num_of_questions?: number;
  test_duration?: number;
  test_notice?: string;
  can_take_test: boolean;
};

export type LessonType = {
  _id: string;
  title: string;
  description: string;
  topic_id: string;
  sub_topic_id: string;
  created_by: string;
  last_updated_by: string;
  creation_date: string;
  last_update_date: string;
  document_identifier: string;
  document_url: string;
  audio_identifier: string;
  audio_url: string;
  video_identifier: string;
  video_url: string;
};

export type BookMarkType = {
  _id: string;
  user_id: string;
  lesson_id: LessonType;
  creation_date: string;
};

export type RecentTopicType = {
  _id: string;
  user_id: string;
  topic_id: {
    _id: string;
    title: string;
    description: string;
    class_id: string;
    sub_topics: string[];
    num_of_enrollments: number;
    created_by: string;
    last_updated_by: string;
    creation_date: string;
    last_update_date: string;
  };
  progress_rate: number;
  enrollment_date: string;
  last_viewed_at: string;
};

export interface LeaderboardType {
  user_id: string;
  userName: string;
  firstName: string;
  lastName: string;
  average_score: number;
}
