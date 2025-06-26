'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut,  } from "next-auth/react";



export default function LoginPage() {
    

  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    console.log("🟢 Sending login payload:", form); // ✅ check this

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      console.log('✅ Logged in user:', data.user);

      // Redirect after successful login
      if (data.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }

    } catch (err) {
      console.error("🚨 Network/Login error", err);
      setError('Something went wrong. Try again later.');
    }
  };

  return(
  //   <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
     
  //     <h2 className="text-2xl font-bold mb-4">Login</h2>
  //     <form onSubmit={handleSubmit} className="space-y-4">
  //       <input
  //         type="email"
  //         name="email"
  //         value={form.email}
  //         onChange={handleChange}
  //         placeholder="Email"
  //         className="w-full p-2 border rounded"
  //         required
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         value={form.password}
  //         onChange={handleChange}
  //         placeholder="Password"
  //         className="w-full p-2 border rounded"
  //         required
  //       />
  //       {error && <p className="text-red-600">{error}</p>}
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
  //       >
  //         Log In
  //       </button>
  //     </form>
   
  //   <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700' onClick={() => signOut()}>Sign out with google</button>
  //   </div>
    
  // ); 
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
     
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
    <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700' onClick={() => signIn("google")}>Sign in with Google</button>
     <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700' onClick={() => signOut()}>Sign out with google</button>
    </div>
  );
    
  
}








