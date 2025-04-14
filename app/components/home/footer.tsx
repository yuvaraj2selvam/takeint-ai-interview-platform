import React from 'react'

const Footer = () => {
    return (
        <footer className='md:h-[400px] mb-auto h-[300px] flex flex-col gap-10 mt-20 text-white py-10 rounded-t-[45px] p-6 md:px-20 max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] mx-auto  bg-dark'>
            <div>
                <h1 className='text-4xl font-bold'>takeInt</h1>
            </div>
            <div className='flex flex-row items-center gap-20'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl text-green'>Contact us</h1>
                    <span>Email: yuvaraj2selvam@gmail.com</span>
                    <span>Name: yuvaraj s</span>
                    <span>Country: India</span>
                </div>
                <div className='flex-1 h-full'>
                    <form className="bg-[#292A32] px-10 py-8 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center">
                        <div className="w-full sm:w-[55%]">
                            <input type="text" id="email" name="email" placeholder="Email" className="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none"/>
                        </div>
                        <button type="submit" name="submit" className="w-full bg-green p-5 cursor-pointer text-black rounded-2xl transition ease-in-out delay-100 hover:text-white hover:bg-black sm:w-[45%] btn-tertiary">Subscribe to news</button>
                    </form>
                </div>
            </div>
           <hr />
            <div>
                <span>2025 takeInt - Made with <span className='underline'>NextJs & Vapi</span> by <span className='underline'>yuvaraj</span></span>
            </div>
        </footer>
    )
}

export default Footer