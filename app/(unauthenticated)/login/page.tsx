import { Column } from "@/components/column";
import { Row } from "@/components/row";
import { FaArrowRight, FaShieldHalved } from "react-icons/fa6";
import Input from "../../../components/input";
import { Button } from "@/components/button";

export default function Login() {
  return (
    <Column className="gap-14 pb-10 items-center overflow-hidden  grow uppercase bg-linear-to-br from-brand-secondary font-grotesk to-neutral-80 justify-center">
      <p className="pl-6 pr-5 italic py-3 bg-brand-primary text-center font-bold shadow-hard text-6xl -rotate-4">
        LIVEFLIP
      </p>
      <div className="relative">
        <p className="absolute text-[10rem] font-bold text-black -left-65 bottom-110 opacity-10">
          FLIP
        </p>
        <p className="absolute text-[10rem] font-bold text-black -right-65 top-110 opacity-10">
          LIVE
        </p>
        <Column className="bg-neutral-900 text-gray-300 relative gap-10 p-10 border-4 border-neutral-950 w-xl z-20">
          <Column className="gap-3">
            <Row className="text-xs text-brand-primary font-bold">
              <FaShieldHalved className="mb-px" />
              Area de segurança: Login necessário
            </Row>
            <p className="text-4xl font-black">Acesso Restrito</p>
            <p className="text-xs tracking-[0.2em] text-gray-400">
              Apenas membros autorizados
            </p>
          </Column>
          <Column className="gap-6 text-gray-400">
            <Column className="gap-1">
              <p className="tracking-widest text-xs font-bold">
                Nome de usuário / E-mail
              </p>
              <Input placeholder="exemplo_123 / exemplo@emil.com" />
            </Column>
            <Column className="gap-1">
              <p className="tracking-widest text-xs font-bold">Senha</p>
              <Input type="password" placeholder="*********" />
            </Column>
          </Column>
          <Column className="gap-4">
            <Button variant="default">
              <Row className="gap-2 justify-between select-none text-black font-bold">
                Entrar
                <FaArrowRight />
              </Row>
            </Button>
            <Row className="text-xs text-gray-400 font-semibold justify-between">
              <button className="hover:underline">
                Esqueceu as credenciais?
              </button>
              <button className="hover:underline">
                Entrar para o LiveFlip
              </button>
            </Row>
          </Column>
          <Row className="text-xs text-neutral-600 gap-2">
            <div className="bg-neutral-600 w-full h-px" />
            <span className="text-nowrap">
              2026 © Todos os direitos reservados
            </span>
            <div className="bg-neutral-600 w-full h-px" />
          </Row>
          <Row className="absolute left-120 top-60 rotate-90 gap-0 tracking-[0.2em] text-nowrap text-xs text-gray-300 font-semibold">
            <div className="min-h-8 min-w-2 bg-brand-primary" />
            <span className="bg-neutral-800 px-8 py-2">
              AUTHORIZED PERSONNEL ONLY BEYOND THIS POINT
            </span>
          </Row>
        </Column>
      </div>
    </Column>
  );
}
