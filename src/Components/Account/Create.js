import { useState } from 'react'
export default function Create() {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    async function CreateAccount(e) {
        e.preventDefault()
        const data = {
            "login": login,
            "pass": pass
        }
        fetch("url", {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    async function CheckLogins(name){
        setLogin(name)
        fetch("url", {
            method: 'POST',
            body: JSON.stringify(name),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    return (
        <div>
            <form onSubmit={CreateAccount} className="mt-5">
                <div className="relative z-0 w-full mb-6 group">
                <input type="text" onChange={(e) => CheckLogins(e.target.value)} name="text" className="block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="text" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66]   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="password" onChange={(e) => setPass(e.target.value)} name="email" className="block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="password" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66]   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
                <button type="submit" className="font-[Poppins] mt-4 text-[#001858] bg-[#f582ae] hover:bg-[#f572ae] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}