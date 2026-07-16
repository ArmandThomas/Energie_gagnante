// Génère le HTML statique de la landing au build.
// Chaîne : `vite build` (client) -> `vite build --ssr` (serveur) -> ce script,
// qui injecte le markup rendu dans le template et supprime le bundle serveur.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(rootDir, p)

const template = fs.readFileSync(resolve('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const html = template.replace('<!--app-html-->', render())

fs.writeFileSync(resolve('dist/index.html'), html)
fs.rmSync(resolve('dist/server'), { recursive: true, force: true })

console.log('✓ HTML pré-rendu : dist/index.html')
