
"use client"
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { fetchTemp1 } from './utils/index'
import { useState, useEffect } from "react";





const page = () => {
    const [allTemp, setTemp] = useState<any>()
    const router = useRouter()

    const a = async () => {
        const b = await fetchTemp1() 
        setTemp(b)
    }

    useEffect(() => {
        a()
    }, [])

if(allTemp)
    console.log(allTemp);
    



    const calculateFinalTotal = (allTemp1:any) => {
        if (allTemp1) {
          const result = allTemp1.reduce(
            (acc:any, post:any) => {
              const price = parseInt(post.price);
              const qty = post.quantity;
              acc.totalPrice += isNaN(price) || isNaN(qty) ? 0 : price * qty;
              acc.totalItems += isNaN(qty) ? 0 : qty;
              return acc;
            },
            { totalPrice: 0, totalItems: 0 }
          );
    
          return result;
        }
    
        return { totalPrice: 0, totalItems: 0 };
      };
 








    return (
        <> 
<table className="table table-striped container">
    <thead>
        <tr>
            <th scope="col">Order #</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {
            allTemp && allTemp?.length > 0 ? (
                allTemp.map((post: any, index: any) => (
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>${(calculateFinalTotal(post.user).totalPrice + 3).toFixed(2)}</td>
                        <td>{post.createdAt}</td>
                        <td className={
                            post.Status === null || post.Status === 'not delivered' ? 'text-red-600 font-bold' :
                            post.Status === 'taken' ? 'text-yellow-500 font-bold' :
                            post.Status === 'delivered' ? 'text-green-600 font-bold' :
                            ''
                        }>
                            {post.Status || 'not delivered'}
                        </td>
                        <td><Link className="text-blue-700 mr-3" href={`/order?id=${post.id}`}>View</Link></td>
                    </tr>
                ))
            ) : (
                <div className='home___error-container'>
                    <h2 className='text-black text-xl dont-bold'>...</h2>
                </div>
            )
        }
    </tbody>
</table>

        </>

    )
}

export default page