export type TestStage = 'initialization' | 'progress' | 'concluded';

export type AllowedQuestionTypes = 'input' | 'radio' | 'checkbox' | 'dropdown';
export type AllowedInputTypes = 'number' | 'text';

export type TestQuestionType = {
  _id: string;
  topic_id: string;
  sub_topic_id: string;
  title: string;
  question_type: AllowedQuestionTypes;
  question_input_type?: AllowedInputTypes;
  options: {
    option_value: string;
    _id: string;
  }[];
  created_by: string;
  creation_date: Date;
  last_updated_by: string;
  last_update_date: Date;
};

export interface TestCreationType {
  topic_id?: string;
  sub_topic_id?: string;
  user_id: string;
  questions: TestQuestionType[];
  completed: boolean;
  creation_date: Date;
  _id: string;
}
