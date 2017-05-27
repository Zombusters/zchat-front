import PouchDB from 'pouchdb';

const db = new PouchDB('zchat');

export async function put(data = {}, id) {
    const doc = await db.get(id);

    await db.remove(doc);

    await db.put({
        _id: id,
        ...data
    });
}

export async function get(id) {
    const data = await db.get(id);

    return data;
}
