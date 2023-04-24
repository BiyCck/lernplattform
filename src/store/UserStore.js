import { defineStore } from 'pinia'
import router from '@/router'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth'
import { computed, ref } from 'vue'


export const useUserStore = defineStore("userStore",() => {
  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null);

  async function login(details) {
    const { email, password} = details
    
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        user.value = userCredential.user
      })
    } catch(error) {
      switch(error.code) {
        case 'auth/user-not-found':
          alert("user not found")
          break
        case 'auth/wrong-password':
          alert("Wrong password")
          break
        default:
          alert("Something went wrong")
      }
    return
    }
    router.push('/')

  }

  async function register(details) {
    const { email, password} = details

    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        user.value = userCredential.user
      })
    } catch(error) {
      switch(error.code) {
        case 'auth/email-already-in-use':
          alert("Email already in use")
          break
        case 'auth/invalid-email':
          alert("Invalid Email")
          break
        case 'auth/operation-not-allowed':
          alert("Operation not allowed")
          break
        case 'auth/weak-password':
          alert('Weak password')
          break
        default:
          alert("Something went wrong")
      }
    return
    }
    router.push('/')
  }

  async function logout() {
    await signOut(auth).then(() => {
      user.value = null
    })
    router.push('/')
  }

  async function fetchUser() {
    auth.onAuthStateChanged(async user => {
      if (user === null) {
        user.value = null
      }
      else {
        user.value = user

        if(router.isReady() && router.currentRoute.value.path === '/login') {
          router.push('/')
        }
      }
    })
  }
  
  return { user, isLoggedIn, login, register, logout, fetchUser}
  },
)