import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export async function sendFeedback(data) {
  await addDoc(collection(db, "feedback"), {
    ...data,
    status: "new",
    createdAt: serverTimestamp(),
  });
}