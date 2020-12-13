import React, { useState } from "react";
import CardPost from "../components/CardPost";
import { Layout } from "../components/Layout";
import Search from "../components/Search";
import YearTitle from "../components/YearTitle";

const index: React.FC = () => {
    return (
        <Layout>
            <div className="mb-10 px-10">
                <Search />
                <div className="flex mt-16 flex-col items-center">
                    <h2 className="text-3xl font-bold">Desculpe, mas nenhuma postagem foi encontrada :(</h2>
                    <p className="mt-4 text-xl text-gray-800 font-thin">Mas não se preocupe, aguarde até que mais conteudos sejam criados :)</p>
                </div>
            </div>
            {/*<div className="mx-4 md:mx-16">
                <YearTitle>
                    #2020
                </YearTitle>
                <CardPost title="Postagem de Teste"
                    labels={['História']}
                    time={'10 min'}
                    preview="Descrição rapida sobre o texto..."
                    created_at={'2020-11-28'} />
            </div>*/}
        </Layout>
    )
}

export default index
