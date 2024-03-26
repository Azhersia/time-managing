'use server'

import { db } from './db'

export async function getData() {
  const data = await db.query('SELECT * FROM projects')
  return data.rows
}

export async function saveData(projectName: string) {
  try {
    await db.query("INSERT INTO projects(projectname) VALUES ($1)", [projectName])
    return 'Saved Successfully'
  } catch (error) {
    console.log(error);
    return 'Didnt save'
  }
}

export async function saveTime(projectName: string, totalSeconds: number) {
  try {
    await db.query("INSERT INTO projects(projectname, total_seconds) VALUES ($1, $2)", [projectName, totalSeconds]); // Assuming you have a column total_seconds in your projects table
    return 'Saved Successfully';
  } catch (error) {
    console.log(error);
    return 'Didnt save';
  }
}

export async function onSubmit(formData: FormData) {
  const totalSeconds = formData.get('totalSeconds')
  const projectId = formData.get('projectId')
  console.log(totalSeconds, projectId)

}