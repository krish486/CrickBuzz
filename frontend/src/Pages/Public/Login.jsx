import React from "react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Sign in to continue
                    </p>
                </div>

                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50 transition">
                    <FcGoogle size={22} />
                    Continue with Google
                </button>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Secure authentication using your Google account
                </div>
            </div>
        </div>
    );
};

export default Login;