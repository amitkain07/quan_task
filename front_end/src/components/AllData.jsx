import axios from "axios";
import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [user, setUser] = useState([]);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/getall");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">DoB</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Password</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {user.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 flex items-center space-x-2">
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="py-3 px-4">{user.dob}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="pu-3 px-4">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4 text-sm text-gray-600">
          <button className="px-3 py-1 border rounded-l">Prev</button>
          <button className="px-3 py-1 border bg-blue-100 text-blue-600">
            1
          </button>
          <button className="px-3 py-1 border">2</button>
          <button className="px-3 py-1 border">3</button>
          <button className="px-3 py-1 border rounded-r">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
