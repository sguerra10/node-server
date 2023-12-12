const tasks = require('./data')
const { faker } = require('@faker-js/faker')

class ProductServices {
    constructor(){
        this.taks = tasks
    }
async create(data){
    const newTask = {
        id: faker.string.uuid(),
        isCompleted: false,
        ...data
    }
    this.taks.push(newTask)
    return newTask
}

async edit(data){
    const {id} = data; 
    const taskIndex = this.taks.findIndex(task => task.id == id);
    const task = this.taks[taskIndex];
    const updatedTask = {
        ...task,
        ...data
    };
    this.taks[taskIndex] = updatedTask;
    return updatedTask;
}

async find(){
    return this.taks
}
async findOne(id){
   const task = this.taks.find(task => task.id === id);
   return task; 
}
async findIncomplete(){
    const incompleteTasks = this.taks.filter(task => !task.isCompleted);
    return incompleteTasks;
}
async findCompleted(){
    const incompleteTasks = this.taks.filter(task => task.isCompleted);
    return incompleteTasks;
}

async delete(id){
    const taskIndex = this.taks.findIndex(task => task.id == id);
    if (taskIndex !== -1) {
        this.taks.splice(taskIndex, 1);
        return true;
    }
    return false;
}
}
module.exports = ProductServices;