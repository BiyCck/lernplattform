import { defineStore } from 'pinia'
import router from '@/router'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth'
import { computed , ref} from 'vue'



export const useUserStore = defineStore("userStore",() => {
  const user = ref(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
  const isLoggedIn = computed(() => user.value !== null);
  const userId = computed(() => user.value.uid);

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        localStorage.setItem("user", JSON.stringify(userCredential.user))
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
    const { email, password, passwordRepeat} = details
    if(password !== passwordRepeat) {
      alert("Passwords do not match")
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        localStorage.setItem("user", JSON.stringify(userCredential.user))
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
      localStorage.removeItem("user")
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

  function getUser() {
    return user.value
  }
  
  return { user, userId, isLoggedIn, getUser, login, register, logout, fetchUser}
  },
)