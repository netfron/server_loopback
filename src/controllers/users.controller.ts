import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {TodoList} from '../models';
import {TodoListRepository} from '../repositories';

export class UsersController {
  constructor(
    @repository(TodoListRepository)
    public todoListRepository : TodoListRepository,
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'TodoList model instance',
        content: {'application/json': {schema: {'x-ts-type': TodoList}}},
      },
    },
  })
  async create(@requestBody() todoList: TodoList): Promise<TodoList> {
    return await this.todoListRepository.create(todoList);
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'TodoList model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TodoList)) where?: Where,
  ): Promise<Count> {
    return await this.todoListRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of TodoList model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': TodoList}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TodoList)) filter?: Filter,
  ): Promise<TodoList[]> {
    return await this.todoListRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'TodoList PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() todoList: TodoList,
    @param.query.object('where', getWhereSchemaFor(TodoList)) where?: Where,
  ): Promise<Count> {
    return await this.todoListRepository.updateAll(todoList, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'TodoList model instance',
        content: {'application/json': {schema: {'x-ts-type': TodoList}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<TodoList> {
    return await this.todoListRepository.findById(id);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'TodoList PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() todoList: TodoList,
  ): Promise<void> {
    await this.todoListRepository.updateById(id, todoList);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'TodoList DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.todoListRepository.deleteById(id);
  }
}
