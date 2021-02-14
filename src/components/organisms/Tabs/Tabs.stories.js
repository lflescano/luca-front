import React, { useState } from 'react';

import Tabs from '.';

export default {
    title: 'Organisms/Tabs'
}

export const Default = () => {
    const [fakeItems, setFakeItems] = useState([
        { username: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subjectname: 'Lengua' },
        { username: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subjectname: 'Lengua 2' },
        { username: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subjectname: 'Matematica 4' },
        { username: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subjectname: 'Lengua' },
        { username: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subjectname: 'Lengua 2' },
        { username: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subjectname: 'Matematica 4' },
        { username: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subjectname: 'Lengua' },
        { username: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subjectname: 'Lengua 2' },
        { username: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subjectname: 'Matematica 4' }
    ]);

    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (fakeItems.length >= 20) {
            setHasMore(false);
            return;
        }
        console.log('fetchMoreData');
        setTimeout(() => {
            setFakeItems(fakeItems.concat(
                [
                    { username: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subjectname: 'Lengua' },
                    { username: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subjectname: 'Lengua 2' },
                    { username: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subjectname: 'Matematica 4' }
                ]
            ));
        }, 1500);
    };
    return <Tabs fetchMoreData={fetchMoreData} elements={fakeItems} hasMore={hasMore} />
}