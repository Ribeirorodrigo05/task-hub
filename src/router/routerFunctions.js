import { useRouter } from 'vue-router'

export const routerPush = (path) => {
  const router = useRouter()
  router.push(path).catch((err) => {
    console.error(`router push error: ${path}, ${err}`)
  })
}
