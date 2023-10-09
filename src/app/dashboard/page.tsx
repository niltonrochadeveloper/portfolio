'use client'

import { Suspense } from "react";

const Dashboard = () => {


    return (
        <div>
            <Suspense fallback={<p>carregando...</p>}>
                <p>Dashboard</p>
            </Suspense>
        </div>
    )
};

export default Dashboard