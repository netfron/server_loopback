import { Count, Filter, Where } from '@loopback/repository';
import { TodoList } from '../models';
import { TodoListRepository } from '../repositories';
export declare class UsersController {
    todoListRepository: TodoListRepository;
    constructor(todoListRepository: TodoListRepository);
    create(todoList: TodoList): Promise<TodoList>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<TodoList[]>;
    updateAll(todoList: TodoList, where?: Where): Promise<Count>;
    findById(id: number): Promise<TodoList>;
    updateById(id: number, todoList: TodoList): Promise<void>;
    deleteById(id: number): Promise<void>;
}
