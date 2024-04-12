import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://127.0.0.1:5000/fetch')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className='p-3'>
            <h1 className="text-3xl font-bold mb-4">{data.length > 0 && data[0].flag ? data[0].author : ''}</h1>
            <table className="table-auto w-full border-bottom border-gray-600 border-b-6 text-center">
                <thead style={{ backgroundColor: '#584343d8' }}>
                    <tr>
                        <th className="px-8 py-2">Title</th> {/* Increased width */}
                        <th className="px-4 py-2">Publication Year</th>
                        <th className="px-8 py-2">Citation</th> {/* Increased width */}
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Publication ID</th>
                        <th className="px-4 py-2">Number of Citations</th>
                        <th className="px-4 py-2">Citation URL</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#58434367' }} className="border-b-6 text-dark-400">
                    {data.map(item => (
                        <tr key={item.author_id} className="border-b-4 border-gray-200 border rounded">
                            <td className="px-8 py-2">{item.title}</td> {/* Increased width */}
                            <td className="px-4 py-2">{item.pub_year}</td>
                            <td className="px-8 py-2">{item.citation}</td> {/* Increased width */}
                            <td className="px-4 py-2">{item.author}</td>
                            <td className="px-4 py-2">{item.publication_id}</td>
                            <td className="px-4 py-2">{item.num_citations}</td>
                            <td className="px-4 py-2">
                                {item.citation_url !== "NULL" ? (
                                    <a href={item.citation_url ? item.citation_url : '#'} className='text-blue-900 underline'>
                                        {item.citation_url}
                                    </a>
                                ) : (
                                    <span className="text-gray-600">Not Available</span>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default DataDisplay;
