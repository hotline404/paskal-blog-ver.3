'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function Post() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl">
        <h2>모달</h2>
        <button onClick={() => {router.back()}} className="mt-4 text-sm text-gray-500 hover:cursor-pointer">
          닫기
        </button>
      </div>
    </div>
  )
}

export default Post
