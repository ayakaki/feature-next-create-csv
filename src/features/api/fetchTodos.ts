import { fetcher } from '../common/fetcher';
import { type Todo } from '@/types/todo';

export const fetchTodos = async (): Promise<Todo[]> => await fetcher('/todos');
