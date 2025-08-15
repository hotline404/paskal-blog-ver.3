import React from 'react'
import { getPost } from '@/API/service';
import BackButton from '@/components/Button/BackButton';

export const dynamic = "force-dynamic";

function Post({ params }) {
  async function tryGet (id) {
    try {
    const res = await getPost(id);
    console.log("* r e s   i n   p o s t   m o d a l *", res)
  } catch (error) {
    console.error("e r r o r   i n   P o s t   m o d a l", error)
  }
  }
  
  tryGet(params.title);

 // getPost(params.id).then(data => {console.log("data in modal", data)})


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl">
        <h2>* P O S T   P A G E *</h2>
        <BackButton className="mt-4 text-sm text-gray-500 hover:cursor-pointer">
          C L O S E
        </BackButton>
      </div>
    </div>
  )
}

export default Post