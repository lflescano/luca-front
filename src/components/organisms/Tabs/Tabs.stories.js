import React, { useState } from 'react';

import Tabs from '.';

export default {
    title: 'Organisms/Tabs'
}

export const Default = () => {
    const [fakeItems, setFakeItems] = useState([
        { user: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subject: 'Lengua' },
        { user: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subject: 'Lengua 2' },
        { user: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subject: 'Matematica 4' },
        { user: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subject: 'Lengua' },
        { user: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subject: 'Lengua 2' },
        { user: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subject: 'Matematica 4' },
        { user: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subject: 'Lengua' },
        { user: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subject: 'Lengua 2' },
        { user: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subject: 'Matematica 4' }
    ]);

    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secsc
        console.log('daaa');
        if (fakeItems.length >= 20) {
            setHasMore(false);
            return;
        }

        setTimeout(() => {
            console.log('daaaaaaaekkeeee');
            setFakeItems(fakeItems.concat(
                [
                    { user: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subject: 'Lengua' },
                    { user: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subject: 'Lengua 2' },
                    { user: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subject: 'Matematica 4' }
                ]
            ));
        }, 1500);
    };
    return <Tabs fetchMoreData={fetchMoreData} elements={fakeItems} hasMore={hasMore} />
}