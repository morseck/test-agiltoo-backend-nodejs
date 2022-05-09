
export class TodoService {
    constructor() {
    }

    findAll() {
        return this.todoRepository.find();
    }

    create(todo: Todo) {
        this.todoRepository.save(todo);
    }

    update(id: number, content: string) {
        this.todoRepository.update(id, { content: content});
    }

    remove(id: number) {
        this.todoRepository.delete(id);
    }

}