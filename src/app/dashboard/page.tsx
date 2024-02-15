'use client'

import UseStore from "@/store";

const Dashboard = () => {

    const { useAuthStore: { isSignIn } } = UseStore()

    // console.log('isSignIn dashboard', isSignIn)


    return (
        <span className="text-sm font-semibold">Dashboard</span>
    )
}

export default Dashboard;