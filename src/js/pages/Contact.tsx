import { Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="">
      {/* CABECERA */}
      <div className="flex justify-center p-4">
        <h1 className="border-b border-black">contact</h1>
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-col items-center p-4 space-y-2">
        <p>For inquiries, please reach out via our Instagram page:</p>
        <div className="flex items-center gap-2">
          <Instagram className="w-6 h-6 text-blue-500" />
          <a href="https://www.instagram.com/stampurr_/">Instagram</a>
        </div>
      </div>
    </div>
  );
}
