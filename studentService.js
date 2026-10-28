import * as studentModel from '../models/studentModel.js';

export const fetchALLStudents = async () => {
    const students = await studentModel.fetch();
    return students;
};