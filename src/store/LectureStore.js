import { collection, getDocs, doc, getDoc, setDoc, query, where, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useUserStore } from "@/store/UserStore";
import { defineStore } from 'pinia';
import { computed, reactive, ref, toRaw } from 'vue'




export const useLectureStore = defineStore("lectureStore", () => {
    const UserStore = useUserStore()

    const lectures = ref(Array(0))
    const userCode = ref(Array(0))
    const progress = ref(Array(0))

    const lectureCount = computed(() => lectures.value.length)

    async function loadLectures() {
        if (lectures.length > 0) return
        const querySnapshot = await getDocs(collection(db, "lectures"))
        querySnapshot.forEach((doc) => {
            lectures.value.push(doc.data())
        })
        return
    }


    async function loadUserCode() {
        const coll = collection(db, UserStore.userId)
        const querySnapshot = await getDocs(coll)
        querySnapshot.forEach((doc) => {
            userCode.value.push(doc.data())
        })
        return
    }

    async function updateUserCode(id, code) {
        const q = query(collection(db, UserStore.userId), where("id", "==", id))
        const docs = await getDocs(q)
        if (docs.empty) {
            const d = doc(collection(db, UserStore.userId))
            await setDoc(d, {
                id: id,
                code: code
            }).then(() => {
                userCode.value.push({
                    id: id,
                    code: code
                })
            })
            return
        }
        docs.forEach((doc) => {
            updateDoc(doc.ref, {
                code: code
            })
        })
        const index = userCode.value.findIndex((element) => element.id == id)
        userCode.value[index].code = code
        
        return
    }

    async function loadProgress() {
        const docRef = doc(db, "progress", UserStore.userId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            progress.value = docSnap.data().progress
        } else {
            await setDoc(doc(db, "progress", UserStore.userId), {
                progress: Array(lectures.value.length).fill(0)
            })
        }
        return
    }

    async function updateProgress() {
        const docRef = doc(db, "progress", UserStore.userId)
        await updateDoc(docRef, {
            progress: progress.value
        })

        return
    }

    function setProgress(id, value) {
        progress.value[id - 1] = value
    }


    const getUserCode = computed(() => toRaw(userCode.value))

    const getLecture= computed(() => toRaw(lectures.value))


    return { lectures, loadLectures, loadUserCode, updateUserCode, loadProgress, updateProgress, lectureCount, getUserCode, getLecture }

});