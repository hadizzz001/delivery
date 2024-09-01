'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { fetchTemp3 } from '../utils';

const Page = () => {
    const [allTemp1, setTemp1] = useState(null);
    const [status, setStatus] = useState('');
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(() => {
        const fetchData = async () => {
            const b = await fetchTemp3(search);
            setTemp1(b);
        };
        fetchData();
    }, [search]);

    // Update status when allTemp1 changes
    useEffect(() => {
        if (allTemp1 && allTemp1.Status) {
            setStatus(allTemp1.Status);
        }
    }, [allTemp1]);

    const calculateFinalTotal = () => {
        if (allTemp1 && allTemp1.user) {
            const result = allTemp1.user.reduce(
                (acc, post) => {
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

    const finalTotal = calculateFinalTotal();

    const handleEditSubmit = async (e) => {
        e.preventDefault();
    
        let newStatus = '';
        if (status === 'not delivered') {
            console.log("Entered1");
            newStatus = 'taken'; 
        } else if (status === 'taken') {
            console.log("Entered2");
            newStatus = 'delivered'; 
        } 
    
        if (newStatus) {
            axios
                .patch(`/api/order/${search}`, { Status: newStatus })
                .then((res) => {
                    console.log("Response:", res);
                    setStatus(newStatus);
                })
                .catch((err) => {
                    console.log("Error:", err);
                })
                .finally(() => {
                    // window.location.replace("/dashboard");
                });
        } else {
            console.log("No status change detected");
        }
    };
    

    return (
        <>
            <Link href="/">
                <button
                    type="button"
                    className="text-white rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
                    style={{ background: '#234012' }}
                >
                    <img
                        src="https://res.cloudinary.com/dixtwo21g/image/upload/v1699388330/next/dmhmwrpyxkjzjzk5iurq.png"
                        width={14}
                        alt=""
                    />
                    Return Back
                </button>
            </Link>
            <div className="bg-gray-100 h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Order #{search}</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="col-md-8">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Price</th>
                                            <th className="text-left font-semibold">Quantity</th>
                                            <th className="text-left font-semibold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allTemp1 && allTemp1.user.map((temp, index) => (
                                            <tr key={index}>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <img
                                                            className="h-16 w-16 mr-4 imageMob"
                                                            src={temp.img[0]}
                                                            alt="Product image"
                                                        />
                                                        <span className="font-semibold">{temp.title}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">${temp.price}</td>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <span className="text-center w-8">{temp.quantity}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">${temp.quantity * +temp.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
                                {allTemp1 && (
                                    <>
                                        <div className="flex justify-between mb-2">
                                            <span>Name</span>
                                            <span>{allTemp1.info.fname} {allTemp1.info.lname}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span>Phone</span>
                                            <span>{allTemp1.info.phone}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span>Address</span>
                                            <span>{allTemp1.info.address}</span>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">Total Items</span>
                                            <span className="font-semibold">{finalTotal.totalItems}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">Subtotal</span>
                                            <span className="font-semibold">${finalTotal.totalPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">Delivery fees</span>
                                            <span className="font-semibold">$3.00</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">Total Amount</span>
                                            <span className="font-semibold">${(finalTotal.totalPrice + 3).toFixed(2)}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleEditSubmit}
                                            className={`mt-4 w-full px-4 py-2 rounded text-white ${status === 'delivered' ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'}`}
                                            disabled={status === 'delivered'}
                                        >
                                            {status === 'not delivered' ? 'Mark as Taken' : status === 'taken' ? 'Mark as Delivered' : 'Delivered'}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
