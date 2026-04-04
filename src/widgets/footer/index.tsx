import { VendfyLogo } from "@/shared/ui/vendfy-logo";
import { Mail, Phone, MapPin } from "lucide-react";

const links = {
  producto: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Precios", href: "#precios" },
    { label: "Inteligencia Artificial", href: "#ia" },
    { label: "App Movil", href: "#features" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "https://wa.me/59171890091" },
  ],
  legal: [
    { label: "Terminos de Servicio", href: "#" },
    { label: "Politica de Privacidad", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <VendfyLogo variant="full-white" size={36} />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              La plataforma todo-en-uno para digitalizar tu negocio. Inventario, ventas, tienda online y mas.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:andres.03.12.2003@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                andres.03.12.2003@gmail.com
              </a>
              <a href="https://wa.me/59171890091" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +591 71890091
              </a>
              <span className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                Santa Cruz, Bolivia
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Producto</h4>
            <ul className="space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vendfy. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-600">
            Hecho con amor en Bolivia
          </p>
        </div>
      </div>
    </footer>
  );
}
