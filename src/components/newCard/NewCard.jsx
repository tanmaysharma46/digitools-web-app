import React from 'react';

const NewCard = ({item}) => {
    return (
        <div>
            <div className="w-[380px] h-[380px] space-y-4 bg-white rounded-2xl shadow-xl p-8 text-center relative hover:scale-105 transition duration-300">

                <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {item.id}
                </div>

                <div className="flex justify-center mb-6">
                    <div className="h-[80px] w-[80px] rounded-full overflow-hidden border-2 border-purple-200">
                        <img
                            className="w-full h-full object-cover"
                            src={item.image}
                            alt="User"
                        />
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                </h2>

                <p className="text-gray-500 text-sm">
                    {item.description}
                </p>

            </div>

        </div>
    );
};

export default NewCard;