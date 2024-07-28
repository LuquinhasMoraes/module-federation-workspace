import fs  from 'fs';
import path from 'path';
import { glob } from 'glob'

// Função para remover a importação do BrowserModule
function removeBrowserModule(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Remover a linha de importação do BrowserModule
  const updatedContent = content.replace(/import\s*\{[^}]*BrowserModule[^}]*\}\s*from\s*'@angular\/platform-browser';?\n?/g, '')
                                // Remover o BrowserModule da lista de imports
                                .replace(/BrowserModule\s*,?\s*/g, '');

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`BrowserModule removido de ${filePath}`);
}

// Caminho do diretório do projeto
const projectDir = path.resolve('./'); // Substitua 'app2' pelo caminho correto do seu projeto

// Encontrar todos os arquivos de módulo
const files = glob.sync(`${projectDir}/**/*.module.ts`);

files.forEach(file => {
  // Verificar se o arquivo não é o AppModule
  if (!file.includes('app.module.ts')) {
    removeBrowserModule(file);
  }
});
