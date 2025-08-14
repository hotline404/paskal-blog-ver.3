'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export const dynamic = "force-dynamic";

function Post() {
  const router = useRouter();
  const id = router.query.id;
  console.log("id in modal page", id);

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