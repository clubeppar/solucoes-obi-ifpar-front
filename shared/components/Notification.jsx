import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const statusType = Object.freeze({
    "success": {
        icon: <FaCheck />,
        color: 'green-400',
    },
    "error": {
        icon: <MdErrorOutline />,
        color: 'red-500',
    },
    "warning": {
        icon: <IoWarningOutline />,
        color: 'yellow-400',
    },
});

export function Notification({ type, message }) {
    return (
        <div className={`justify-between gap-2 rounded-lg p-4 text-sm font-medium bg-gray-900 w-fit min-w-75 flex`}>
            <div className="flex items-center gap-2">
                <div className={`border rounded-md bg-gray-800 p-1 border-${statusType[type].color}`}>
                    <span className={`text-${statusType[type].color}`}>
                        {statusType[type].icon}
                    </span>
                </div>
                {message}
            </div>
            <button className="ml-auto text-gray-400 hover:text-gray-500">
                <IoMdClose  className="size-5"/>
            </button>
        </div>
    );
}