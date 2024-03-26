import NavbarComponent from "@/Components/NavbarComponent";

export default async function Home() {

  return (
    <div className="bg-olive thisisClass">

      <NavbarComponent />

      <div className="flex flex-col items-center justify-center overflow-none h-screen w-full gap-2 p-3 text-oliveText ">
        <div className='flex flex-col gap-3 '>

          <form className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3 '>
            <h1>Create Quote</h1>
            <input type="text" name='author' placeholder='author' className='px-3 py-1 bg-slate-300' />
            <input type="text" name='quote' placeholder='quote' className='px-3 py-1 bg-slate-300' />
            <button className='bg-olive py-1 px-2 rounded'>Save quote</button>

          </form>

          <form className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3'>
            <h1>Update Quote</h1>
            <input type="text" name='id' placeholder='id' className='px-3 py-1 bg-slate-300' />
            <input type="text" name='author' placeholder='author' className='px-3 py-1 bg-slate-300' />
            <input type="text" name='quote' placeholder='quote' className='px-3 py-1 bg-slate-300' />
            <button className='bg-olive py-1 px-2 rounded'>Update quote</button>
          </form>

          <form className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3 rounded'>
            <h1>Delete Quote</h1>
            <input type="text" name='id' placeholder='id' className='px-3 py-1 bg-slate-300' />
            <button className='bg-olive py-1 px-2 rounded'>Delete quote</button>
          </form>

        </div>

      </div>
    </div>
  );
}