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
        console.log('whateva')
    }
}

export async function get(id) {
    try {
        const data = await db.get(id);

        console.log('wtf', data)

        return data;
    } catch(err) {
        console.log('whateva')

        return 'wrong_token';
    }
}
