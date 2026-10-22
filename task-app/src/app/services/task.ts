import { Injectable} from '@angular/core';

export interface TaskInterface{
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root' 
    // сервис доступен во всем приложении
})


export class TaskService {
    private tasks: TaskInterface[] = [
        {id: 1, 
        title: 'Изучить Angular',
        completed: false},
        {id: 2, 
        title: 'Разговаривать на паре',
        completed: true,  
        }
    ];

    getTasks():TaskInterface[]{
        return this.tasks;
    }

    addTask(title: string): void{
        const newTask: TaskInterface = {
            id: Date.now(),
            title,
            completed: false
        };
        this.tasks.push(newTask);
    }

    deleteTask(id: number): void{
        this.tasks = this.tasks.filter(t => t.id != id);
    }
}
