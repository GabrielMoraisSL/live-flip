'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button, Column, Input, Row } from '@/components/server';
import { FaArrowRight, FaShieldHalved } from 'react-icons/fa6';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  const [identificador, setIdentificador] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn('credentials', {
      identificador,
      senha,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError('Credenciais inválidas. Tente novamente.');
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <Column className='gap-14 pb-10 items-center overflow-hidden grow uppercase bg-linear-to-br from-brand-secondary font-grotesk justify-center'>
      <h1
        translate='no'
        className='pl-6 pr-5 italic py-3 bg-brand-primary text-center font-bold shadow-hard text-4xl sm:text-6xl -rotate-4 z-20'
      >
        LIVEFLIP
      </h1>
      <div className='relative w-full md:w-auto px-5 sm:px-20 md:px-0'>
        <h2
          translate='no'
          className='absolute text-[10rem] font-bold text-black -left-45 md:-left-65 bottom-90 md:bottom-110 opacity-10'
        >
          FLIP
        </h2>
        <h2
          translate='no'
          className='absolute text-[10rem] font-bold text-black -right-45 md:-right-65 top-90 md:top-110 opacity-10'
        >
          LIVE
        </h2>
        <Column className='bg-neutral-900 text-gray-300 relative gap-10 p-5 sm:p-10 border-4 border-neutral-950 w-full md:w-xl z-20'>
          <Column className='gap-3'>
            <p className='text-xs text-brand-primary font-bold items-center gap-1'>
              <FaShieldHalved className='inline mb-px mr-1' />
              <span>Area de segurança: Login necessário</span>
            </p>
            <h3 className='text-xl sm:text-4xl font-black'>Acesso Restrito</h3>
            <h4 className='text-[10px] sm:text-xs tracking-[0.2em] text-gray-400'>
              Apenas membros autorizados
            </h4>
          </Column>
          <form onSubmit={handleSubmit}>
            <Column className='gap-6 text-gray-400'>
              <Column className='gap-1'>
                <label className='tracking-widest text-xs font-bold'>
                  Nome de usuário / E-mail
                </label>
                <Input
                  placeholder='exemplo_123 / exemplo@emil.com'
                  value={identificador}
                  onChange={(e) => setIdentificador(e.target.value)}
                />
              </Column>
              <Column className='gap-1'>
                <label className='tracking-widest text-xs font-bold'>
                  Senha
                </label>
                <Input
                  type='password'
                  placeholder='*********'
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Column>
              {error && (
                <p className='text-red-500 text-xs font-bold normal-case'>
                  {error}
                </p>
              )}
            </Column>
            <Column className='gap-4 mt-6'>
              <Button variant='default' type='submit' disabled={loading}>
                <Row className='gap-2 justify-between select-none text-black font-bold'>
                  <span>{loading ? 'Entrando...' : 'Entrar'}</span>
                  <FaArrowRight />
                </Row>
              </Button>
              <Column className='gap-2 sm:gap-1 sm:flex-row text-xs text-gray-400 font-semibold items-start sm:items-center sm:justify-between'>
                <button type='button' className='hover:underline'>
                  Esqueceu as credenciais?
                </button>
                <button type='button' className='hover:underline'>
                  Entrar para o LiveFlip
                </button>
              </Column>
            </Column>
          </form>
          <Row className='hidden sm:flex text-xs text-neutral-600 gap-2 justify-center'>
            <div className='bg-neutral-600 w-full h-px' />
            <h4 className='text-nowrap'>
              2026 © Todos os direitos reservados
            </h4>
            <div className='bg-neutral-600 w-full h-px' />
          </Row>
          <Row className='hidden md:flex absolute left-120 top-60 rotate-90 gap-0 tracking-[0.2em] text-nowrap text-xs text-gray-300 font-semibold'>
            <div className='min-h-8 min-w-2 bg-brand-primary' />
            <span className='bg-neutral-800 px-8 py-2'>
              AUTHORIZED PERSONNEL ONLY BEYOND THIS POINT
            </span>
          </Row>
        </Column>
        <div className='md:hidden text-nowrap text-center absolute mt-10 text-gray-400 text-xs w-full pr-10'>
          <h4>2026 © Todos os direitos reservados</h4>
        </div>
      </div>
    </Column>
  );
}
