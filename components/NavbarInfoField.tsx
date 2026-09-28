import Link from "./Link";

type Props = {
  label: string;
  value: string;
  type: "phone" | "email";
};

export default function NavbarInfoField({ label, value, type }: Props) {
  // tel: links only allow digits and a leading "+", so drop the formatting
  const href =
    type === "phone"
      ? `tel:${value.replace(/[^\d+]/g, "")}`
      : `mailto:${value}`;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-300 text-base font-medium">{label}</label>
      <Link
        href={href}
        text={value}
        className="text-white text-lg font-semibold"
      />
    </div>
  );
}
