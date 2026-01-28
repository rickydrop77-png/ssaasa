import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = '<div style="color:white; padding: 20px;">Erro fatal: Elemento root não encontrado.</div>';
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Erro ao iniciar aplicação:", error);
    rootElement.innerHTML = `<div style="color:white; padding: 20px;">
      <h2>Ops, ocorreu um erro ao carregar.</h2>
      <p>Detalhes: ${error instanceof Error ? error.message : String(error)}</p>
    </div>`;
  }
}