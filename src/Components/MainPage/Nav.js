import { Link } from 'react-router-dom'
export default function Nav() {
    const buttons = [
        {id:0, name: "Cart", link: "/cart" },
        {id:1, name: "Policy", link: "/policy" },
        {id:2, name: "Store", link: "/store" },
        {id:3,name:"Log In",link:"/auth"}
    ]
    return (
        <div>
            <div className='w-[100%] bg-gray-200 h-[8px]'></div>
            <div className='flex justify-around py-2 bg-gray-100'>
                <div>
                    <img src="/Resources/Icons/greentea.png" className="w-10" alt="Logo" />
                </div>
                <div className='flex justify-between gap-[4px]'>
                    {buttons.map((button) => (
                        <Link to={button.link} key={button.id}>
                            <button className='rounded-md border-2 w-16 h-8 bg-blue-200 border-black drop-shadow-lg'>{button.name}</button>
                        </Link>
                    )
                    )
                    }
                </div>
            </div>
        </div>
    )
}