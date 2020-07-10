import React, { FC } from 'react';
// import { Button } from 'antd';
import './App.css';
// import ProductList from "./components/ProductList";
import LayoutMain from "./components/LayoutMain";

/*
const printDeleteRecord = (id: string) => console.log(id);
const products = [
    {name: 'test1', id: 1, key: 1},
    {name: 'test2', id: 2, key: 2},
    {name: 'test3', id: 3, key: 3},
    {name: 'test4', id: 4, key: 4},
];
*/

const App: FC = () => (
    <div className="App">
{/*
        <Button type="primary">Button</Button>
        <ProductList onDelete={printDeleteRecord} products={products} />
*/}
    <LayoutMain/>
    </div>
);

export default App;