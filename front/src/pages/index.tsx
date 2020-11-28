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
                <CardPost title="Postagem de Teste"
                    labels={['História']}
                    time={'10 min'}
                    preview="Descrição rapida sobre o texto..."
                    created_at={'2020-11-28'} />
            </div>
        </Layout>
    )
}

export default index
