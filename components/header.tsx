import { FaSearch } from "react-icons/fa";
import { Row } from "./row";

export function Header() {
  return (
    <Row className="uppercase min-w-full h-16 justify-between px-10 border-b border-neutral-700 text-gray-300">
      <span className="text-brand-primary text-3xl font-bold italic">LiveFlip</span>
      <Row className="gap-4">
        <FaSearch />
        <div className="size-10 bg-brand-secondary" />
      </Row>
    </Row>
  );
}
