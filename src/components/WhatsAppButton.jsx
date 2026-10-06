import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const whatsappNumber = "918765009955";

  const message = encodeURIComponent(
    "Hello Polivexa, I would like to know more about your services."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Contact Us Label */}
      <div className="relative mr-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-md ring-1 ring-slate-100">
        Contact us

        {/* Small pointer */}
        <span className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white" />
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Polivexa on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      >
        <MessageCircle size={30} strokeWidth={2.5} />
      </a>
    </div>
  );
}

export default WhatsAppButton;