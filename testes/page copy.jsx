"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <>
      <div className="container mx-auto flex gap-4 items-center justify-center flex-wrap">
        {usuarios.map((usuarios, index) => {
          return (
            <div
              key={index}
              className="p-6 bg-white text-black rounded-4xl w-[300px] h-auto flex flex-col gap-2 shadow-xl shadow-gray-400"
            >
              <div className="w-full flex items-center justify-center text-2xl">
                <span>{usuarios.name}</span>
              </div>

              <p>{usuarios.username}</p>
              <p>{usuarios.email}</p>
              <p>{usuarios.phone}</p>
              <p>
                Endereo: {usuarios.address.street}, {usuarios.address.suite},{" "}
                {usuarios.address.city}, {usuarios.address.zipcode}
              </p>

              <p>Website: {usuarios.website}</p>

              <p>Empresa: {usuarios.company.name}</p>
              <p>Slogan: {usuarios.company.catchPhrase}</p>
              <p>Descrição: {usuarios.company.bs}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
