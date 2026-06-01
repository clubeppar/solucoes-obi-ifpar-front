import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const statusType = Object.freeze({
    success: 'success',
    error: 'error',
    warning: 'warning',
});

function getStatusIcon(type) {
    switch (type) {
        case statusType.success:
            return <FaCheck />;
        case statusType.error:
            return <MdErrorOutline />;
        case statusType.warning:
            return <IoWarningOutline />;
        default:
            return '';
    }
}

export function Notification({ type, message }) {
    return (
        <div className={`justify-between gap-2 rounded-lg p-4 text-sm font-medium bg-gray-900 w-fit min-w-75 flex`}>
            <div className="flex items-center gap-2">
                <div className={`border rounded-md bg-gray-800 p-1 ${type === statusType.success ? 
                'border-green-400' : type === statusType.error ? 'border-red-500' : 
                'border-yellow-400'}`}>
                    <span className={`${type === statusType.success ? 'text-green-400'
                        : type === statusType.error ? 'text-red-500' : 'text-yellow-400'}`}>
                        {getStatusIcon(type)}
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