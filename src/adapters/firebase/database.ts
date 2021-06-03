import {
  getDatabase, FirebaseDatabase, ref, set, get,
} from 'firebase/database';

export default class FirebaseDatabaseStore {
  db: FirebaseDatabase;

  constructor() {
    this.db = getDatabase();
  }

  async saveImage(userId: string) {
    return set(ref(this.db, `images/${userId}`), [
      {
        name: '123',
        description: 'none',
        tags: ['ta1'],
      },
      {
        name: '1234',
        description: 'none',
        tags: ['ta3'],
      },
    ]);
  }

  async getImages(userId: string) {
    const res = await get(ref(this.db, `images/${userId}`));
    if (res.exists()) {
      console.log(res.val());
    } else {
      console.log('notExist');
    }
  }
}
