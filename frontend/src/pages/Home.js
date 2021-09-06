import Item from '../components/Item';

function Home() {
    return (
        <div>
            Tere! 
            <Item name="Item1" price="25" category="tablet"/>
            <Item name="Item2" price="40"category="laptop"/>      
        </div>
    )
}

export default Home;