import Timer from "@/Components/TimerComponent";
import { getData, saveData } from "@/utilities/handleDatabase";
import { FaPause, FaPlay } from "react-icons/fa";

export default async function Home() {
  const data = await getData()

  const unfinishedProjects = data.filter(project => !project.finished);
  const finishedProjects = data.filter(project => project.finished);

  const create = async (FormData: FormData) => {
    "use server";
    const projectName = FormData.get("projectName") as string;
    const data = await saveData(projectName);
    console.log(data);
  };

  return (
    <div className="bg-olive flex min-h-screen scrollbar-style">

      <div className=' bg-[#d8e6d6] flex flex-col gap-3 fixed mt-1/2 h-full overflow-y-auto scrollbar-style'>
        <form action={create} className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3 m-10'>
          <h1>Create new project</h1>
          <input type="text" name='projectName' placeholder='Project Name' className='px-3 py-1 bg-slate-300 text-center' />
          <div className="flex gap-2">
            <button className='bg-olive py-1 px-2 rounded'>Create</button>
          </div>
        </form>

        {unfinishedProjects.map((project, index) => {
          let timeSpent = project.timespent;

          let hours = Math.floor(timeSpent / 3600);
          let minutes = Math.floor((timeSpent % 3600) / 60);
          let seconds = timeSpent % 60;

          let timeString = `Timespent:`;

          if (hours === 1) {
            timeString += ` ${hours} hour`;
          } else if (hours > 1) {
            timeString += ` ${hours} hours`;
          }

          if (minutes === 1) {
            timeString += ` ${minutes} minute`;
          } else if (minutes > 1) {
            timeString += ` ${minutes} minutes`;
          }

          if (seconds === 1) {
            timeString += ` ${seconds} second`;
          } else if (seconds > 1) {
            timeString += ` ${seconds} seconds`;
          }

          return (
            <div key={index} className="flex flex-wrap gap-20 m-5">
              <div className='bg-oliveShade flex flex-col justify-center  items-center min-w-80 gap-3 rounded p-3'>
                <div className="flex flex-col justify-center items-center">
                  <div>
                  </div>

                  <div>

                    <Timer projectId={project.id} />

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ml-96 flex flex-wrap items-center ">
        {finishedProjects.map((project, index) => {
          let timeSpent = project.timespent;

          let hours = Math.floor(timeSpent / 3600);
          let minutes = Math.floor((timeSpent % 3600) / 60);
          let seconds = timeSpent % 60;

          let timeString = `Timespent:`;

          if (hours === 1) {
            timeString += ` ${hours} hour`;
          } else if (hours > 1) {
            timeString += ` ${hours} hours`;
          }

          if (minutes === 1) {
            timeString += ` ${minutes} minute`;
          } else if (minutes > 1) {
            timeString += ` ${minutes} minutes`;
          }

          if (seconds === 1) {
            timeString += ` ${seconds} second`;
          } else if (seconds > 1) {
            timeString += ` ${seconds} seconds`;
          }

          return (
            <div key={index} className="flex flex-wrap gap-20 m-5">
              <div className='bg-oliveShade flex flex-col justify-center items-center min-w-80 gap-3 rounded p-3'>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <h1 className='text-xl'>{project.projectname} - {project.id}</h1>
                  </div>
                  <h1>{timeString}</h1>

                  {project.notes && (
                    <div className="flex justify-center items-center flex-col m-2 text-lg bg-olive p-2">

                      <h1>NOTES</h1>
                      <div className="  flex flex-wrap max-w-56  m-2 rounded">
                        {project.notes}
                      </div>
                    </div>
                  )}

                  <div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>

  );
}
