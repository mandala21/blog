import React, { useState } from "react";
import CardPost from "../components/CardPost";
import { Layout } from "../components/Layout";
import Search from "../components/Search";
import YearTitle from "../components/YearTitle";

const index: React.FC = () => {
    return (
        <Layout>
            <Search className="mb-10" />
            <div className="mx-4 md:mx-16">
                <YearTitle>
                    #2020
                </YearTitle>
                <CardPost />
            </div>
        </Layout>
    )
}

export default index
