import { getFinances } from "@/hooks/getFinances"
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


export default async function Finances(){
    const data = await  getFinances()

    return(
        <>
        <div className="w-5/6 max-w-5/6 mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Duplicatas</h5>

            </div>
            <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            data?.map((item)=>
                            <li className="py-3 sm:py-4" key={item.id}>
                            <div className="flex items-center">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Vencimento: {item.expiration}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Valor: {item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                    </p>

                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {item.status==='ok' && <FaCheck className="text-green-300 text-5xl" />}
                                        {item.status==='pending' && <IoClose className="text-red-400 text-5xl" />}
                                </div>

                            </div>
                        </li>
                            )

                        }

                    </ul>
            </div>
        </div>
        </>
    )
}