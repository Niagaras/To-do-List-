import API from "../libs/Api"
import { useQuery } from "@tanstack/react-query"
import type {Todo, TodoResponse } from "../models";

export const useAddTodo = () => {
    const {isPending, isError, data, error} = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    });
    return {isPending, isError, data, error};
};

export const fetchTodos = async() : Promise<Todo[]> => {
    const response = await API.get<TodoResponse>('/');
    return response.data.todos;
}