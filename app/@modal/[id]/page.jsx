'use client'
import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { getPost } from '@/API/service';

export const dynamic = "force-dynamic";

function Post() {
  const router = useRouter();
  const params = useParams();
  async function tryGet (id) {
    try {
    const res = await getPost(id);
    res.then(data => console.log("data in post modal", data))
  } catch (error) {
    console.error("e r r o r   i n   P o s t   m o d a l", error)
  }
  }
  
  tryGet(params.id);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl">
        <h2>* P O S T   P A G E *</h2>
        <button onClick={() => {router.back()}} className="mt-4 text-sm text-gray-500 hover:cursor-pointer">
          C L O S E
        </button>
      </div>
    </div>
  )
}

export default Post