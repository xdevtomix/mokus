import React from "react";
import { XCircleIcon } from '@heroicons/react/outline';

export default function ImageViewer({ language, selectedDish, setSelectedDish }) {
    return (
        <div
            data-component="image-viewer"
            className={`
                absolute inset-0
                flex flex-col items-center justify-start
                bg-gray-200 z-20
                transition duration-300 transform-gpu ${selectedDish?.url ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
                mx-auto ipad-h:w-3/5 win:w-2/5
            `}
        >
            <XCircleIcon className="h-12 w-12 m-12 text-gray-600 cursor-pointer no-bh" onClick={() => setSelectedDish(null)} />
            {selectedDish?.url && <img className="w-11/12 h-4/6 object-cover rounded-3xl" src={selectedDish?.url} alt={selectedDish?.[language]} />}
        </div>
    );
}