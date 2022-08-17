import { Header } from '../src/components/Header';
import { Sidebar } from '../src/components/Sidebar';
import { Post } from '../src/components/Post';


import styles from './App.module.css'
import './global.css'

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/YgorBravimR.png',
      name: 'Ygor Bravim',
      role: "CEO @ Bravim's Enterprise"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'anchor', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-28 20:11'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ybribeiro14.png',
      name: 'Yago Bravim',
      role: "CTO @Bravim's Enterprise"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'anchor', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-29 11:42'),
  },

]

// Iteração --> Repetir alguma coisa
// Iterar sobre um array, percorrer um array e repetir a ação para cada posição do array
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          )}
        </main>
      </div>
    </div>
  )
}
