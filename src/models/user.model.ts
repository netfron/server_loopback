import {Model, model, property} from '@loopback/repository';

@model()
export class User extends Model {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
