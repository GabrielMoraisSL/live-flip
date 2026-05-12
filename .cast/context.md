---
name: live-flip
objective: |
  Desenvolver e manter o projeto live-flip utilizando TypeScript com arquitetura Hexagonal Architecture (Ports & Adapters).
primary_language: typescript
languages:
  - TypeScript
  - JavaScript
architecture:
  pattern: Hexagonal Architecture (Ports & Adapters)
  confidence: high
---

# Visão Geral

Projeto live-flip desenvolvido em TypeScript seguindo Hexagonal Architecture (Ports & Adapters) com 1 módulo(s) organizado(s).

## Arquitetura

**Padrão:** Hexagonal Architecture (Ports & Adapters)

**Confiança:** high

Domínio no centro, adaptadores externos plugáveis

## Estrutura

### Diretórios Principais
- `lib/`
- `app/`

## Módulos

### (authenticated)

**Caminho:** `app/(authenticated)`

**Papel:** Autenticação e autorização

**Arquivos:** 9

**Arquivos-chave:**
- `layout.tsx`
- `perfil/page.tsx`
- `publicacoes/page.tsx`
- `perfil/components/tricks-list.tsx`
- `perfil/components/trick-card.tsx`

---

## Dependências

### Externas Principais
- class-variance-authority
- clsx
- dayjs
- lucide-react
- next
- radix-ui
- react
- react-dom
- react-icons
- shadcn
- tailwind-merge
- tw-animate-css
- @biomejs/biome
- @tailwindcss/postcss
- @types/node

## Convenções

- **Nomenclatura:** mixed
- **Testes:** Não detectado
- **Linting:** Não detectado

## Estatísticas

- **Total de arquivos:** 29
- **Arquivos de configuração:** 7
- **Módulos:** 1
