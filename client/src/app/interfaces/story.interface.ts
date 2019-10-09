import { Comment } from './comment.interface';

export interface Story {
  author: string,
  story: string,
  image: string,
  comments: Comment[]
}