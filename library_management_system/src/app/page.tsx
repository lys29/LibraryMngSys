// import Image from "next/image";
'use client'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/page';
import Login from './log_in/page';
import Register from './register/page';
import Passrec from './pass_recovery/page';

export default function Home() {
  return (
    <div>
      <p>hi</p>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/password_recovery" element={<Passrec/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
