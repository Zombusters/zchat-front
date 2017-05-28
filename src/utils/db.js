import PouchDB from 'pouchdb';

const db = new PouchDB('zchat');

export async function put(data = {}, id) {
    try {
        const doc = await db.get(id);

        await db.remove(doc);

        await db.put({
            _id: id,
            ...data
        });
    } catch(err) {
        if (err.name === 'not_found') {
            await db.put({
                _id: id,
                ...data
            });
        }
        console.log('whateva', err)
    }
}

export async function get(id) {
    try {
        const data = await db.get(id);

        console.log('wtf', data)

        return data;
    } catch(err) {
        console.log('whateva', err, id)

        return 'wrong_token';
    }
}

export async function del(id) {
    try {
        await db.remove(id);
    } catch(err) {
        console.log('whateva', err, id)
    }
}
