export default function HomePage(){
    return(
        <div
  className="relative flex min-h-screen flex-col bg-white justify-between overflow-x-hidden"

>

  <div>
    <div className="flex items-center bg-white p-4 pb-2 justify-between">
      <div className="text-[#181111] flex size-12 shrink-0 items-center">
      
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
        </svg>
      </div>
      <h2 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Menu</h2>
    </div>


    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
          <div className="text-[#886364] flex border-none bg-[#f4f0f0] items-center justify-center pl-4 rounded-l-lg">
          
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for items"
            className="form-input w-full flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border-none bg-[#f4f0f0] px-4 h-full placeholder:text-[#886364] rounded-l-none"
          />
        </div>
      </label>
    </div>


    <div className="flex gap-3 p-3 overflow-x-auto">
      <div className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0f0] px-4">
        <p className="text-[#181111] text-sm font-medium">All</p>
      </div>
      <div className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0f0] px-4">
        <p className="text-[#181111] text-sm font-medium">Coffee</p>
      </div>
      <div className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0f0] px-4">
        <p className="text-[#181111] text-sm font-medium">Pastries</p>
      </div>
      <div className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0f0] px-4">
        <p className="text-[#181111] text-sm font-medium">Sandwiches</p>
      </div>
    </div>

  
    <h3 className="text-[#181111] text-lg font-bold tracking-[-0.015em] px-4 pb-2 pt-4">Featured</h3>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
 
      <div className="flex flex-col gap-3 pb-3">
        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" ></div>
        <div>
          <p className="text-[#181111] text-base font-medium">Espresso</p>
          <p className="text-[#886364] text-sm">$2.50</p>
        </div>
      </div>
   
      <div className="flex flex-col gap-3 pb-3">
        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" ></div>
        <div>
          <p className="text-[#181111] text-base font-medium">Latte</p>
          <p className="text-[#886364] text-sm">$3.50</p>
        </div>
      </div>
    
      <div className="flex flex-col gap-3 pb-3">
        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" ></div>
        <div>
          <p className="text-[#181111] text-base font-medium">Cappuccino</p>
          <p className="text-[#886364] text-sm">$3.75</p>
        </div>
      </div>
     
      <div className="flex flex-col gap-3 pb-3">
        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" ></div>
        <div>
          <p className="text-[#181111] text-base font-medium">Iced Coffee</p>
          <p className="text-[#886364] text-sm">$3.00</p>
        </div>
      </div>
    </div>

  
    <h3 className="text-[#181111] text-lg font-bold tracking-[-0.015em] px-4 pb-2 pt-4">Pastries</h3>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
     
    </div>
  </div>


  <div className="flex gap-2 border-t border-[#f4f0f0] bg-white px-4 pb-3 pt-2">
    <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#886364]" href="#">
      <div className="text-[#886364] flex h-8 items-center justify-center">
  
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M218.83,103.77l-80-75.48a16,16,0,0,0-21.53,0L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V152h32v56a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z"></path>
        </svg>
      </div>
    </a>

  </div>
</div>
    )
}