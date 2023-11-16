import { connection } from "../configs/db.config.js";
class TasksController {
    // add tasks
    async insertTask(req, res) {
      const { name, priority,  deadline, done } = req.body;
      try {
        await connection.query(
          'INSERT INTO task (name, priority,  deadline, done) VALUES (?, ?, ?, ?)',
          [name, priority, deadline, done]
        );
        console.log(`Inserted task with name: ${name}`);
      } catch (error) {
        throw error;
      }
    }
  
    // get all task
    async getAllTasks(req, res) {
      try {
        const result = await connection.query('SELECT * FROM task');
        console.log("Result: ", result);
        res.status(200).json(result);
        return result;
      } catch (error) {
        throw error;
      }
    }
  
    //   update status Task
    async updateTask(req, res) {
      try {
        const result = await connection.query(
          'UPDATE task SET done=? WHERE id=?',
          [1, req.params.id]
        );
        console.log("Result: ", result);
        return result;
      } catch (error) {
        throw error;
      }
    }
  
    //   delete Task by id
    async deleteTask(req, res) {
      try {
        const result = await connection.query(
          'DELETE FROM task WHERE id=?',
          [req.params.id]
        );
        console.log("Result: ", result);
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
  export default TasksController;