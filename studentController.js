import * as studentService from '../Services/studentService.js';

export const fetchhALLstudent = async (req, res) => {
    try {
        const students = await studentService.fetchALLStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};