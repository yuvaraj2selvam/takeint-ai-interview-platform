import React from 'react'
import { difficultyLevels } from '../dashboard/mock-interview-table'

const InterviewHeader = () => {
    const type: string = '1';
    return (
        <section className='flex items-center justify-between z-30'>
            <section className='flex items-center gap-x-5'>
                <span className='text-[#1d243c] text-xl font-bold'>Frontend Developer Interview</span>
                <div className={`flex rounded-4xl px-2 text-center ${type == "1" ? "bg-[#46c6c2]" : type == "2" ? "bg-[#ffb700]" : "bg-[#f63737]"}`}>
                    <span className="text-center p-2 ">Easy</span>
                </div>
            </section>
            <span className='bg-[#5a5f7a] px-3 py-2 rounded-4xl text-white font-bold'>Technical Interview</span>
        </section>
    )
}

export default InterviewHeader