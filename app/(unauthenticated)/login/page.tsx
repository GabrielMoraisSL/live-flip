import { Column } from "@/components/column";
import { Row } from "@/components/row";
import { EyeIcon } from "lucide-react";
import { FaShieldHalved } from "react-icons/fa6";
import Input from "./components/input";

export default function Login() {
  return (
    <Column className="grow uppercase bg-linear-to-br from-neutral-700 font-grotesk from-50% to-neutral-900 items-center justify-center">
      <Column className="gap-14 items-center">
        <p className="pl-6 pr-5 italic py-3 bg-brand-secondary text-center font-bold shadow-hard text-6xl -rotate-4">
          LIVEFLIP
        </p>
        <Column className="bg-neutral-900 text-gray-300 gap-10 p-10 shadow-hard w-xl">
          <Column className="gap-1">
            <Row className="text-xs text-brand-secondary font-bold">
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
          <Column>
            <button>Entrar</button>
            <Row>
              <span>Esqueceu as credenciais?</span>
              <button>Entrar para o LiveFlip</button>
            </Row>
          </Column>
          <Row>
            <div />
            <span>Sessão segura </span>
            <div />
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
