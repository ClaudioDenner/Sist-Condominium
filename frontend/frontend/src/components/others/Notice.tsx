import { getNotices } from "@/hooks/getNotices"


export default async function Notice(){
    
    const query = await getNotices()

    return(
        <>
        <div className="w-5/6 max-w-5/6 mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Últimas informações</h5>
                </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                    query.map((item)=>
                        <li className="py-3 sm:py-4" key={item.id}>
                            <div className="flex items-center">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        De: Administração
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Data: {item.date}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Título: {item.title}
                                    </p>
                                    <p className="text-sm text-gray-500  dark:text-gray-400 text-justify m-4">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        </>
    )
}