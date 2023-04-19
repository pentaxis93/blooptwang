'use client';

export default function ChatFooter() {
  return (
    <div className='p-5'>
      <div className='input-group input-group-lg'>
        <input type="text" placeholder="Type here" className="input input-lg input-bordered" />
        <button className='btn btn-lg btn-square'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
